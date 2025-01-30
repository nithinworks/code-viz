import * as esprima from 'esprima';
import { parse as parseJava } from 'java-parser';
import { Language } from '@/types';

export interface AnalysisResult {
  type: 'info' | 'warning' | 'error';
  message: string;
  line?: number;
  column?: number;
}

export async function analyzeCode(code: string, language: Language): Promise<AnalysisResult[]> {
  const results: AnalysisResult[] = [];

  try {
    switch (language) {
      case 'javascript':
        return analyzeJavaScript(code);
      case 'python':
        return analyzePython(code);
      case 'java':
        return analyzeJava(code);
      case 'sql':
        return analyzeSQL(code);
      default:
        return [{ type: 'error', message: 'Unsupported language' }];
    }
  } catch (error: any) {
    return [{
      type: 'error',
      message: error.message || 'Failed to analyze code'
    }];
  }
}

function analyzeJavaScript(code: string): AnalysisResult[] {
  const results: AnalysisResult[] = [];

  try {
    // Parse the code
    const ast = esprima.parseScript(code, { loc: true });

    // Code Structure Analysis
    let functionCount = 0;
    let arrowFunctionCount = 0;
    let classCount = 0;
    let longFunctions: string[] = [];
    let complexFunctions: string[] = [];
    let nestedFunctions: string[] = [];
    let catchBlocks = 0;
    let promiseCount = 0;
    let asyncFunctions = 0;

    esprima.parseScript(code, {}, (node: any) => {
      // Function Analysis
      if (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression') {
        functionCount++;
        const functionBody = code.slice(node.body.range![0], node.body.range![1]);
        const lines = functionBody.split('\n').length;
        
        if (lines > 20) {
          longFunctions.push(`Function at line ${node.loc?.start.line}`);
        }

        // Check for nested functions
        if (node.body.body.some((n: any) => 
          n.type === 'FunctionDeclaration' || 
          n.type === 'FunctionExpression' ||
          n.type === 'ArrowFunctionExpression'
        )) {
          nestedFunctions.push(`Function at line ${node.loc?.start.line}`);
        }
      }

      // Arrow Function Analysis
      if (node.type === 'ArrowFunctionExpression') {
        arrowFunctionCount++;
      }

      // Class Analysis
      if (node.type === 'ClassDeclaration') {
        classCount++;
      }

      // Async/Promise Analysis
      if (node.async) {
        asyncFunctions++;
      }
      if (node.type === 'NewExpression' && node.callee.name === 'Promise') {
        promiseCount++;
      }

      // Error Handling Analysis
      if (node.type === 'CatchClause') {
        catchBlocks++;
      }
    });

    // Code Structure Results
    results.push({
      type: 'info',
      message: `Found ${functionCount} regular functions and ${arrowFunctionCount} arrow functions`
    });

    if (classCount > 0) {
      results.push({
        type: 'info',
        message: `Found ${classCount} classes in the code`
      });
    }

    if (asyncFunctions > 0 || promiseCount > 0) {
      results.push({
        type: 'info',
        message: `Asynchronous code: ${asyncFunctions} async functions, ${promiseCount} Promise constructions`
      });
    }

    // Code Quality Warnings
    if (longFunctions.length > 0) {
      results.push({
        type: 'warning',
        message: `Long functions detected (>20 lines): ${longFunctions.join(', ')}. Consider breaking them down.`
      });
    }

    if (nestedFunctions.length > 0) {
      results.push({
        type: 'warning',
        message: `Nested functions detected in: ${nestedFunctions.join(', ')}. Consider refactoring for better readability.`
      });
    }

    // Error Handling Analysis
    if (catchBlocks === 0 && (asyncFunctions > 0 || promiseCount > 0)) {
      results.push({
        type: 'warning',
        message: 'Asynchronous code detected without error handling. Consider adding try-catch blocks.'
      });
    }

    // Best Practices Analysis
    const patterns = {
      consoleLog: /console\.(log|warn|error|info|debug)/g,
      debugger: /debugger;/g,
      todos: /\/\/\s*TODO|\/\*\s*TODO/gi,
      magicNumbers: /(?<![\w])-?\d+(?![\w])/g,
      hardcodedUrls: /(["'])(?:(?:https?|ftp):\/\/)[\w-]+(?:\.[\w-]+)+[\w.,@?^=%&:/~+#-]*\1/g
    };

    // Check for console statements
    const consoleMatches = code.match(patterns.consoleLog) || [];
    if (consoleMatches.length > 0) {
      results.push({
        type: 'warning',
        message: `Found ${consoleMatches.length} console statements that should be removed in production`
      });
    }

    // Check for debugger statements
    const debuggerMatches = code.match(patterns.debugger) || [];
    if (debuggerMatches.length > 0) {
      results.push({
        type: 'warning',
        message: `Found ${debuggerMatches.length} debugger statements that should be removed`
      });
    }

    // Check for magic numbers
    const magicNumbers = code.match(patterns.magicNumbers) || [];
    if (magicNumbers.length > 5) {
      results.push({
        type: 'warning',
        message: 'Multiple magic numbers detected. Consider using named constants.'
      });
    }

    // Check for hardcoded URLs
    const hardcodedUrls = code.match(patterns.hardcodedUrls) || [];
    if (hardcodedUrls.length > 0) {
      results.push({
        type: 'warning',
        message: `Found ${hardcodedUrls.length} hardcoded URLs. Consider moving them to configuration.`
      });
    }

    // Check for TODOs
    const todos = code.match(patterns.todos) || [];
    if (todos.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${todos.length} TODO comments that need attention`
      });
    }

  } catch (error: any) {
    results.push({
      type: 'error',
      message: `Syntax error: ${error.message}`
    });
  }

  return results;
}

function analyzePython(code: string): AnalysisResult[] {
  const results: AnalysisResult[] = [];

  // Code Structure Patterns
  const patterns = {
    imports: /^import\s+[\w\s,]+$|^from\s+[\w.]+\s+import\s+[\w\s,]+$/gm,
    classes: /class\s+\w+(\s*\([^)]*\))?:/g,
    functions: /def\s+\w+\s*\([^)]*\):/g,
    asyncFunctions: /async\s+def\s+\w+/g,
    decorators: /@\w+/g,
    globals: /^[A-Z][A-Z_]*\s*=/gm,
    todos: /#\s*TODO/gi,
    prints: /print\s*\(/g,
    exceptions: /except\s+(?:\w+(?:\s+as\s+\w+)?)?:/g,
    listComprehensions: /\[\s*[\w\s.()]+\s+for\s+[\w\s]+\s+in\s+[\w\s.()]+\]/g,
    lambdas: /lambda\s+[^:]+:/g,
    magicMethods: /def\s+__\w+__\s*\(/g,
    typeHints: /:\s*[A-Z]\w*(?:\[.*?\])?/g,
    fStrings: /f['"]/g
  };

  // Code Structure Analysis
  const imports = code.match(patterns.imports) || [];
  results.push({
    type: 'info',
    message: `Found ${imports.length} imports`
  });

  const classes = code.match(patterns.classes) || [];
  results.push({
    type: 'info',
    message: `Found ${classes.length} classes`
  });

  const functions = code.match(patterns.functions) || [];
  results.push({
    type: 'info',
    message: `Found ${functions.length} functions`
  });

  // Modern Python Features
  const asyncFuncs = code.match(patterns.asyncFunctions) || [];
  if (asyncFuncs.length > 0) {
    results.push({
      type: 'info',
      message: `Found ${asyncFuncs.length} async functions`
    });
  }

  const typeHints = code.match(patterns.typeHints) || [];
  if (typeHints.length > 0) {
    results.push({
      type: 'info',
      message: `Found ${typeHints.length} type hints - good practice for code clarity`
    });
  }

  // Code Quality Analysis
  const globals = code.match(patterns.globals) || [];
  if (globals.length > 0) {
    results.push({
      type: 'warning',
      message: `Found ${globals.length} global constants. Consider using a configuration file or class constants.`
    });
  }

  const prints = code.match(patterns.prints) || [];
  if (prints.length > 0) {
    results.push({
      type: 'warning',
      message: `Found ${prints.length} print statements. Consider using a proper logging framework.`
    });
  }

  // Exception Handling
  const exceptions = code.match(patterns.exceptions) || [];
  if (exceptions.length === 0 && asyncFuncs.length > 0) {
    results.push({
      type: 'warning',
      message: 'Async functions found without exception handling. Consider adding try-except blocks.'
    });
  }

  // Advanced Features Analysis
  const listComprehensions = code.match(patterns.listComprehensions) || [];
  if (listComprehensions.length > 3) {
    results.push({
      type: 'warning',
      message: 'Multiple list comprehensions found. Ensure they remain readable.'
    });
  }

  const lambdas = code.match(patterns.lambdas) || [];
  if (lambdas.length > 0) {
    results.push({
      type: 'info',
      message: `Found ${lambdas.length} lambda functions`
    });
  }

  const magicMethods = code.match(patterns.magicMethods) || [];
  if (magicMethods.length > 0) {
    results.push({
      type: 'info',
      message: `Found ${magicMethods.length} magic methods`
    });
  }

  // Modern Python Features
  const fStrings = code.match(patterns.fStrings) || [];
  if (fStrings.length === 0 && code.includes('%') && code.includes('.format')) {
    results.push({
      type: 'warning',
      message: 'Using old string formatting. Consider using f-strings for better readability.'
    });
  }

  // Decorator Usage
  const decorators = code.match(patterns.decorators) || [];
  if (decorators.length > 0) {
    results.push({
      type: 'info',
      message: `Found ${decorators.length} decorators`
    });
  }

  return results;
}

function analyzeJava(code: string): AnalysisResult[] {
  const results: AnalysisResult[] = [];

  try {
    // Parse Java code
    const ast = parseJava(code);

    // Code Structure Patterns
    const patterns = {
      publicClass: /public\s+class\s+\w+/g,
      privateFields: /private\s+[\w<>[\],\s]+\s+\w+/g,
      methods: /(?:public|private|protected)\s+[\w<>[\],\s]+\s+\w+\s*\([^)]*\)/g,
      constructors: /public\s+\w+\s*\([^)]*\)\s*{/g,
      interfaces: /interface\s+\w+/g,
      annotations: /@\w+/g,
      generics: /<[^>]+>/g,
      streams: /\.stream\(\)/g,
      lambdas: /->/g,
      staticMethods: /static\s+[\w<>[\],\s]+\s+\w+\s*\(/g,
      finalFields: /final\s+[\w<>[\],\s]+\s+\w+/g,
      todos: /\/\/\s*TODO|\/\*\s*TODO/gi,
      systemOut: /System\.out\.|System\.err\./g,
      throwsExceptions: /throws\s+[\w,\s]+/g,
      tryCatch: /try\s*{/g,
      synchronizedBlocks: /synchronized\s*\([^)]*\)\s*{/g
    };

    // Class Structure Analysis
    const classes = code.match(patterns.publicClass) || [];
    results.push({
      type: 'info',
      message: `Found ${classes.length} public classes`
    });

    const interfaces = code.match(patterns.interfaces) || [];
    if (interfaces.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${interfaces.length} interfaces`
      });
    }

    // Field Analysis
    const privateFields = code.match(patterns.privateFields) || [];
    results.push({
      type: 'info',
      message: `Found ${privateFields.length} private fields`
    });

    const finalFields = code.match(patterns.finalFields) || [];
    if (finalFields.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${finalFields.length} final fields - good for immutability`
      });
    }

    // Method Analysis
    const methods = code.match(patterns.methods) || [];
    results.push({
      type: 'info',
      message: `Found ${methods.length} methods`
    });

    const staticMethods = code.match(patterns.staticMethods) || [];
    if (staticMethods.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${staticMethods.length} static methods`
      });
    }

    // Modern Java Features
    const streams = code.match(patterns.streams) || [];
    const lambdas = code.match(patterns.lambdas) || [];
    if (streams.length > 0 || lambdas.length > 0) {
      results.push({
        type: 'info',
        message: `Modern Java features: ${streams.length} stream operations, ${lambdas.length} lambda expressions`
      });
    }

    // Generic Usage
    const generics = code.match(patterns.generics) || [];
    if (generics.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${generics.length} generic type usages`
      });
    }

    // Error Handling Analysis
    const throwsDeclarations = code.match(patterns.throwsExceptions) || [];
    const tryCatchBlocks = code.match(patterns.tryCatch) || [];
    results.push({
      type: 'info',
      message: `Exception handling: ${throwsDeclarations.length} throws declarations, ${tryCatchBlocks.length} try-catch blocks`
    });

    // Concurrency Analysis
    const synchronizedBlocks = code.match(patterns.synchronizedBlocks) || [];
    if (synchronizedBlocks.length > 0) {
      results.push({
        type: 'warning',
        message: `Found ${synchronizedBlocks.length} synchronized blocks. Ensure proper concurrency handling.`
      });
    }

    // Code Quality Warnings
    const systemOuts = code.match(patterns.systemOut) || [];
    if (systemOuts.length > 0) {
      results.push({
        type: 'warning',
        message: `Found ${systemOuts.length} System.out/err statements. Consider using a logging framework.`
      });
    }

    // Annotation Usage
    const annotations = code.match(patterns.annotations) || [];
    if (annotations.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${annotations.length} annotations`
      });
    }

    // Constructor Analysis
    const constructors = code.match(patterns.constructors) || [];
    if (constructors.length === 0 && classes.length > 0) {
      results.push({
        type: 'warning',
        message: 'No explicit constructors found. Consider adding them for better object initialization.'
      });
    }

  } catch (error: any) {
    results.push({
      type: 'error',
      message: `Syntax error: ${error.message}`
    });
  }

  return results;
}

function analyzeSQL(code: string): AnalysisResult[] {
  const results: AnalysisResult[] = [];

  try {
    // SQL Patterns Analysis
    const patterns = {
      select: /SELECT\s+\*/gi,
      selectColumns: /SELECT\s+(?!\*)([\w\s,]+|\([^)]*\))\s+FROM/gi,
      where: /WHERE\s+/gi,
      join: /(?:INNER|LEFT|RIGHT|FULL|CROSS)?\s*JOIN\s+/gi,
      orderBy: /ORDER\s+BY\s+/gi,
      groupBy: /GROUP\s+BY\s+/gi,
      having: /HAVING\s+/gi,
      union: /UNION\s+(?:ALL\s+)?/gi,
      distinct: /DISTINCT\s+/gi,
      subqueries: /\(\s*SELECT\s+/gi,
      cte: /WITH\s+\w+\s+AS\s+\(/gi,
      indexHints: /(?:FORCE|USE|IGNORE)\s+INDEX\s*/gi,
      tempTables: /#|TEMPORARY\s+TABLE/gi,
      transactions: /BEGIN|COMMIT|ROLLBACK/gi,
      indexes: /CREATE\s+(?:UNIQUE\s+)?INDEX/gi,
      constraints: /CONSTRAINT\s+\w+\s+/gi,
      views: /CREATE\s+(?:OR\s+REPLACE\s+)?VIEW/gi,
      storedProcs: /CREATE\s+PROCEDURE|CREATE\s+FUNCTION/gi,
      triggers: /CREATE\s+TRIGGER/gi
    };

    // Query Structure Analysis
    const selectAll = code.match(patterns.select) || [];
    if (selectAll.length > 0) {
      results.push({
        type: 'warning',
        message: `Found ${selectAll.length} instances of SELECT *. Consider specifying columns explicitly for better performance.`
      });
    }

    const selectColumns = code.match(patterns.selectColumns) || [];
    if (selectColumns.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${selectColumns.length} SELECT statements with explicit column selections`
      });
    }

    // Join Analysis
    const joins = code.match(patterns.join) || [];
    if (joins.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${joins.length} JOIN operations. Ensure proper indexing for joined columns.`
      });
    }

    // Filtering and Grouping Analysis
    const where = code.match(patterns.where) || [];
    const groupBy = code.match(patterns.groupBy) || [];
    const having = code.match(patterns.having) || [];
    results.push({
      type: 'info',
      message: `Query components: ${where.length} WHERE clauses, ${groupBy.length} GROUP BY, ${having.length} HAVING clauses`
    });

    // Performance Considerations
    const distinct = code.match(patterns.distinct) || [];
    if (distinct.length > 0) {
      results.push({
        type: 'warning',
        message: `Found ${distinct.length} DISTINCT operations. Verify if they are necessary as they can impact performance.`
      });
    }

    const subqueries = code.match(patterns.subqueries) || [];
    if (subqueries.length > 0) {
      results.push({
        type: 'warning',
        message: `Found ${subqueries.length} subqueries. Consider using JOINs where possible for better performance.`
      });
    }

    // Advanced SQL Features
    const ctes = code.match(patterns.cte) || [];
    if (ctes.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${ctes.length} Common Table Expressions (CTEs) - good for query readability`
      });
    }

    // Database Objects
    const views = code.match(patterns.views) || [];
    if (views.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${views.length} view definitions`
      });
    }

    const storedProcs = code.match(patterns.storedProcs) || [];
    if (storedProcs.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${storedProcs.length} stored procedure/function definitions`
      });
    }

    const triggers = code.match(patterns.triggers) || [];
    if (triggers.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${triggers.length} trigger definitions`
      });
    }

    // Database Design
    const indexes = code.match(patterns.indexes) || [];
    if (indexes.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${indexes.length} index definitions`
      });
    }

    const constraints = code.match(patterns.constraints) || [];
    if (constraints.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${constraints.length} constraint definitions`
      });
    }

    // Best Practices
    const tempTables = code.match(patterns.tempTables) || [];
    if (tempTables.length > 0) {
      results.push({
        type: 'warning',
        message: `Found ${tempTables.length} temporary tables. Consider using CTEs for better performance and maintainability.`
      });
    }

    const transactions = code.match(patterns.transactions) || [];
    if (transactions.length > 0) {
      results.push({
        type: 'info',
        message: `Found ${transactions.length} transaction statements. Ensure proper transaction management.`
      });
    }

  } catch (error: any) {
    results.push({
      type: 'error',
      message: `SQL analysis error: ${error.message}`
    });
  }

  return results;
}