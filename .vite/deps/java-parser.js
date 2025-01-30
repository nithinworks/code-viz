import {
  assign_default,
  clone_default,
  compact_default,
  defaults_default,
  difference_default,
  dropRight_default,
  drop_default,
  every_default,
  filter_default,
  find_default,
  flatMap_default,
  flatten_default,
  forEach_default,
  groupBy_default,
  has_default,
  head_default,
  includes_default,
  indexOf_default,
  isRegExp_default,
  isString_default,
  isUndefined_default,
  keys_default,
  last_default,
  map_default,
  min_default,
  noop_default,
  pickBy_default,
  reduce_default,
  reject_default,
  some_default,
  uniqBy_default,
  uniq_default,
  values_default
} from "./chunk-RZK6HI5K.js";
import {
  identity_default,
  isArray_default,
  isEmpty_default,
  isFunction_default,
  isObject_default
} from "./chunk-CI4ASCZJ.js";
import {
  __commonJS,
  __toESM
} from "./chunk-PR4QN5HX.js";

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol = root.Symbol;
    module.exports = Symbol;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol ? Symbol.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_baseSlice.js
var require_baseSlice = __commonJS({
  "node_modules/lodash/_baseSlice.js"(exports, module) {
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    module.exports = baseSlice;
  }
});

// node_modules/lodash/_castSlice.js
var require_castSlice = __commonJS({
  "node_modules/lodash/_castSlice.js"(exports, module) {
    var baseSlice = require_baseSlice();
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    module.exports = castSlice;
  }
});

// node_modules/lodash/_hasUnicode.js
var require_hasUnicode = __commonJS({
  "node_modules/lodash/_hasUnicode.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsZWJ = "\\u200d";
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    module.exports = hasUnicode;
  }
});

// node_modules/lodash/_asciiToArray.js
var require_asciiToArray = __commonJS({
  "node_modules/lodash/_asciiToArray.js"(exports, module) {
    function asciiToArray(string) {
      return string.split("");
    }
    module.exports = asciiToArray;
  }
});

// node_modules/lodash/_unicodeToArray.js
var require_unicodeToArray = __commonJS({
  "node_modules/lodash/_unicodeToArray.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsCombo = "[" + rsComboRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ = "\\u200d";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    module.exports = unicodeToArray;
  }
});

// node_modules/lodash/_stringToArray.js
var require_stringToArray = __commonJS({
  "node_modules/lodash/_stringToArray.js"(exports, module) {
    var asciiToArray = require_asciiToArray();
    var hasUnicode = require_hasUnicode();
    var unicodeToArray = require_unicodeToArray();
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    module.exports = stringToArray;
  }
});

// node_modules/lodash/_createCaseFirst.js
var require_createCaseFirst = __commonJS({
  "node_modules/lodash/_createCaseFirst.js"(exports, module) {
    var castSlice = require_castSlice();
    var hasUnicode = require_hasUnicode();
    var stringToArray = require_stringToArray();
    var toString = require_toString();
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    module.exports = createCaseFirst;
  }
});

// node_modules/lodash/upperFirst.js
var require_upperFirst = __commonJS({
  "node_modules/lodash/upperFirst.js"(exports, module) {
    var createCaseFirst = require_createCaseFirst();
    var upperFirst = createCaseFirst("toUpperCase");
    module.exports = upperFirst;
  }
});

// node_modules/lodash/capitalize.js
var require_capitalize = __commonJS({
  "node_modules/lodash/capitalize.js"(exports, module) {
    var toString = require_toString();
    var upperFirst = require_upperFirst();
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }
    module.exports = capitalize;
  }
});

// node_modules/lodash/_arrayReduce.js
var require_arrayReduce = __commonJS({
  "node_modules/lodash/_arrayReduce.js"(exports, module) {
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    module.exports = arrayReduce;
  }
});

// node_modules/lodash/_basePropertyOf.js
var require_basePropertyOf = __commonJS({
  "node_modules/lodash/_basePropertyOf.js"(exports, module) {
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = basePropertyOf;
  }
});

// node_modules/lodash/_deburrLetter.js
var require_deburrLetter = __commonJS({
  "node_modules/lodash/_deburrLetter.js"(exports, module) {
    var basePropertyOf = require_basePropertyOf();
    var deburredLetters = {
      // Latin-1 Supplement block.
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "Ç": "C",
      "ç": "c",
      "Ð": "D",
      "ð": "d",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "Ñ": "N",
      "ñ": "n",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "Ý": "Y",
      "ý": "y",
      "ÿ": "y",
      "Æ": "Ae",
      "æ": "ae",
      "Þ": "Th",
      "þ": "th",
      "ß": "ss",
      // Latin Extended-A block.
      "Ā": "A",
      "Ă": "A",
      "Ą": "A",
      "ā": "a",
      "ă": "a",
      "ą": "a",
      "Ć": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Č": "C",
      "ć": "c",
      "ĉ": "c",
      "ċ": "c",
      "č": "c",
      "Ď": "D",
      "Đ": "D",
      "ď": "d",
      "đ": "d",
      "Ē": "E",
      "Ĕ": "E",
      "Ė": "E",
      "Ę": "E",
      "Ě": "E",
      "ē": "e",
      "ĕ": "e",
      "ė": "e",
      "ę": "e",
      "ě": "e",
      "Ĝ": "G",
      "Ğ": "G",
      "Ġ": "G",
      "Ģ": "G",
      "ĝ": "g",
      "ğ": "g",
      "ġ": "g",
      "ģ": "g",
      "Ĥ": "H",
      "Ħ": "H",
      "ĥ": "h",
      "ħ": "h",
      "Ĩ": "I",
      "Ī": "I",
      "Ĭ": "I",
      "Į": "I",
      "İ": "I",
      "ĩ": "i",
      "ī": "i",
      "ĭ": "i",
      "į": "i",
      "ı": "i",
      "Ĵ": "J",
      "ĵ": "j",
      "Ķ": "K",
      "ķ": "k",
      "ĸ": "k",
      "Ĺ": "L",
      "Ļ": "L",
      "Ľ": "L",
      "Ŀ": "L",
      "Ł": "L",
      "ĺ": "l",
      "ļ": "l",
      "ľ": "l",
      "ŀ": "l",
      "ł": "l",
      "Ń": "N",
      "Ņ": "N",
      "Ň": "N",
      "Ŋ": "N",
      "ń": "n",
      "ņ": "n",
      "ň": "n",
      "ŋ": "n",
      "Ō": "O",
      "Ŏ": "O",
      "Ő": "O",
      "ō": "o",
      "ŏ": "o",
      "ő": "o",
      "Ŕ": "R",
      "Ŗ": "R",
      "Ř": "R",
      "ŕ": "r",
      "ŗ": "r",
      "ř": "r",
      "Ś": "S",
      "Ŝ": "S",
      "Ş": "S",
      "Š": "S",
      "ś": "s",
      "ŝ": "s",
      "ş": "s",
      "š": "s",
      "Ţ": "T",
      "Ť": "T",
      "Ŧ": "T",
      "ţ": "t",
      "ť": "t",
      "ŧ": "t",
      "Ũ": "U",
      "Ū": "U",
      "Ŭ": "U",
      "Ů": "U",
      "Ű": "U",
      "Ų": "U",
      "ũ": "u",
      "ū": "u",
      "ŭ": "u",
      "ů": "u",
      "ű": "u",
      "ų": "u",
      "Ŵ": "W",
      "ŵ": "w",
      "Ŷ": "Y",
      "ŷ": "y",
      "Ÿ": "Y",
      "Ź": "Z",
      "Ż": "Z",
      "Ž": "Z",
      "ź": "z",
      "ż": "z",
      "ž": "z",
      "Ĳ": "IJ",
      "ĳ": "ij",
      "Œ": "Oe",
      "œ": "oe",
      "ŉ": "'n",
      "ſ": "s"
    };
    var deburrLetter = basePropertyOf(deburredLetters);
    module.exports = deburrLetter;
  }
});

// node_modules/lodash/deburr.js
var require_deburr = __commonJS({
  "node_modules/lodash/deburr.js"(exports, module) {
    var deburrLetter = require_deburrLetter();
    var toString = require_toString();
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsCombo = "[" + rsComboRange + "]";
    var reComboMark = RegExp(rsCombo, "g");
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
    }
    module.exports = deburr;
  }
});

// node_modules/lodash/_asciiWords.js
var require_asciiWords = __commonJS({
  "node_modules/lodash/_asciiWords.js"(exports, module) {
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    module.exports = asciiWords;
  }
});

// node_modules/lodash/_hasUnicodeWord.js
var require_hasUnicodeWord = __commonJS({
  "node_modules/lodash/_hasUnicodeWord.js"(exports, module) {
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    module.exports = hasUnicodeWord;
  }
});

// node_modules/lodash/_unicodeWords.js
var require_unicodeWords = __commonJS({
  "node_modules/lodash/_unicodeWords.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsDingbatRange = "\\u2700-\\u27bf";
    var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
    var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
    var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
    var rsPunctuationRange = "\\u2000-\\u206f";
    var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
    var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['’]";
    var rsBreak = "[" + rsBreakRange + "]";
    var rsCombo = "[" + rsComboRange + "]";
    var rsDigits = "\\d+";
    var rsDingbat = "[" + rsDingbatRange + "]";
    var rsLower = "[" + rsLowerRange + "]";
    var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsUpper = "[" + rsUpperRange + "]";
    var rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")";
    var rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")";
    var rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
    var rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
    var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    module.exports = unicodeWords;
  }
});

// node_modules/lodash/words.js
var require_words = __commonJS({
  "node_modules/lodash/words.js"(exports, module) {
    var asciiWords = require_asciiWords();
    var hasUnicodeWord = require_hasUnicodeWord();
    var toString = require_toString();
    var unicodeWords = require_unicodeWords();
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? void 0 : pattern;
      if (pattern === void 0) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }
    module.exports = words;
  }
});

// node_modules/lodash/_createCompounder.js
var require_createCompounder = __commonJS({
  "node_modules/lodash/_createCompounder.js"(exports, module) {
    var arrayReduce = require_arrayReduce();
    var deburr = require_deburr();
    var words = require_words();
    var rsApos = "['’]";
    var reApos = RegExp(rsApos, "g");
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
      };
    }
    module.exports = createCompounder;
  }
});

// node_modules/lodash/camelCase.js
var require_camelCase = __commonJS({
  "node_modules/lodash/camelCase.js"(exports, module) {
    var capitalize = require_capitalize();
    var createCompounder = require_createCompounder();
    var camelCase2 = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });
    module.exports = camelCase2;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol = require_Symbol();
    var Uint8Array = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol ? Symbol.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index = -1, length = path.length, result = false;
      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity(value) {
      return value;
    }
    module.exports = identity;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/_createFind.js
var require_createFind = __commonJS({
  "node_modules/lodash/_createFind.js"(exports, module) {
    var baseIteratee = require_baseIteratee();
    var isArrayLike = require_isArrayLike();
    var keys = require_keys();
    function createFind(findIndexFunc) {
      return function(collection, predicate, fromIndex) {
        var iterable = Object(collection);
        if (!isArrayLike(collection)) {
          var iteratee = baseIteratee(predicate, 3);
          collection = keys(collection);
          predicate = function(key) {
            return iteratee(iterable[key], key, iterable);
          };
        }
        var index = findIndexFunc(collection, predicate, fromIndex);
        return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
      };
    }
    module.exports = createFind;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "node_modules/lodash/toFinite.js"(exports, module) {
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module.exports = toFinite;
  }
});

// node_modules/lodash/toInteger.js
var require_toInteger = __commonJS({
  "node_modules/lodash/toInteger.js"(exports, module) {
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    module.exports = toInteger;
  }
});

// node_modules/lodash/findLastIndex.js
var require_findLastIndex = __commonJS({
  "node_modules/lodash/findLastIndex.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIteratee = require_baseIteratee();
    var toInteger = require_toInteger();
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function findLastIndex(array, predicate, fromIndex) {
      var length = array == null ? 0 : array.length;
      if (!length) {
        return -1;
      }
      var index = length - 1;
      if (fromIndex !== void 0) {
        index = toInteger(fromIndex);
        index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
      }
      return baseFindIndex(array, baseIteratee(predicate, 3), index, true);
    }
    module.exports = findLastIndex;
  }
});

// node_modules/lodash/findLast.js
var require_findLast = __commonJS({
  "node_modules/lodash/findLast.js"(exports, module) {
    var createFind = require_createFind();
    var findLastIndex = require_findLastIndex();
    var findLast2 = createFind(findLastIndex);
    module.exports = findLast2;
  }
});

// node_modules/@chevrotain/utils/lib/src/print.js
function PRINT_ERROR(msg) {
  if (console && console.error) {
    console.error(`Error: ${msg}`);
  }
}
function PRINT_WARNING(msg) {
  if (console && console.warn) {
    console.warn(`Warning: ${msg}`);
  }
}

// node_modules/@chevrotain/utils/lib/src/timer.js
function timer(func) {
  const start = (/* @__PURE__ */ new Date()).getTime();
  const val = func();
  const end = (/* @__PURE__ */ new Date()).getTime();
  const total = end - start;
  return { time: total, value: val };
}

// node_modules/@chevrotain/utils/lib/src/to-fast-properties.js
function toFastProperties(toBecomeFast) {
  function FakeConstructor() {
  }
  FakeConstructor.prototype = toBecomeFast;
  const fakeInstance = new FakeConstructor();
  function fakeAccess() {
    return typeof fakeInstance.bar;
  }
  fakeAccess();
  fakeAccess();
  if (1)
    return toBecomeFast;
  (0, eval)(toBecomeFast);
}

// node_modules/@chevrotain/gast/lib/src/model.js
function tokenLabel(tokType) {
  if (hasTokenLabel(tokType)) {
    return tokType.LABEL;
  } else {
    return tokType.name;
  }
}
function hasTokenLabel(obj) {
  return isString_default(obj.LABEL) && obj.LABEL !== "";
}
var AbstractProduction = class {
  get definition() {
    return this._definition;
  }
  set definition(value) {
    this._definition = value;
  }
  constructor(_definition) {
    this._definition = _definition;
  }
  accept(visitor) {
    visitor.visit(this);
    forEach_default(this.definition, (prod) => {
      prod.accept(visitor);
    });
  }
};
var NonTerminal = class extends AbstractProduction {
  constructor(options) {
    super([]);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
  set definition(definition) {
  }
  get definition() {
    if (this.referencedRule !== void 0) {
      return this.referencedRule.definition;
    }
    return [];
  }
  accept(visitor) {
    visitor.visit(this);
  }
};
var Rule = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.orgText = "";
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Alternative = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.ignoreAmbiguities = false;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Option = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var RepetitionMandatory = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var RepetitionMandatoryWithSeparator = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Repetition = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var RepetitionWithSeparator = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Alternation = class extends AbstractProduction {
  get definition() {
    return this._definition;
  }
  set definition(value) {
    this._definition = value;
  }
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    this.ignoreAmbiguities = false;
    this.hasPredicates = false;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Terminal = class {
  constructor(options) {
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
  accept(visitor) {
    visitor.visit(this);
  }
};
function serializeGrammar(topRules) {
  return map_default(topRules, serializeProduction);
}
function serializeProduction(node) {
  function convertDefinition(definition) {
    return map_default(definition, serializeProduction);
  }
  if (node instanceof NonTerminal) {
    const serializedNonTerminal = {
      type: "NonTerminal",
      name: node.nonTerminalName,
      idx: node.idx
    };
    if (isString_default(node.label)) {
      serializedNonTerminal.label = node.label;
    }
    return serializedNonTerminal;
  } else if (node instanceof Alternative) {
    return {
      type: "Alternative",
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Option) {
    return {
      type: "Option",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof RepetitionMandatory) {
    return {
      type: "RepetitionMandatory",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof RepetitionMandatoryWithSeparator) {
    return {
      type: "RepetitionMandatoryWithSeparator",
      idx: node.idx,
      separator: serializeProduction(new Terminal({ terminalType: node.separator })),
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof RepetitionWithSeparator) {
    return {
      type: "RepetitionWithSeparator",
      idx: node.idx,
      separator: serializeProduction(new Terminal({ terminalType: node.separator })),
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Repetition) {
    return {
      type: "Repetition",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Alternation) {
    return {
      type: "Alternation",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Terminal) {
    const serializedTerminal = {
      type: "Terminal",
      name: node.terminalType.name,
      label: tokenLabel(node.terminalType),
      idx: node.idx
    };
    if (isString_default(node.label)) {
      serializedTerminal.terminalLabel = node.label;
    }
    const pattern = node.terminalType.PATTERN;
    if (node.terminalType.PATTERN) {
      serializedTerminal.pattern = isRegExp_default(pattern) ? pattern.source : pattern;
    }
    return serializedTerminal;
  } else if (node instanceof Rule) {
    return {
      type: "Rule",
      name: node.name,
      orgText: node.orgText,
      definition: convertDefinition(node.definition)
    };
  } else {
    throw Error("non exhaustive match");
  }
}

// node_modules/@chevrotain/gast/lib/src/visitor.js
var GAstVisitor = class {
  visit(node) {
    const nodeAny = node;
    switch (nodeAny.constructor) {
      case NonTerminal:
        return this.visitNonTerminal(nodeAny);
      case Alternative:
        return this.visitAlternative(nodeAny);
      case Option:
        return this.visitOption(nodeAny);
      case RepetitionMandatory:
        return this.visitRepetitionMandatory(nodeAny);
      case RepetitionMandatoryWithSeparator:
        return this.visitRepetitionMandatoryWithSeparator(nodeAny);
      case RepetitionWithSeparator:
        return this.visitRepetitionWithSeparator(nodeAny);
      case Repetition:
        return this.visitRepetition(nodeAny);
      case Alternation:
        return this.visitAlternation(nodeAny);
      case Terminal:
        return this.visitTerminal(nodeAny);
      case Rule:
        return this.visitRule(nodeAny);
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(node) {
  }
  /* c8 ignore next */
  visitAlternative(node) {
  }
  /* c8 ignore next */
  visitOption(node) {
  }
  /* c8 ignore next */
  visitRepetition(node) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(node) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(node) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(node) {
  }
  /* c8 ignore next */
  visitAlternation(node) {
  }
  /* c8 ignore next */
  visitTerminal(node) {
  }
  /* c8 ignore next */
  visitRule(node) {
  }
};

// node_modules/@chevrotain/gast/lib/src/helpers.js
function isSequenceProd(prod) {
  return prod instanceof Alternative || prod instanceof Option || prod instanceof Repetition || prod instanceof RepetitionMandatory || prod instanceof RepetitionMandatoryWithSeparator || prod instanceof RepetitionWithSeparator || prod instanceof Terminal || prod instanceof Rule;
}
function isOptionalProd(prod, alreadyVisited = []) {
  const isDirectlyOptional = prod instanceof Option || prod instanceof Repetition || prod instanceof RepetitionWithSeparator;
  if (isDirectlyOptional) {
    return true;
  }
  if (prod instanceof Alternation) {
    return some_default(prod.definition, (subProd) => {
      return isOptionalProd(subProd, alreadyVisited);
    });
  } else if (prod instanceof NonTerminal && includes_default(alreadyVisited, prod)) {
    return false;
  } else if (prod instanceof AbstractProduction) {
    if (prod instanceof NonTerminal) {
      alreadyVisited.push(prod);
    }
    return every_default(prod.definition, (subProd) => {
      return isOptionalProd(subProd, alreadyVisited);
    });
  } else {
    return false;
  }
}
function isBranchingProd(prod) {
  return prod instanceof Alternation;
}
function getProductionDslName(prod) {
  if (prod instanceof NonTerminal) {
    return "SUBRULE";
  } else if (prod instanceof Option) {
    return "OPTION";
  } else if (prod instanceof Alternation) {
    return "OR";
  } else if (prod instanceof RepetitionMandatory) {
    return "AT_LEAST_ONE";
  } else if (prod instanceof RepetitionMandatoryWithSeparator) {
    return "AT_LEAST_ONE_SEP";
  } else if (prod instanceof RepetitionWithSeparator) {
    return "MANY_SEP";
  } else if (prod instanceof Repetition) {
    return "MANY";
  } else if (prod instanceof Terminal) {
    return "CONSUME";
  } else {
    throw Error("non exhaustive match");
  }
}

// node_modules/chevrotain/lib/src/parse/grammar/rest.js
var RestWalker = class {
  walk(prod, prevRest = []) {
    forEach_default(prod.definition, (subProd, index) => {
      const currRest = drop_default(prod.definition, index + 1);
      if (subProd instanceof NonTerminal) {
        this.walkProdRef(subProd, currRest, prevRest);
      } else if (subProd instanceof Terminal) {
        this.walkTerminal(subProd, currRest, prevRest);
      } else if (subProd instanceof Alternative) {
        this.walkFlat(subProd, currRest, prevRest);
      } else if (subProd instanceof Option) {
        this.walkOption(subProd, currRest, prevRest);
      } else if (subProd instanceof RepetitionMandatory) {
        this.walkAtLeastOne(subProd, currRest, prevRest);
      } else if (subProd instanceof RepetitionMandatoryWithSeparator) {
        this.walkAtLeastOneSep(subProd, currRest, prevRest);
      } else if (subProd instanceof RepetitionWithSeparator) {
        this.walkManySep(subProd, currRest, prevRest);
      } else if (subProd instanceof Repetition) {
        this.walkMany(subProd, currRest, prevRest);
      } else if (subProd instanceof Alternation) {
        this.walkOr(subProd, currRest, prevRest);
      } else {
        throw Error("non exhaustive match");
      }
    });
  }
  walkTerminal(terminal, currRest, prevRest) {
  }
  walkProdRef(refProd, currRest, prevRest) {
  }
  walkFlat(flatProd, currRest, prevRest) {
    const fullOrRest = currRest.concat(prevRest);
    this.walk(flatProd, fullOrRest);
  }
  walkOption(optionProd, currRest, prevRest) {
    const fullOrRest = currRest.concat(prevRest);
    this.walk(optionProd, fullOrRest);
  }
  walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
    const fullAtLeastOneRest = [
      new Option({ definition: atLeastOneProd.definition })
    ].concat(currRest, prevRest);
    this.walk(atLeastOneProd, fullAtLeastOneRest);
  }
  walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
    const fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);
    this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);
  }
  walkMany(manyProd, currRest, prevRest) {
    const fullManyRest = [
      new Option({ definition: manyProd.definition })
    ].concat(currRest, prevRest);
    this.walk(manyProd, fullManyRest);
  }
  walkManySep(manySepProd, currRest, prevRest) {
    const fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);
    this.walk(manySepProd, fullManySepRest);
  }
  walkOr(orProd, currRest, prevRest) {
    const fullOrRest = currRest.concat(prevRest);
    forEach_default(orProd.definition, (alt) => {
      const prodWrapper = new Alternative({ definition: [alt] });
      this.walk(prodWrapper, fullOrRest);
    });
  }
};
function restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {
  const repSepRest = [
    new Option({
      definition: [
        new Terminal({ terminalType: repSepProd.separator })
      ].concat(repSepProd.definition)
    })
  ];
  const fullRepSepRest = repSepRest.concat(currRest, prevRest);
  return fullRepSepRest;
}

// node_modules/chevrotain/lib/src/parse/grammar/first.js
function first(prod) {
  if (prod instanceof NonTerminal) {
    return first(prod.referencedRule);
  } else if (prod instanceof Terminal) {
    return firstForTerminal(prod);
  } else if (isSequenceProd(prod)) {
    return firstForSequence(prod);
  } else if (isBranchingProd(prod)) {
    return firstForBranching(prod);
  } else {
    throw Error("non exhaustive match");
  }
}
function firstForSequence(prod) {
  let firstSet = [];
  const seq = prod.definition;
  let nextSubProdIdx = 0;
  let hasInnerProdsRemaining = seq.length > nextSubProdIdx;
  let currSubProd;
  let isLastInnerProdOptional = true;
  while (hasInnerProdsRemaining && isLastInnerProdOptional) {
    currSubProd = seq[nextSubProdIdx];
    isLastInnerProdOptional = isOptionalProd(currSubProd);
    firstSet = firstSet.concat(first(currSubProd));
    nextSubProdIdx = nextSubProdIdx + 1;
    hasInnerProdsRemaining = seq.length > nextSubProdIdx;
  }
  return uniq_default(firstSet);
}
function firstForBranching(prod) {
  const allAlternativesFirsts = map_default(prod.definition, (innerProd) => {
    return first(innerProd);
  });
  return uniq_default(flatten_default(allAlternativesFirsts));
}
function firstForTerminal(terminal) {
  return [terminal.terminalType];
}

// node_modules/chevrotain/lib/src/parse/constants.js
var IN = "_~IN~_";

// node_modules/chevrotain/lib/src/parse/grammar/follow.js
var ResyncFollowsWalker = class extends RestWalker {
  constructor(topProd) {
    super();
    this.topProd = topProd;
    this.follows = {};
  }
  startWalking() {
    this.walk(this.topProd);
    return this.follows;
  }
  walkTerminal(terminal, currRest, prevRest) {
  }
  walkProdRef(refProd, currRest, prevRest) {
    const followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) + this.topProd.name;
    const fullRest = currRest.concat(prevRest);
    const restProd = new Alternative({ definition: fullRest });
    const t_in_topProd_follows = first(restProd);
    this.follows[followName] = t_in_topProd_follows;
  }
};
function computeAllProdsFollows(topProductions) {
  const reSyncFollows = {};
  forEach_default(topProductions, (topProd) => {
    const currRefsFollow = new ResyncFollowsWalker(topProd).startWalking();
    assign_default(reSyncFollows, currRefsFollow);
  });
  return reSyncFollows;
}
function buildBetweenProdsFollowPrefix(inner, occurenceInParent) {
  return inner.name + occurenceInParent + IN;
}

// node_modules/@chevrotain/regexp-to-ast/lib/src/utils.js
function cc(char) {
  return char.charCodeAt(0);
}
function insertToSet(item, set) {
  if (Array.isArray(item)) {
    item.forEach(function(subItem) {
      set.push(subItem);
    });
  } else {
    set.push(item);
  }
}
function addFlag(flagObj, flagKey) {
  if (flagObj[flagKey] === true) {
    throw "duplicate flag " + flagKey;
  }
  const x = flagObj[flagKey];
  flagObj[flagKey] = true;
}
function ASSERT_EXISTS(obj) {
  if (obj === void 0) {
    throw Error("Internal Error - Should never get here!");
  }
  return true;
}
function ASSERT_NEVER_REACH_HERE() {
  throw Error("Internal Error - Should never get here!");
}
function isCharacter(obj) {
  return obj["type"] === "Character";
}

// node_modules/@chevrotain/regexp-to-ast/lib/src/character-classes.js
var digitsCharCodes = [];
for (let i = cc("0"); i <= cc("9"); i++) {
  digitsCharCodes.push(i);
}
var wordCharCodes = [cc("_")].concat(digitsCharCodes);
for (let i = cc("a"); i <= cc("z"); i++) {
  wordCharCodes.push(i);
}
for (let i = cc("A"); i <= cc("Z"); i++) {
  wordCharCodes.push(i);
}
var whitespaceCodes = [
  cc(" "),
  cc("\f"),
  cc("\n"),
  cc("\r"),
  cc("	"),
  cc("\v"),
  cc("	"),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc(" "),
  cc("\u2028"),
  cc("\u2029"),
  cc(" "),
  cc(" "),
  cc("　"),
  cc("\uFEFF")
];

// node_modules/@chevrotain/regexp-to-ast/lib/src/regexp-parser.js
var hexDigitPattern = /[0-9a-fA-F]/;
var decimalPattern = /[0-9]/;
var decimalPatternNoZero = /[1-9]/;
var RegExpParser = class {
  constructor() {
    this.idx = 0;
    this.input = "";
    this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(newState2) {
    this.idx = newState2.idx;
    this.input = newState2.input;
    this.groupIdx = newState2.groupIdx;
  }
  pattern(input) {
    this.idx = 0;
    this.input = input;
    this.groupIdx = 0;
    this.consumeChar("/");
    const value = this.disjunction();
    this.consumeChar("/");
    const flags = {
      type: "Flags",
      loc: { begin: this.idx, end: input.length },
      global: false,
      ignoreCase: false,
      multiLine: false,
      unicode: false,
      sticky: false
    };
    while (this.isRegExpFlag()) {
      switch (this.popChar()) {
        case "g":
          addFlag(flags, "global");
          break;
        case "i":
          addFlag(flags, "ignoreCase");
          break;
        case "m":
          addFlag(flags, "multiLine");
          break;
        case "u":
          addFlag(flags, "unicode");
          break;
        case "y":
          addFlag(flags, "sticky");
          break;
      }
    }
    if (this.idx !== this.input.length) {
      throw Error("Redundant input: " + this.input.substring(this.idx));
    }
    return {
      type: "Pattern",
      flags,
      value,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const alts = [];
    const begin = this.idx;
    alts.push(this.alternative());
    while (this.peekChar() === "|") {
      this.consumeChar("|");
      alts.push(this.alternative());
    }
    return { type: "Disjunction", value: alts, loc: this.loc(begin) };
  }
  alternative() {
    const terms = [];
    const begin = this.idx;
    while (this.isTerm()) {
      terms.push(this.term());
    }
    return { type: "Alternative", value: terms, loc: this.loc(begin) };
  }
  term() {
    if (this.isAssertion()) {
      return this.assertion();
    } else {
      return this.atom();
    }
  }
  assertion() {
    const begin = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(begin)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(begin) };
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(begin)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(begin)
            };
        }
        throw Error("Invalid Assertion Escape");
      case "(":
        this.consumeChar("?");
        let type;
        switch (this.popChar()) {
          case "=":
            type = "Lookahead";
            break;
          case "!":
            type = "NegativeLookahead";
            break;
        }
        ASSERT_EXISTS(type);
        const disjunction = this.disjunction();
        this.consumeChar(")");
        return {
          type,
          value: disjunction,
          loc: this.loc(begin)
        };
    }
    return ASSERT_NEVER_REACH_HERE();
  }
  quantifier(isBacktracking = false) {
    let range = void 0;
    const begin = this.idx;
    switch (this.popChar()) {
      case "*":
        range = {
          atLeast: 0,
          atMost: Infinity
        };
        break;
      case "+":
        range = {
          atLeast: 1,
          atMost: Infinity
        };
        break;
      case "?":
        range = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const atLeast = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            range = {
              atLeast,
              atMost: atLeast
            };
            break;
          case ",":
            let atMost;
            if (this.isDigit()) {
              atMost = this.integerIncludingZero();
              range = {
                atLeast,
                atMost
              };
            } else {
              range = {
                atLeast,
                atMost: Infinity
              };
            }
            this.consumeChar("}");
            break;
        }
        if (isBacktracking === true && range === void 0) {
          return void 0;
        }
        ASSERT_EXISTS(range);
        break;
    }
    if (isBacktracking === true && range === void 0) {
      return void 0;
    }
    if (ASSERT_EXISTS(range)) {
      if (this.peekChar(0) === "?") {
        this.consumeChar("?");
        range.greedy = false;
      } else {
        range.greedy = true;
      }
      range.type = "Quantifier";
      range.loc = this.loc(begin);
      return range;
    }
  }
  atom() {
    let atom2;
    const begin = this.idx;
    switch (this.peekChar()) {
      case ".":
        atom2 = this.dotAll();
        break;
      case "\\":
        atom2 = this.atomEscape();
        break;
      case "[":
        atom2 = this.characterClass();
        break;
      case "(":
        atom2 = this.group();
        break;
    }
    if (atom2 === void 0 && this.isPatternCharacter()) {
      atom2 = this.patternCharacter();
    }
    if (ASSERT_EXISTS(atom2)) {
      atom2.loc = this.loc(begin);
      if (this.isQuantifier()) {
        atom2.quantifier = this.quantifier();
      }
      return atom2;
    }
    return ASSERT_NEVER_REACH_HERE();
  }
  dotAll() {
    this.consumeChar(".");
    return {
      type: "Set",
      complement: true,
      value: [cc("\n"), cc("\r"), cc("\u2028"), cc("\u2029")]
    };
  }
  atomEscape() {
    this.consumeChar("\\");
    switch (this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    const value = this.positiveInteger();
    return { type: "GroupBackReference", value };
  }
  characterClassEscape() {
    let set;
    let complement = false;
    switch (this.popChar()) {
      case "d":
        set = digitsCharCodes;
        break;
      case "D":
        set = digitsCharCodes;
        complement = true;
        break;
      case "s":
        set = whitespaceCodes;
        break;
      case "S":
        set = whitespaceCodes;
        complement = true;
        break;
      case "w":
        set = wordCharCodes;
        break;
      case "W":
        set = wordCharCodes;
        complement = true;
        break;
    }
    if (ASSERT_EXISTS(set)) {
      return { type: "Set", value: set, complement };
    }
    return ASSERT_NEVER_REACH_HERE();
  }
  controlEscapeAtom() {
    let escapeCode;
    switch (this.popChar()) {
      case "f":
        escapeCode = cc("\f");
        break;
      case "n":
        escapeCode = cc("\n");
        break;
      case "r":
        escapeCode = cc("\r");
        break;
      case "t":
        escapeCode = cc("	");
        break;
      case "v":
        escapeCode = cc("\v");
        break;
    }
    if (ASSERT_EXISTS(escapeCode)) {
      return { type: "Character", value: escapeCode };
    }
    return ASSERT_NEVER_REACH_HERE();
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const letter = this.popChar();
    if (/[a-zA-Z]/.test(letter) === false) {
      throw Error("Invalid ");
    }
    const letterCode = letter.toUpperCase().charCodeAt(0) - 64;
    return { type: "Character", value: letterCode };
  }
  nulCharacterAtom() {
    this.consumeChar("0");
    return { type: "Character", value: cc("\0") };
  }
  hexEscapeSequenceAtom() {
    this.consumeChar("x");
    return this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    this.consumeChar("u");
    return this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const escapedChar = this.popChar();
    return { type: "Character", value: cc(escapedChar) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
      case "\\":
      case "]":
        throw Error("TBD");
      default:
        const nextChar = this.popChar();
        return { type: "Character", value: cc(nextChar) };
    }
  }
  characterClass() {
    const set = [];
    let complement = false;
    this.consumeChar("[");
    if (this.peekChar(0) === "^") {
      this.consumeChar("^");
      complement = true;
    }
    while (this.isClassAtom()) {
      const from = this.classAtom();
      const isFromSingleChar = from.type === "Character";
      if (isCharacter(from) && this.isRangeDash()) {
        this.consumeChar("-");
        const to = this.classAtom();
        const isToSingleChar = to.type === "Character";
        if (isCharacter(to)) {
          if (to.value < from.value) {
            throw Error("Range out of order in character class");
          }
          set.push({ from: from.value, to: to.value });
        } else {
          insertToSet(from.value, set);
          set.push(cc("-"));
          insertToSet(to.value, set);
        }
      } else {
        insertToSet(from.value, set);
      }
    }
    this.consumeChar("]");
    return { type: "Set", complement, value: set };
  }
  classAtom() {
    switch (this.peekChar()) {
      case "]":
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    this.consumeChar("\\");
    switch (this.peekChar()) {
      case "b":
        this.consumeChar("b");
        return { type: "Character", value: cc("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let capturing = true;
    this.consumeChar("(");
    switch (this.peekChar(0)) {
      case "?":
        this.consumeChar("?");
        this.consumeChar(":");
        capturing = false;
        break;
      default:
        this.groupIdx++;
        break;
    }
    const value = this.disjunction();
    this.consumeChar(")");
    const groupAst = {
      type: "Group",
      capturing,
      value
    };
    if (capturing) {
      groupAst["idx"] = this.groupIdx;
    }
    return groupAst;
  }
  positiveInteger() {
    let number = this.popChar();
    if (decimalPatternNoZero.test(number) === false) {
      throw Error("Expecting a positive integer");
    }
    while (decimalPattern.test(this.peekChar(0))) {
      number += this.popChar();
    }
    return parseInt(number, 10);
  }
  integerIncludingZero() {
    let number = this.popChar();
    if (decimalPattern.test(number) === false) {
      throw Error("Expecting an integer");
    }
    while (decimalPattern.test(this.peekChar(0))) {
      number += this.popChar();
    }
    return parseInt(number, 10);
  }
  patternCharacter() {
    const nextChar = this.popChar();
    switch (nextChar) {
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: cc(nextChar) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return true;
      default:
        return false;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return decimalPattern.test(this.peekChar(0));
  }
  isClassAtom(howMuch = 0) {
    switch (this.peekChar(howMuch)) {
      case "]":
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter()) {
      return true;
    }
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      case "[":
      case "(":
        return true;
      default:
        return false;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return true;
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return true;
          default:
            return false;
        }
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!");
      default:
        return false;
    }
  }
  isQuantifier() {
    const prevState = this.saveState();
    try {
      return this.quantifier(true) !== void 0;
    } catch (e) {
      return false;
    } finally {
      this.restoreState(prevState);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  parseHexDigits(howMany) {
    let hexString = "";
    for (let i = 0; i < howMany; i++) {
      const hexChar = this.popChar();
      if (hexDigitPattern.test(hexChar) === false) {
        throw Error("Expecting a HexDecimal digits");
      }
      hexString += hexChar;
    }
    const charCode = parseInt(hexString, 16);
    return { type: "Character", value: charCode };
  }
  peekChar(howMuch = 0) {
    return this.input[this.idx + howMuch];
  }
  popChar() {
    const nextChar = this.peekChar(0);
    this.consumeChar(void 0);
    return nextChar;
  }
  consumeChar(char) {
    if (char !== void 0 && this.input[this.idx] !== char) {
      throw Error("Expected: '" + char + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    }
    if (this.idx >= this.input.length) {
      throw Error("Unexpected end of input");
    }
    this.idx++;
  }
  loc(begin) {
    return { begin, end: this.idx };
  }
};

// node_modules/@chevrotain/regexp-to-ast/lib/src/base-regexp-visitor.js
var BaseRegExpVisitor = class {
  visitChildren(node) {
    for (const key in node) {
      const child = node[key];
      if (node.hasOwnProperty(key)) {
        if (child.type !== void 0) {
          this.visit(child);
        } else if (Array.isArray(child)) {
          child.forEach((subChild) => {
            this.visit(subChild);
          }, this);
        }
      }
    }
  }
  visit(node) {
    switch (node.type) {
      case "Pattern":
        this.visitPattern(node);
        break;
      case "Flags":
        this.visitFlags(node);
        break;
      case "Disjunction":
        this.visitDisjunction(node);
        break;
      case "Alternative":
        this.visitAlternative(node);
        break;
      case "StartAnchor":
        this.visitStartAnchor(node);
        break;
      case "EndAnchor":
        this.visitEndAnchor(node);
        break;
      case "WordBoundary":
        this.visitWordBoundary(node);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(node);
        break;
      case "Lookahead":
        this.visitLookahead(node);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(node);
        break;
      case "Character":
        this.visitCharacter(node);
        break;
      case "Set":
        this.visitSet(node);
        break;
      case "Group":
        this.visitGroup(node);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(node);
        break;
      case "Quantifier":
        this.visitQuantifier(node);
        break;
    }
    this.visitChildren(node);
  }
  visitPattern(node) {
  }
  visitFlags(node) {
  }
  visitDisjunction(node) {
  }
  visitAlternative(node) {
  }
  // Assertion
  visitStartAnchor(node) {
  }
  visitEndAnchor(node) {
  }
  visitWordBoundary(node) {
  }
  visitNonWordBoundary(node) {
  }
  visitLookahead(node) {
  }
  visitNegativeLookahead(node) {
  }
  // atoms
  visitCharacter(node) {
  }
  visitSet(node) {
  }
  visitGroup(node) {
  }
  visitGroupBackReference(node) {
  }
  visitQuantifier(node) {
  }
};

// node_modules/chevrotain/lib/src/scan/reg_exp_parser.js
var regExpAstCache = {};
var regExpParser = new RegExpParser();
function getRegExpAst(regExp) {
  const regExpStr = regExp.toString();
  if (regExpAstCache.hasOwnProperty(regExpStr)) {
    return regExpAstCache[regExpStr];
  } else {
    const regExpAst = regExpParser.pattern(regExpStr);
    regExpAstCache[regExpStr] = regExpAst;
    return regExpAst;
  }
}
function clearRegExpParserCache() {
  regExpAstCache = {};
}

// node_modules/chevrotain/lib/src/scan/reg_exp.js
var complementErrorMessage = "Complement Sets are not supported for first char optimization";
var failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n';
function getOptimizedStartCodesIndices(regExp, ensureOptimizations = false) {
  try {
    const ast = getRegExpAst(regExp);
    const firstChars = firstCharOptimizedIndices(ast.value, {}, ast.flags.ignoreCase);
    return firstChars;
  } catch (e) {
    if (e.message === complementErrorMessage) {
      if (ensureOptimizations) {
        PRINT_WARNING(`${failedOptimizationPrefixMsg}	Unable to optimize: < ${regExp.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
      }
    } else {
      let msgSuffix = "";
      if (ensureOptimizations) {
        msgSuffix = "\n	This will disable the lexer's first char optimizations.\n	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";
      }
      PRINT_ERROR(`${failedOptimizationPrefixMsg}
	Failed parsing: < ${regExp.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + msgSuffix);
    }
  }
  return [];
}
function firstCharOptimizedIndices(ast, result, ignoreCase) {
  switch (ast.type) {
    case "Disjunction":
      for (let i = 0; i < ast.value.length; i++) {
        firstCharOptimizedIndices(ast.value[i], result, ignoreCase);
      }
      break;
    case "Alternative":
      const terms = ast.value;
      for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        switch (term.type) {
          case "EndAnchor":
          case "GroupBackReference":
          case "Lookahead":
          case "NegativeLookahead":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const atom2 = term;
        switch (atom2.type) {
          case "Character":
            addOptimizedIdxToResult(atom2.value, result, ignoreCase);
            break;
          case "Set":
            if (atom2.complement === true) {
              throw Error(complementErrorMessage);
            }
            forEach_default(atom2.value, (code) => {
              if (typeof code === "number") {
                addOptimizedIdxToResult(code, result, ignoreCase);
              } else {
                const range = code;
                if (ignoreCase === true) {
                  for (let rangeCode = range.from; rangeCode <= range.to; rangeCode++) {
                    addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                  }
                } else {
                  for (let rangeCode = range.from; rangeCode <= range.to && rangeCode < minOptimizationVal; rangeCode++) {
                    addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                  }
                  if (range.to >= minOptimizationVal) {
                    const minUnOptVal = range.from >= minOptimizationVal ? range.from : minOptimizationVal;
                    const maxUnOptVal = range.to;
                    const minOptIdx = charCodeToOptimizedIndex(minUnOptVal);
                    const maxOptIdx = charCodeToOptimizedIndex(maxUnOptVal);
                    for (let currOptIdx = minOptIdx; currOptIdx <= maxOptIdx; currOptIdx++) {
                      result[currOptIdx] = currOptIdx;
                    }
                  }
                }
              }
            });
            break;
          case "Group":
            firstCharOptimizedIndices(atom2.value, result, ignoreCase);
            break;
          default:
            throw Error("Non Exhaustive Match");
        }
        const isOptionalQuantifier = atom2.quantifier !== void 0 && atom2.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          atom2.type === "Group" && isWholeOptional(atom2) === false || // If this term is not a group it may only be optional if it has an optional quantifier
          atom2.type !== "Group" && isOptionalQuantifier === false
        ) {
          break;
        }
      }
      break;
    default:
      throw Error("non exhaustive match!");
  }
  return values_default(result);
}
function addOptimizedIdxToResult(code, result, ignoreCase) {
  const optimizedCharIdx = charCodeToOptimizedIndex(code);
  result[optimizedCharIdx] = optimizedCharIdx;
  if (ignoreCase === true) {
    handleIgnoreCase(code, result);
  }
}
function handleIgnoreCase(code, result) {
  const char = String.fromCharCode(code);
  const upperChar = char.toUpperCase();
  if (upperChar !== char) {
    const optimizedCharIdx = charCodeToOptimizedIndex(upperChar.charCodeAt(0));
    result[optimizedCharIdx] = optimizedCharIdx;
  } else {
    const lowerChar = char.toLowerCase();
    if (lowerChar !== char) {
      const optimizedCharIdx = charCodeToOptimizedIndex(lowerChar.charCodeAt(0));
      result[optimizedCharIdx] = optimizedCharIdx;
    }
  }
}
function findCode(setNode, targetCharCodes) {
  return find_default(setNode.value, (codeOrRange) => {
    if (typeof codeOrRange === "number") {
      return includes_default(targetCharCodes, codeOrRange);
    } else {
      const range = codeOrRange;
      return find_default(targetCharCodes, (targetCode) => range.from <= targetCode && targetCode <= range.to) !== void 0;
    }
  });
}
function isWholeOptional(ast) {
  const quantifier = ast.quantifier;
  if (quantifier && quantifier.atLeast === 0) {
    return true;
  }
  if (!ast.value) {
    return false;
  }
  return isArray_default(ast.value) ? every_default(ast.value, isWholeOptional) : isWholeOptional(ast.value);
}
var CharCodeFinder = class extends BaseRegExpVisitor {
  constructor(targetCharCodes) {
    super();
    this.targetCharCodes = targetCharCodes;
    this.found = false;
  }
  visitChildren(node) {
    if (this.found === true) {
      return;
    }
    switch (node.type) {
      case "Lookahead":
        this.visitLookahead(node);
        return;
      case "NegativeLookahead":
        this.visitNegativeLookahead(node);
        return;
    }
    super.visitChildren(node);
  }
  visitCharacter(node) {
    if (includes_default(this.targetCharCodes, node.value)) {
      this.found = true;
    }
  }
  visitSet(node) {
    if (node.complement) {
      if (findCode(node, this.targetCharCodes) === void 0) {
        this.found = true;
      }
    } else {
      if (findCode(node, this.targetCharCodes) !== void 0) {
        this.found = true;
      }
    }
  }
};
function canMatchCharCode(charCodes, pattern) {
  if (pattern instanceof RegExp) {
    const ast = getRegExpAst(pattern);
    const charCodeFinder = new CharCodeFinder(charCodes);
    charCodeFinder.visit(ast);
    return charCodeFinder.found;
  } else {
    return find_default(pattern, (char) => {
      return includes_default(charCodes, char.charCodeAt(0));
    }) !== void 0;
  }
}

// node_modules/chevrotain/lib/src/scan/lexer.js
var PATTERN = "PATTERN";
var DEFAULT_MODE = "defaultMode";
var MODES = "modes";
var SUPPORT_STICKY = typeof new RegExp("(?:)").sticky === "boolean";
function analyzeTokenTypes(tokenTypes, options) {
  options = defaults_default(options, {
    useSticky: SUPPORT_STICKY,
    debug: false,
    safeMode: false,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", "\n"],
    tracer: (msg, action) => action()
  });
  const tracer = options.tracer;
  tracer("initCharCodeToOptimizedIndexMap", () => {
    initCharCodeToOptimizedIndexMap();
  });
  let onlyRelevantTypes;
  tracer("Reject Lexer.NA", () => {
    onlyRelevantTypes = reject_default(tokenTypes, (currType) => {
      return currType[PATTERN] === Lexer.NA;
    });
  });
  let hasCustom = false;
  let allTransformedPatterns;
  tracer("Transform Patterns", () => {
    hasCustom = false;
    allTransformedPatterns = map_default(onlyRelevantTypes, (currType) => {
      const currPattern = currType[PATTERN];
      if (isRegExp_default(currPattern)) {
        const regExpSource = currPattern.source;
        if (regExpSource.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        regExpSource !== "^" && regExpSource !== "$" && regExpSource !== "." && !currPattern.ignoreCase) {
          return regExpSource;
        } else if (regExpSource.length === 2 && regExpSource[0] === "\\" && // not a meta character
        !includes_default([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], regExpSource[1])) {
          return regExpSource[1];
        } else {
          return options.useSticky ? addStickyFlag(currPattern) : addStartOfInput(currPattern);
        }
      } else if (isFunction_default(currPattern)) {
        hasCustom = true;
        return { exec: currPattern };
      } else if (typeof currPattern === "object") {
        hasCustom = true;
        return currPattern;
      } else if (typeof currPattern === "string") {
        if (currPattern.length === 1) {
          return currPattern;
        } else {
          const escapedRegExpString = currPattern.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
          const wrappedRegExp = new RegExp(escapedRegExpString);
          return options.useSticky ? addStickyFlag(wrappedRegExp) : addStartOfInput(wrappedRegExp);
        }
      } else {
        throw Error("non exhaustive match");
      }
    });
  });
  let patternIdxToType;
  let patternIdxToGroup;
  let patternIdxToLongerAltIdxArr;
  let patternIdxToPushMode;
  let patternIdxToPopMode;
  tracer("misc mapping", () => {
    patternIdxToType = map_default(onlyRelevantTypes, (currType) => currType.tokenTypeIdx);
    patternIdxToGroup = map_default(onlyRelevantTypes, (clazz) => {
      const groupName = clazz.GROUP;
      if (groupName === Lexer.SKIPPED) {
        return void 0;
      } else if (isString_default(groupName)) {
        return groupName;
      } else if (isUndefined_default(groupName)) {
        return false;
      } else {
        throw Error("non exhaustive match");
      }
    });
    patternIdxToLongerAltIdxArr = map_default(onlyRelevantTypes, (clazz) => {
      const longerAltType = clazz.LONGER_ALT;
      if (longerAltType) {
        const longerAltIdxArr = isArray_default(longerAltType) ? map_default(longerAltType, (type) => indexOf_default(onlyRelevantTypes, type)) : [indexOf_default(onlyRelevantTypes, longerAltType)];
        return longerAltIdxArr;
      }
    });
    patternIdxToPushMode = map_default(onlyRelevantTypes, (clazz) => clazz.PUSH_MODE);
    patternIdxToPopMode = map_default(onlyRelevantTypes, (clazz) => has_default(clazz, "POP_MODE"));
  });
  let patternIdxToCanLineTerminator;
  tracer("Line Terminator Handling", () => {
    const lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);
    patternIdxToCanLineTerminator = map_default(onlyRelevantTypes, (tokType) => false);
    if (options.positionTracking !== "onlyOffset") {
      patternIdxToCanLineTerminator = map_default(onlyRelevantTypes, (tokType) => {
        if (has_default(tokType, "LINE_BREAKS")) {
          return !!tokType.LINE_BREAKS;
        } else {
          return checkLineBreaksIssues(tokType, lineTerminatorCharCodes) === false && canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
        }
      });
    }
  });
  let patternIdxToIsCustom;
  let patternIdxToShort;
  let emptyGroups;
  let patternIdxToConfig;
  tracer("Misc Mapping #2", () => {
    patternIdxToIsCustom = map_default(onlyRelevantTypes, isCustomPattern);
    patternIdxToShort = map_default(allTransformedPatterns, isShortPattern);
    emptyGroups = reduce_default(onlyRelevantTypes, (acc, clazz) => {
      const groupName = clazz.GROUP;
      if (isString_default(groupName) && !(groupName === Lexer.SKIPPED)) {
        acc[groupName] = [];
      }
      return acc;
    }, {});
    patternIdxToConfig = map_default(allTransformedPatterns, (x, idx) => {
      return {
        pattern: allTransformedPatterns[idx],
        longerAlt: patternIdxToLongerAltIdxArr[idx],
        canLineTerminator: patternIdxToCanLineTerminator[idx],
        isCustom: patternIdxToIsCustom[idx],
        short: patternIdxToShort[idx],
        group: patternIdxToGroup[idx],
        push: patternIdxToPushMode[idx],
        pop: patternIdxToPopMode[idx],
        tokenTypeIdx: patternIdxToType[idx],
        tokenType: onlyRelevantTypes[idx]
      };
    });
  });
  let canBeOptimized = true;
  let charCodeToPatternIdxToConfig = [];
  if (!options.safeMode) {
    tracer("First Char Optimization", () => {
      charCodeToPatternIdxToConfig = reduce_default(onlyRelevantTypes, (result, currTokType, idx) => {
        if (typeof currTokType.PATTERN === "string") {
          const charCode = currTokType.PATTERN.charCodeAt(0);
          const optimizedIdx = charCodeToOptimizedIndex(charCode);
          addToMapOfArrays(result, optimizedIdx, patternIdxToConfig[idx]);
        } else if (isArray_default(currTokType.START_CHARS_HINT)) {
          let lastOptimizedIdx;
          forEach_default(currTokType.START_CHARS_HINT, (charOrInt) => {
            const charCode = typeof charOrInt === "string" ? charOrInt.charCodeAt(0) : charOrInt;
            const currOptimizedIdx = charCodeToOptimizedIndex(charCode);
            if (lastOptimizedIdx !== currOptimizedIdx) {
              lastOptimizedIdx = currOptimizedIdx;
              addToMapOfArrays(result, currOptimizedIdx, patternIdxToConfig[idx]);
            }
          });
        } else if (isRegExp_default(currTokType.PATTERN)) {
          if (currTokType.PATTERN.unicode) {
            canBeOptimized = false;
            if (options.ensureOptimizations) {
              PRINT_ERROR(`${failedOptimizationPrefixMsg}	Unable to analyze < ${currTokType.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
            }
          } else {
            const optimizedCodes = getOptimizedStartCodesIndices(currTokType.PATTERN, options.ensureOptimizations);
            if (isEmpty_default(optimizedCodes)) {
              canBeOptimized = false;
            }
            forEach_default(optimizedCodes, (code) => {
              addToMapOfArrays(result, code, patternIdxToConfig[idx]);
            });
          }
        } else {
          if (options.ensureOptimizations) {
            PRINT_ERROR(`${failedOptimizationPrefixMsg}	TokenType: <${currTokType.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`);
          }
          canBeOptimized = false;
        }
        return result;
      }, []);
    });
  }
  return {
    emptyGroups,
    patternIdxToConfig,
    charCodeToPatternIdxToConfig,
    hasCustom,
    canBeOptimized
  };
}
function validatePatterns(tokenTypes, validModesNames) {
  let errors = [];
  const missingResult = findMissingPatterns(tokenTypes);
  errors = errors.concat(missingResult.errors);
  const invalidResult = findInvalidPatterns(missingResult.valid);
  const validTokenTypes = invalidResult.valid;
  errors = errors.concat(invalidResult.errors);
  errors = errors.concat(validateRegExpPattern(validTokenTypes));
  errors = errors.concat(findInvalidGroupType(validTokenTypes));
  errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames));
  errors = errors.concat(findUnreachablePatterns(validTokenTypes));
  return errors;
}
function validateRegExpPattern(tokenTypes) {
  let errors = [];
  const withRegExpPatterns = filter_default(tokenTypes, (currTokType) => isRegExp_default(currTokType[PATTERN]));
  errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns));
  errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns));
  errors = errors.concat(findUnsupportedFlags(withRegExpPatterns));
  errors = errors.concat(findDuplicatePatterns(withRegExpPatterns));
  errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns));
  return errors;
}
function findMissingPatterns(tokenTypes) {
  const tokenTypesWithMissingPattern = filter_default(tokenTypes, (currType) => {
    return !has_default(currType, PATTERN);
  });
  const errors = map_default(tokenTypesWithMissingPattern, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- missing static 'PATTERN' property",
      type: LexerDefinitionErrorType.MISSING_PATTERN,
      tokenTypes: [currType]
    };
  });
  const valid = difference_default(tokenTypes, tokenTypesWithMissingPattern);
  return { errors, valid };
}
function findInvalidPatterns(tokenTypes) {
  const tokenTypesWithInvalidPattern = filter_default(tokenTypes, (currType) => {
    const pattern = currType[PATTERN];
    return !isRegExp_default(pattern) && !isFunction_default(pattern) && !has_default(pattern, "exec") && !isString_default(pattern);
  });
  const errors = map_default(tokenTypesWithInvalidPattern, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
      type: LexerDefinitionErrorType.INVALID_PATTERN,
      tokenTypes: [currType]
    };
  });
  const valid = difference_default(tokenTypes, tokenTypesWithInvalidPattern);
  return { errors, valid };
}
var end_of_input = /[^\\][$]/;
function findEndOfInputAnchor(tokenTypes) {
  class EndAnchorFinder extends BaseRegExpVisitor {
    constructor() {
      super(...arguments);
      this.found = false;
    }
    visitEndAnchor(node) {
      this.found = true;
    }
  }
  const invalidRegex = filter_default(tokenTypes, (currType) => {
    const pattern = currType.PATTERN;
    try {
      const regexpAst = getRegExpAst(pattern);
      const endAnchorVisitor = new EndAnchorFinder();
      endAnchorVisitor.visit(regexpAst);
      return endAnchorVisitor.found;
    } catch (e) {
      return end_of_input.test(pattern.source);
    }
  });
  const errors = map_default(invalidRegex, (currType) => {
    return {
      message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
      type: LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findEmptyMatchRegExps(tokenTypes) {
  const matchesEmptyString = filter_default(tokenTypes, (currType) => {
    const pattern = currType.PATTERN;
    return pattern.test("");
  });
  const errors = map_default(matchesEmptyString, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'PATTERN' must not match an empty string",
      type: LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
      tokenTypes: [currType]
    };
  });
  return errors;
}
var start_of_input = /[^\\[][\^]|^\^/;
function findStartOfInputAnchor(tokenTypes) {
  class StartAnchorFinder extends BaseRegExpVisitor {
    constructor() {
      super(...arguments);
      this.found = false;
    }
    visitStartAnchor(node) {
      this.found = true;
    }
  }
  const invalidRegex = filter_default(tokenTypes, (currType) => {
    const pattern = currType.PATTERN;
    try {
      const regexpAst = getRegExpAst(pattern);
      const startAnchorVisitor = new StartAnchorFinder();
      startAnchorVisitor.visit(regexpAst);
      return startAnchorVisitor.found;
    } catch (e) {
      return start_of_input.test(pattern.source);
    }
  });
  const errors = map_default(invalidRegex, (currType) => {
    return {
      message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
      type: LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findUnsupportedFlags(tokenTypes) {
  const invalidFlags = filter_default(tokenTypes, (currType) => {
    const pattern = currType[PATTERN];
    return pattern instanceof RegExp && (pattern.multiline || pattern.global);
  });
  const errors = map_default(invalidFlags, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
      type: LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findDuplicatePatterns(tokenTypes) {
  const found = [];
  let identicalPatterns = map_default(tokenTypes, (outerType) => {
    return reduce_default(tokenTypes, (result, innerType) => {
      if (outerType.PATTERN.source === innerType.PATTERN.source && !includes_default(found, innerType) && innerType.PATTERN !== Lexer.NA) {
        found.push(innerType);
        result.push(innerType);
        return result;
      }
      return result;
    }, []);
  });
  identicalPatterns = compact_default(identicalPatterns);
  const duplicatePatterns = filter_default(identicalPatterns, (currIdenticalSet) => {
    return currIdenticalSet.length > 1;
  });
  const errors = map_default(duplicatePatterns, (setOfIdentical) => {
    const tokenTypeNames = map_default(setOfIdentical, (currType) => {
      return currType.name;
    });
    const dupPatternSrc = head_default(setOfIdentical).PATTERN;
    return {
      message: `The same RegExp pattern ->${dupPatternSrc}<-has been used in all of the following Token Types: ${tokenTypeNames.join(", ")} <-`,
      type: LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: setOfIdentical
    };
  });
  return errors;
}
function findInvalidGroupType(tokenTypes) {
  const invalidTypes = filter_default(tokenTypes, (clazz) => {
    if (!has_default(clazz, "GROUP")) {
      return false;
    }
    const group = clazz.GROUP;
    return group !== Lexer.SKIPPED && group !== Lexer.NA && !isString_default(group);
  });
  const errors = map_default(invalidTypes, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
      type: LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findModesThatDoNotExist(tokenTypes, validModes) {
  const invalidModes = filter_default(tokenTypes, (clazz) => {
    return clazz.PUSH_MODE !== void 0 && !includes_default(validModes, clazz.PUSH_MODE);
  });
  const errors = map_default(invalidModes, (tokType) => {
    const msg = `Token Type: ->${tokType.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${tokType.PUSH_MODE}<-which does not exist`;
    return {
      message: msg,
      type: LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
      tokenTypes: [tokType]
    };
  });
  return errors;
}
function findUnreachablePatterns(tokenTypes) {
  const errors = [];
  const canBeTested = reduce_default(tokenTypes, (result, tokType, idx) => {
    const pattern = tokType.PATTERN;
    if (pattern === Lexer.NA) {
      return result;
    }
    if (isString_default(pattern)) {
      result.push({ str: pattern, idx, tokenType: tokType });
    } else if (isRegExp_default(pattern) && noMetaChar(pattern)) {
      result.push({ str: pattern.source, idx, tokenType: tokType });
    }
    return result;
  }, []);
  forEach_default(tokenTypes, (tokType, testIdx) => {
    forEach_default(canBeTested, ({ str, idx, tokenType }) => {
      if (testIdx < idx && testTokenType(str, tokType.PATTERN)) {
        const msg = `Token: ->${tokenType.name}<- can never be matched.
Because it appears AFTER the Token Type ->${tokType.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        errors.push({
          message: msg,
          type: LexerDefinitionErrorType.UNREACHABLE_PATTERN,
          tokenTypes: [tokType, tokenType]
        });
      }
    });
  });
  return errors;
}
function testTokenType(str, pattern) {
  if (isRegExp_default(pattern)) {
    const regExpArray = pattern.exec(str);
    return regExpArray !== null && regExpArray.index === 0;
  } else if (isFunction_default(pattern)) {
    return pattern(str, 0, [], {});
  } else if (has_default(pattern, "exec")) {
    return pattern.exec(str, 0, [], {});
  } else if (typeof pattern === "string") {
    return pattern === str;
  } else {
    throw Error("non exhaustive match");
  }
}
function noMetaChar(regExp) {
  const metaChars = [
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ];
  return find_default(metaChars, (char) => regExp.source.indexOf(char) !== -1) === void 0;
}
function addStartOfInput(pattern) {
  const flags = pattern.ignoreCase ? "i" : "";
  return new RegExp(`^(?:${pattern.source})`, flags);
}
function addStickyFlag(pattern) {
  const flags = pattern.ignoreCase ? "iy" : "y";
  return new RegExp(`${pattern.source}`, flags);
}
function performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
  const errors = [];
  if (!has_default(lexerDefinition, DEFAULT_MODE)) {
    errors.push({
      message: "A MultiMode Lexer cannot be initialized without a <" + DEFAULT_MODE + "> property in its definition\n",
      type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
    });
  }
  if (!has_default(lexerDefinition, MODES)) {
    errors.push({
      message: "A MultiMode Lexer cannot be initialized without a <" + MODES + "> property in its definition\n",
      type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
    });
  }
  if (has_default(lexerDefinition, MODES) && has_default(lexerDefinition, DEFAULT_MODE) && !has_default(lexerDefinition.modes, lexerDefinition.defaultMode)) {
    errors.push({
      message: `A MultiMode Lexer cannot be initialized with a ${DEFAULT_MODE}: <${lexerDefinition.defaultMode}>which does not exist
`,
      type: LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
    });
  }
  if (has_default(lexerDefinition, MODES)) {
    forEach_default(lexerDefinition.modes, (currModeValue, currModeName) => {
      forEach_default(currModeValue, (currTokType, currIdx) => {
        if (isUndefined_default(currTokType)) {
          errors.push({
            message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${currModeName}> at index: <${currIdx}>
`,
            type: LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
          });
        } else if (has_default(currTokType, "LONGER_ALT")) {
          const longerAlt = isArray_default(currTokType.LONGER_ALT) ? currTokType.LONGER_ALT : [currTokType.LONGER_ALT];
          forEach_default(longerAlt, (currLongerAlt) => {
            if (!isUndefined_default(currLongerAlt) && !includes_default(currModeValue, currLongerAlt)) {
              errors.push({
                message: `A MultiMode Lexer cannot be initialized with a longer_alt <${currLongerAlt.name}> on token <${currTokType.name}> outside of mode <${currModeName}>
`,
                type: LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
              });
            }
          });
        }
      });
    });
  }
  return errors;
}
function performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
  const warnings = [];
  let hasAnyLineBreak = false;
  const allTokenTypes = compact_default(flatten_default(values_default(lexerDefinition.modes)));
  const concreteTokenTypes = reject_default(allTokenTypes, (currType) => currType[PATTERN] === Lexer.NA);
  const terminatorCharCodes = getCharCodes(lineTerminatorCharacters);
  if (trackLines) {
    forEach_default(concreteTokenTypes, (tokType) => {
      const currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);
      if (currIssue !== false) {
        const message = buildLineBreakIssueMessage(tokType, currIssue);
        const warningDescriptor = {
          message,
          type: currIssue.issue,
          tokenType: tokType
        };
        warnings.push(warningDescriptor);
      } else {
        if (has_default(tokType, "LINE_BREAKS")) {
          if (tokType.LINE_BREAKS === true) {
            hasAnyLineBreak = true;
          }
        } else {
          if (canMatchCharCode(terminatorCharCodes, tokType.PATTERN)) {
            hasAnyLineBreak = true;
          }
        }
      }
    });
  }
  if (trackLines && !hasAnyLineBreak) {
    warnings.push({
      message: "Warning: No LINE_BREAKS Found.\n	This Lexer has been defined to track line and column information,\n	But none of the Token Types can be identified as matching a line terminator.\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n	for details.",
      type: LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS
    });
  }
  return warnings;
}
function cloneEmptyGroups(emptyGroups) {
  const clonedResult = {};
  const groupKeys = keys_default(emptyGroups);
  forEach_default(groupKeys, (currKey) => {
    const currGroupValue = emptyGroups[currKey];
    if (isArray_default(currGroupValue)) {
      clonedResult[currKey] = [];
    } else {
      throw Error("non exhaustive match");
    }
  });
  return clonedResult;
}
function isCustomPattern(tokenType) {
  const pattern = tokenType.PATTERN;
  if (isRegExp_default(pattern)) {
    return false;
  } else if (isFunction_default(pattern)) {
    return true;
  } else if (has_default(pattern, "exec")) {
    return true;
  } else if (isString_default(pattern)) {
    return false;
  } else {
    throw Error("non exhaustive match");
  }
}
function isShortPattern(pattern) {
  if (isString_default(pattern) && pattern.length === 1) {
    return pattern.charCodeAt(0);
  } else {
    return false;
  }
}
var LineTerminatorOptimizedTester = {
  // implements /\n|\r\n?/g.test
  test: function(text) {
    const len = text.length;
    for (let i = this.lastIndex; i < len; i++) {
      const c = text.charCodeAt(i);
      if (c === 10) {
        this.lastIndex = i + 1;
        return true;
      } else if (c === 13) {
        if (text.charCodeAt(i + 1) === 10) {
          this.lastIndex = i + 2;
        } else {
          this.lastIndex = i + 1;
        }
        return true;
      }
    }
    return false;
  },
  lastIndex: 0
};
function checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {
  if (has_default(tokType, "LINE_BREAKS")) {
    return false;
  } else {
    if (isRegExp_default(tokType.PATTERN)) {
      try {
        canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
      } catch (e) {
        return {
          issue: LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
          errMsg: e.message
        };
      }
      return false;
    } else if (isString_default(tokType.PATTERN)) {
      return false;
    } else if (isCustomPattern(tokType)) {
      return { issue: LexerDefinitionErrorType.CUSTOM_LINE_BREAK };
    } else {
      throw Error("non exhaustive match");
    }
  }
}
function buildLineBreakIssueMessage(tokType, details) {
  if (details.issue === LexerDefinitionErrorType.IDENTIFY_TERMINATOR) {
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${tokType.name}> Token Type
	 Root cause: ${details.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  } else if (details.issue === LexerDefinitionErrorType.CUSTOM_LINE_BREAK) {
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${tokType.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  } else {
    throw Error("non exhaustive match");
  }
}
function getCharCodes(charsOrCodes) {
  const charCodes = map_default(charsOrCodes, (numOrString) => {
    if (isString_default(numOrString)) {
      return numOrString.charCodeAt(0);
    } else {
      return numOrString;
    }
  });
  return charCodes;
}
function addToMapOfArrays(map, key, value) {
  if (map[key] === void 0) {
    map[key] = [value];
  } else {
    map[key].push(value);
  }
}
var minOptimizationVal = 256;
var charCodeToOptimizedIdxMap = [];
function charCodeToOptimizedIndex(charCode) {
  return charCode < minOptimizationVal ? charCode : charCodeToOptimizedIdxMap[charCode];
}
function initCharCodeToOptimizedIndexMap() {
  if (isEmpty_default(charCodeToOptimizedIdxMap)) {
    charCodeToOptimizedIdxMap = new Array(65536);
    for (let i = 0; i < 65536; i++) {
      charCodeToOptimizedIdxMap[i] = i > 255 ? 255 + ~~(i / 255) : i;
    }
  }
}

// node_modules/chevrotain/lib/src/scan/tokens.js
function tokenStructuredMatcher(tokInstance, tokConstructor) {
  const instanceType = tokInstance.tokenTypeIdx;
  if (instanceType === tokConstructor.tokenTypeIdx) {
    return true;
  } else {
    return tokConstructor.isParent === true && tokConstructor.categoryMatchesMap[instanceType] === true;
  }
}
function tokenStructuredMatcherNoCategories(token, tokType) {
  return token.tokenTypeIdx === tokType.tokenTypeIdx;
}
var tokenShortNameIdx = 1;
var tokenIdxToClass = {};
function augmentTokenTypes(tokenTypes) {
  const tokenTypesAndParents = expandCategories(tokenTypes);
  assignTokenDefaultProps(tokenTypesAndParents);
  assignCategoriesMapProp(tokenTypesAndParents);
  assignCategoriesTokensProp(tokenTypesAndParents);
  forEach_default(tokenTypesAndParents, (tokType) => {
    tokType.isParent = tokType.categoryMatches.length > 0;
  });
}
function expandCategories(tokenTypes) {
  let result = clone_default(tokenTypes);
  let categories = tokenTypes;
  let searching = true;
  while (searching) {
    categories = compact_default(flatten_default(map_default(categories, (currTokType) => currTokType.CATEGORIES)));
    const newCategories = difference_default(categories, result);
    result = result.concat(newCategories);
    if (isEmpty_default(newCategories)) {
      searching = false;
    } else {
      categories = newCategories;
    }
  }
  return result;
}
function assignTokenDefaultProps(tokenTypes) {
  forEach_default(tokenTypes, (currTokType) => {
    if (!hasShortKeyProperty(currTokType)) {
      tokenIdxToClass[tokenShortNameIdx] = currTokType;
      currTokType.tokenTypeIdx = tokenShortNameIdx++;
    }
    if (hasCategoriesProperty(currTokType) && !isArray_default(currTokType.CATEGORIES)) {
      currTokType.CATEGORIES = [currTokType.CATEGORIES];
    }
    if (!hasCategoriesProperty(currTokType)) {
      currTokType.CATEGORIES = [];
    }
    if (!hasExtendingTokensTypesProperty(currTokType)) {
      currTokType.categoryMatches = [];
    }
    if (!hasExtendingTokensTypesMapProperty(currTokType)) {
      currTokType.categoryMatchesMap = {};
    }
  });
}
function assignCategoriesTokensProp(tokenTypes) {
  forEach_default(tokenTypes, (currTokType) => {
    currTokType.categoryMatches = [];
    forEach_default(currTokType.categoryMatchesMap, (val, key) => {
      currTokType.categoryMatches.push(tokenIdxToClass[key].tokenTypeIdx);
    });
  });
}
function assignCategoriesMapProp(tokenTypes) {
  forEach_default(tokenTypes, (currTokType) => {
    singleAssignCategoriesToksMap([], currTokType);
  });
}
function singleAssignCategoriesToksMap(path, nextNode) {
  forEach_default(path, (pathNode) => {
    nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = true;
  });
  forEach_default(nextNode.CATEGORIES, (nextCategory) => {
    const newPath = path.concat(nextNode);
    if (!includes_default(newPath, nextCategory)) {
      singleAssignCategoriesToksMap(newPath, nextCategory);
    }
  });
}
function hasShortKeyProperty(tokType) {
  return has_default(tokType, "tokenTypeIdx");
}
function hasCategoriesProperty(tokType) {
  return has_default(tokType, "CATEGORIES");
}
function hasExtendingTokensTypesProperty(tokType) {
  return has_default(tokType, "categoryMatches");
}
function hasExtendingTokensTypesMapProperty(tokType) {
  return has_default(tokType, "categoryMatchesMap");
}
function isTokenType(tokType) {
  return has_default(tokType, "tokenTypeIdx");
}

// node_modules/chevrotain/lib/src/scan/lexer_errors_public.js
var defaultLexerErrorProvider = {
  buildUnableToPopLexerModeMessage(token) {
    return `Unable to pop Lexer Mode after encountering Token ->${token.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(fullText, startOffset, length, line, column) {
    return `unexpected character: ->${fullText.charAt(startOffset)}<- at offset: ${startOffset}, skipped ${length} characters.`;
  }
};

// node_modules/chevrotain/lib/src/scan/lexer_public.js
var LexerDefinitionErrorType;
(function(LexerDefinitionErrorType2) {
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MISSING_PATTERN"] = 0] = "MISSING_PATTERN";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["INVALID_PATTERN"] = 1] = "INVALID_PATTERN";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["EOI_ANCHOR_FOUND"] = 2] = "EOI_ANCHOR_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["UNSUPPORTED_FLAGS_FOUND"] = 3] = "UNSUPPORTED_FLAGS_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["DUPLICATE_PATTERNS_FOUND"] = 4] = "DUPLICATE_PATTERNS_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["INVALID_GROUP_TYPE_FOUND"] = 5] = "INVALID_GROUP_TYPE_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["PUSH_MODE_DOES_NOT_EXIST"] = 6] = "PUSH_MODE_DOES_NOT_EXIST";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE"] = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY"] = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST"] = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED"] = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["SOI_ANCHOR_FOUND"] = 11] = "SOI_ANCHOR_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["EMPTY_MATCH_PATTERN"] = 12] = "EMPTY_MATCH_PATTERN";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["NO_LINE_BREAKS_FLAGS"] = 13] = "NO_LINE_BREAKS_FLAGS";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["UNREACHABLE_PATTERN"] = 14] = "UNREACHABLE_PATTERN";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["IDENTIFY_TERMINATOR"] = 15] = "IDENTIFY_TERMINATOR";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["CUSTOM_LINE_BREAK"] = 16] = "CUSTOM_LINE_BREAK";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"] = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(LexerDefinitionErrorType || (LexerDefinitionErrorType = {}));
var DEFAULT_LEXER_CONFIG = {
  deferDefinitionErrorsHandling: false,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: ["\n", "\r"],
  ensureOptimizations: false,
  safeMode: false,
  errorMessageProvider: defaultLexerErrorProvider,
  traceInitPerf: false,
  skipValidations: false,
  recoveryEnabled: true
};
Object.freeze(DEFAULT_LEXER_CONFIG);
var Lexer = class {
  constructor(lexerDefinition, config = DEFAULT_LEXER_CONFIG) {
    this.lexerDefinition = lexerDefinition;
    this.lexerDefinitionErrors = [];
    this.lexerDefinitionWarning = [];
    this.patternIdxToConfig = {};
    this.charCodeToPatternIdxToConfig = {};
    this.modes = [];
    this.emptyGroups = {};
    this.trackStartLines = true;
    this.trackEndLines = true;
    this.hasCustom = false;
    this.canModeBeOptimized = {};
    this.TRACE_INIT = (phaseDesc, phaseImpl) => {
      if (this.traceInitPerf === true) {
        this.traceInitIndent++;
        const indent = new Array(this.traceInitIndent + 1).join("	");
        if (this.traceInitIndent < this.traceInitMaxIdent) {
          console.log(`${indent}--> <${phaseDesc}>`);
        }
        const { time, value } = timer(phaseImpl);
        const traceMethod = time > 10 ? console.warn : console.log;
        if (this.traceInitIndent < this.traceInitMaxIdent) {
          traceMethod(`${indent}<-- <${phaseDesc}> time: ${time}ms`);
        }
        this.traceInitIndent--;
        return value;
      } else {
        return phaseImpl();
      }
    };
    if (typeof config === "boolean") {
      throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
    }
    this.config = assign_default({}, DEFAULT_LEXER_CONFIG, config);
    const traceInitVal = this.config.traceInitPerf;
    if (traceInitVal === true) {
      this.traceInitMaxIdent = Infinity;
      this.traceInitPerf = true;
    } else if (typeof traceInitVal === "number") {
      this.traceInitMaxIdent = traceInitVal;
      this.traceInitPerf = true;
    }
    this.traceInitIndent = -1;
    this.TRACE_INIT("Lexer Constructor", () => {
      let actualDefinition;
      let hasOnlySingleMode = true;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) {
          this.config.lineTerminatorsPattern = LineTerminatorOptimizedTester;
        } else {
          if (this.config.lineTerminatorCharacters === DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) {
            throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
          }
        }
        if (config.safeMode && config.ensureOptimizations) {
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        }
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking);
        this.trackEndLines = /full/i.test(this.config.positionTracking);
        if (isArray_default(lexerDefinition)) {
          actualDefinition = {
            modes: { defaultMode: clone_default(lexerDefinition) },
            defaultMode: DEFAULT_MODE
          };
        } else {
          hasOnlySingleMode = false;
          actualDefinition = clone_default(lexerDefinition);
        }
      });
      if (this.config.skipValidations === false) {
        this.TRACE_INIT("performRuntimeChecks", () => {
          this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(performRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
        });
        this.TRACE_INIT("performWarningRuntimeChecks", () => {
          this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(performWarningRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
        });
      }
      actualDefinition.modes = actualDefinition.modes ? actualDefinition.modes : {};
      forEach_default(actualDefinition.modes, (currModeValue, currModeName) => {
        actualDefinition.modes[currModeName] = reject_default(currModeValue, (currTokType) => isUndefined_default(currTokType));
      });
      const allModeNames = keys_default(actualDefinition.modes);
      forEach_default(actualDefinition.modes, (currModDef, currModName) => {
        this.TRACE_INIT(`Mode: <${currModName}> processing`, () => {
          this.modes.push(currModName);
          if (this.config.skipValidations === false) {
            this.TRACE_INIT(`validatePatterns`, () => {
              this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(validatePatterns(currModDef, allModeNames));
            });
          }
          if (isEmpty_default(this.lexerDefinitionErrors)) {
            augmentTokenTypes(currModDef);
            let currAnalyzeResult;
            this.TRACE_INIT(`analyzeTokenTypes`, () => {
              currAnalyzeResult = analyzeTokenTypes(currModDef, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: config.positionTracking,
                ensureOptimizations: config.ensureOptimizations,
                safeMode: config.safeMode,
                tracer: this.TRACE_INIT
              });
            });
            this.patternIdxToConfig[currModName] = currAnalyzeResult.patternIdxToConfig;
            this.charCodeToPatternIdxToConfig[currModName] = currAnalyzeResult.charCodeToPatternIdxToConfig;
            this.emptyGroups = assign_default({}, this.emptyGroups, currAnalyzeResult.emptyGroups);
            this.hasCustom = currAnalyzeResult.hasCustom || this.hasCustom;
            this.canModeBeOptimized[currModName] = currAnalyzeResult.canBeOptimized;
          }
        });
      });
      this.defaultMode = actualDefinition.defaultMode;
      if (!isEmpty_default(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const allErrMessages = map_default(this.lexerDefinitionErrors, (error) => {
          return error.message;
        });
        const allErrMessagesString = allErrMessages.join("-----------------------\n");
        throw new Error("Errors detected in definition of Lexer:\n" + allErrMessagesString);
      }
      forEach_default(this.lexerDefinitionWarning, (warningDescriptor) => {
        PRINT_WARNING(warningDescriptor.message);
      });
      this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (SUPPORT_STICKY) {
          this.chopInput = identity_default;
          this.match = this.matchWithTest;
        } else {
          this.updateLastIndex = noop_default;
          this.match = this.matchWithExec;
        }
        if (hasOnlySingleMode) {
          this.handleModes = noop_default;
        }
        if (this.trackStartLines === false) {
          this.computeNewColumn = identity_default;
        }
        if (this.trackEndLines === false) {
          this.updateTokenEndLineColumnLocation = noop_default;
        }
        if (/full/i.test(this.config.positionTracking)) {
          this.createTokenInstance = this.createFullToken;
        } else if (/onlyStart/i.test(this.config.positionTracking)) {
          this.createTokenInstance = this.createStartOnlyToken;
        } else if (/onlyOffset/i.test(this.config.positionTracking)) {
          this.createTokenInstance = this.createOffsetOnlyToken;
        } else {
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        }
        if (this.hasCustom) {
          this.addToken = this.addTokenUsingPush;
          this.handlePayload = this.handlePayloadWithCustom;
        } else {
          this.addToken = this.addTokenUsingMemberAccess;
          this.handlePayload = this.handlePayloadNoCustom;
        }
      });
      this.TRACE_INIT("Failed Optimization Warnings", () => {
        const unOptimizedModes = reduce_default(this.canModeBeOptimized, (cannotBeOptimized, canBeOptimized, modeName) => {
          if (canBeOptimized === false) {
            cannotBeOptimized.push(modeName);
          }
          return cannotBeOptimized;
        }, []);
        if (config.ensureOptimizations && !isEmpty_default(unOptimizedModes)) {
          throw Error(`Lexer Modes: < ${unOptimizedModes.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
        }
      });
      this.TRACE_INIT("clearRegExpParserCache", () => {
        clearRegExpParserCache();
      });
      this.TRACE_INIT("toFastProperties", () => {
        toFastProperties(this);
      });
    });
  }
  tokenize(text, initialMode = this.defaultMode) {
    if (!isEmpty_default(this.lexerDefinitionErrors)) {
      const allErrMessages = map_default(this.lexerDefinitionErrors, (error) => {
        return error.message;
      });
      const allErrMessagesString = allErrMessages.join("-----------------------\n");
      throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + allErrMessagesString);
    }
    return this.tokenizeInternal(text, initialMode);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(text, initialMode) {
    let i, j, k, matchAltImage, longerAlt, matchedImage, payload, altPayload, imageLength, group, tokType, newToken, errLength, droppedChar, msg, match;
    const orgText = text;
    const orgLength = orgText.length;
    let offset = 0;
    let matchedTokensIndex = 0;
    const guessedNumberOfTokens = this.hasCustom ? 0 : Math.floor(text.length / 10);
    const matchedTokens = new Array(guessedNumberOfTokens);
    const errors = [];
    let line = this.trackStartLines ? 1 : void 0;
    let column = this.trackStartLines ? 1 : void 0;
    const groups = cloneEmptyGroups(this.emptyGroups);
    const trackLines = this.trackStartLines;
    const lineTerminatorPattern = this.config.lineTerminatorsPattern;
    let currModePatternsLength = 0;
    let patternIdxToConfig = [];
    let currCharCodeToPatternIdxToConfig = [];
    const modeStack = [];
    const emptyArray = [];
    Object.freeze(emptyArray);
    let getPossiblePatterns;
    function getPossiblePatternsSlow() {
      return patternIdxToConfig;
    }
    function getPossiblePatternsOptimized(charCode) {
      const optimizedCharIdx = charCodeToOptimizedIndex(charCode);
      const possiblePatterns = currCharCodeToPatternIdxToConfig[optimizedCharIdx];
      if (possiblePatterns === void 0) {
        return emptyArray;
      } else {
        return possiblePatterns;
      }
    }
    const pop_mode = (popToken) => {
      if (modeStack.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      popToken.tokenType.PUSH_MODE === void 0) {
        const msg2 = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);
        errors.push({
          offset: popToken.startOffset,
          line: popToken.startLine,
          column: popToken.startColumn,
          length: popToken.image.length,
          message: msg2
        });
      } else {
        modeStack.pop();
        const newMode = last_default(modeStack);
        patternIdxToConfig = this.patternIdxToConfig[newMode];
        currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
        currModePatternsLength = patternIdxToConfig.length;
        const modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
        if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
          getPossiblePatterns = getPossiblePatternsOptimized;
        } else {
          getPossiblePatterns = getPossiblePatternsSlow;
        }
      }
    };
    function push_mode(newMode) {
      modeStack.push(newMode);
      currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
      patternIdxToConfig = this.patternIdxToConfig[newMode];
      currModePatternsLength = patternIdxToConfig.length;
      currModePatternsLength = patternIdxToConfig.length;
      const modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
      if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
        getPossiblePatterns = getPossiblePatternsOptimized;
      } else {
        getPossiblePatterns = getPossiblePatternsSlow;
      }
    }
    push_mode.call(this, initialMode);
    let currConfig;
    const recoveryEnabled = this.config.recoveryEnabled;
    while (offset < orgLength) {
      matchedImage = null;
      const nextCharCode = orgText.charCodeAt(offset);
      const chosenPatternIdxToConfig = getPossiblePatterns(nextCharCode);
      const chosenPatternsLength = chosenPatternIdxToConfig.length;
      for (i = 0; i < chosenPatternsLength; i++) {
        currConfig = chosenPatternIdxToConfig[i];
        const currPattern = currConfig.pattern;
        payload = null;
        const singleCharCode = currConfig.short;
        if (singleCharCode !== false) {
          if (nextCharCode === singleCharCode) {
            matchedImage = currPattern;
          }
        } else if (currConfig.isCustom === true) {
          match = currPattern.exec(orgText, offset, matchedTokens, groups);
          if (match !== null) {
            matchedImage = match[0];
            if (match.payload !== void 0) {
              payload = match.payload;
            }
          } else {
            matchedImage = null;
          }
        } else {
          this.updateLastIndex(currPattern, offset);
          matchedImage = this.match(currPattern, text, offset);
        }
        if (matchedImage !== null) {
          longerAlt = currConfig.longerAlt;
          if (longerAlt !== void 0) {
            const longerAltLength = longerAlt.length;
            for (k = 0; k < longerAltLength; k++) {
              const longerAltConfig = patternIdxToConfig[longerAlt[k]];
              const longerAltPattern = longerAltConfig.pattern;
              altPayload = null;
              if (longerAltConfig.isCustom === true) {
                match = longerAltPattern.exec(orgText, offset, matchedTokens, groups);
                if (match !== null) {
                  matchAltImage = match[0];
                  if (match.payload !== void 0) {
                    altPayload = match.payload;
                  }
                } else {
                  matchAltImage = null;
                }
              } else {
                this.updateLastIndex(longerAltPattern, offset);
                matchAltImage = this.match(longerAltPattern, text, offset);
              }
              if (matchAltImage && matchAltImage.length > matchedImage.length) {
                matchedImage = matchAltImage;
                payload = altPayload;
                currConfig = longerAltConfig;
                break;
              }
            }
          }
          break;
        }
      }
      if (matchedImage !== null) {
        imageLength = matchedImage.length;
        group = currConfig.group;
        if (group !== void 0) {
          tokType = currConfig.tokenTypeIdx;
          newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line, column, imageLength);
          this.handlePayload(newToken, payload);
          if (group === false) {
            matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken);
          } else {
            groups[group].push(newToken);
          }
        }
        text = this.chopInput(text, imageLength);
        offset = offset + imageLength;
        column = this.computeNewColumn(column, imageLength);
        if (trackLines === true && currConfig.canLineTerminator === true) {
          let numOfLTsInMatch = 0;
          let foundTerminator;
          let lastLTEndOffset;
          lineTerminatorPattern.lastIndex = 0;
          do {
            foundTerminator = lineTerminatorPattern.test(matchedImage);
            if (foundTerminator === true) {
              lastLTEndOffset = lineTerminatorPattern.lastIndex - 1;
              numOfLTsInMatch++;
            }
          } while (foundTerminator === true);
          if (numOfLTsInMatch !== 0) {
            line = line + numOfLTsInMatch;
            column = imageLength - lastLTEndOffset;
            this.updateTokenEndLineColumnLocation(newToken, group, lastLTEndOffset, numOfLTsInMatch, line, column, imageLength);
          }
        }
        this.handleModes(currConfig, pop_mode, push_mode, newToken);
      } else {
        const errorStartOffset = offset;
        const errorLine = line;
        const errorColumn = column;
        let foundResyncPoint = recoveryEnabled === false;
        while (foundResyncPoint === false && offset < orgLength) {
          text = this.chopInput(text, 1);
          offset++;
          for (j = 0; j < currModePatternsLength; j++) {
            const currConfig2 = patternIdxToConfig[j];
            const currPattern = currConfig2.pattern;
            const singleCharCode = currConfig2.short;
            if (singleCharCode !== false) {
              if (orgText.charCodeAt(offset) === singleCharCode) {
                foundResyncPoint = true;
              }
            } else if (currConfig2.isCustom === true) {
              foundResyncPoint = currPattern.exec(orgText, offset, matchedTokens, groups) !== null;
            } else {
              this.updateLastIndex(currPattern, offset);
              foundResyncPoint = currPattern.exec(text) !== null;
            }
            if (foundResyncPoint === true) {
              break;
            }
          }
        }
        errLength = offset - errorStartOffset;
        column = this.computeNewColumn(column, errLength);
        msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn);
        errors.push({
          offset: errorStartOffset,
          line: errorLine,
          column: errorColumn,
          length: errLength,
          message: msg
        });
        if (recoveryEnabled === false) {
          break;
        }
      }
    }
    if (!this.hasCustom) {
      matchedTokens.length = matchedTokensIndex;
    }
    return {
      tokens: matchedTokens,
      groups,
      errors
    };
  }
  handleModes(config, pop_mode, push_mode, newToken) {
    if (config.pop === true) {
      const pushMode = config.push;
      pop_mode(newToken);
      if (pushMode !== void 0) {
        push_mode.call(this, pushMode);
      }
    } else if (config.push !== void 0) {
      push_mode.call(this, config.push);
    }
  }
  chopInput(text, length) {
    return text.substring(length);
  }
  updateLastIndex(regExp, newLastIndex) {
    regExp.lastIndex = newLastIndex;
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(newToken, group, lastLTIdx, numOfLTsInMatch, line, column, imageLength) {
    let lastCharIsLT, fixForEndingInLT;
    if (group !== void 0) {
      lastCharIsLT = lastLTIdx === imageLength - 1;
      fixForEndingInLT = lastCharIsLT ? -1 : 0;
      if (!(numOfLTsInMatch === 1 && lastCharIsLT === true)) {
        newToken.endLine = line + fixForEndingInLT;
        newToken.endColumn = column - 1 + -fixForEndingInLT;
      }
    }
  }
  computeNewColumn(oldColumn, imageLength) {
    return oldColumn + imageLength;
  }
  createOffsetOnlyToken(image, startOffset, tokenTypeIdx, tokenType) {
    return {
      image,
      startOffset,
      tokenTypeIdx,
      tokenType
    };
  }
  createStartOnlyToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {
    return {
      image,
      startOffset,
      startLine,
      startColumn,
      tokenTypeIdx,
      tokenType
    };
  }
  createFullToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {
    return {
      image,
      startOffset,
      endOffset: startOffset + imageLength - 1,
      startLine,
      endLine: startLine,
      startColumn,
      endColumn: startColumn + imageLength - 1,
      tokenTypeIdx,
      tokenType
    };
  }
  addTokenUsingPush(tokenVector, index, tokenToAdd) {
    tokenVector.push(tokenToAdd);
    return index;
  }
  addTokenUsingMemberAccess(tokenVector, index, tokenToAdd) {
    tokenVector[index] = tokenToAdd;
    index++;
    return index;
  }
  handlePayloadNoCustom(token, payload) {
  }
  handlePayloadWithCustom(token, payload) {
    if (payload !== null) {
      token.payload = payload;
    }
  }
  matchWithTest(pattern, text, offset) {
    const found = pattern.test(text);
    if (found === true) {
      return text.substring(offset, pattern.lastIndex);
    }
    return null;
  }
  matchWithExec(pattern, text) {
    const regExpArray = pattern.exec(text);
    return regExpArray !== null ? regExpArray[0] : null;
  }
};
Lexer.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
Lexer.NA = /NOT_APPLICABLE/;

// node_modules/chevrotain/lib/src/scan/tokens_public.js
function tokenLabel2(tokType) {
  if (hasTokenLabel2(tokType)) {
    return tokType.LABEL;
  } else {
    return tokType.name;
  }
}
function hasTokenLabel2(obj) {
  return isString_default(obj.LABEL) && obj.LABEL !== "";
}
var PARENT = "parent";
var CATEGORIES = "categories";
var LABEL = "label";
var GROUP = "group";
var PUSH_MODE = "push_mode";
var POP_MODE = "pop_mode";
var LONGER_ALT = "longer_alt";
var LINE_BREAKS = "line_breaks";
var START_CHARS_HINT = "start_chars_hint";
function createToken(config) {
  return createTokenInternal(config);
}
function createTokenInternal(config) {
  const pattern = config.pattern;
  const tokenType = {};
  tokenType.name = config.name;
  if (!isUndefined_default(pattern)) {
    tokenType.PATTERN = pattern;
  }
  if (has_default(config, PARENT)) {
    throw "The parent property is no longer supported.\nSee: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
  }
  if (has_default(config, CATEGORIES)) {
    tokenType.CATEGORIES = config[CATEGORIES];
  }
  augmentTokenTypes([tokenType]);
  if (has_default(config, LABEL)) {
    tokenType.LABEL = config[LABEL];
  }
  if (has_default(config, GROUP)) {
    tokenType.GROUP = config[GROUP];
  }
  if (has_default(config, POP_MODE)) {
    tokenType.POP_MODE = config[POP_MODE];
  }
  if (has_default(config, PUSH_MODE)) {
    tokenType.PUSH_MODE = config[PUSH_MODE];
  }
  if (has_default(config, LONGER_ALT)) {
    tokenType.LONGER_ALT = config[LONGER_ALT];
  }
  if (has_default(config, LINE_BREAKS)) {
    tokenType.LINE_BREAKS = config[LINE_BREAKS];
  }
  if (has_default(config, START_CHARS_HINT)) {
    tokenType.START_CHARS_HINT = config[START_CHARS_HINT];
  }
  return tokenType;
}
var EOF = createToken({ name: "EOF", pattern: Lexer.NA });
augmentTokenTypes([EOF]);
function createTokenInstance(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {
  return {
    image,
    startOffset,
    endOffset,
    startLine,
    endLine,
    startColumn,
    endColumn,
    tokenTypeIdx: tokType.tokenTypeIdx,
    tokenType: tokType
  };
}
function tokenMatcher(token, tokType) {
  return tokenStructuredMatcher(token, tokType);
}

// node_modules/chevrotain/lib/src/parse/errors_public.js
var defaultParserErrorProvider = {
  buildMismatchTokenMessage({ expected, actual, previous, ruleName }) {
    const hasLabel = hasTokenLabel2(expected);
    const expectedMsg = hasLabel ? `--> ${tokenLabel2(expected)} <--` : `token of type --> ${expected.name} <--`;
    const msg = `Expecting ${expectedMsg} but found --> '${actual.image}' <--`;
    return msg;
  },
  buildNotAllInputParsedMessage({ firstRedundant, ruleName }) {
    return "Redundant input, expecting EOF but found: " + firstRedundant.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt, actual, previous, customUserDescription, ruleName }) {
    const errPrefix = "Expecting: ";
    const actualText = head_default(actual).image;
    const errSuffix = "\nbut found: '" + actualText + "'";
    if (customUserDescription) {
      return errPrefix + customUserDescription + errSuffix;
    } else {
      const allLookAheadPaths = reduce_default(expectedPathsPerAlt, (result, currAltPaths) => result.concat(currAltPaths), []);
      const nextValidTokenSequences = map_default(allLookAheadPaths, (currPath) => `[${map_default(currPath, (currTokenType) => tokenLabel2(currTokenType)).join(", ")}]`);
      const nextValidSequenceItems = map_default(nextValidTokenSequences, (itemMsg, idx) => `  ${idx + 1}. ${itemMsg}`);
      const calculatedDescription = `one of these possible Token sequences:
${nextValidSequenceItems.join("\n")}`;
      return errPrefix + calculatedDescription + errSuffix;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths, actual, customUserDescription, ruleName }) {
    const errPrefix = "Expecting: ";
    const actualText = head_default(actual).image;
    const errSuffix = "\nbut found: '" + actualText + "'";
    if (customUserDescription) {
      return errPrefix + customUserDescription + errSuffix;
    } else {
      const nextValidTokenSequences = map_default(expectedIterationPaths, (currPath) => `[${map_default(currPath, (currTokenType) => tokenLabel2(currTokenType)).join(",")}]`);
      const calculatedDescription = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${nextValidTokenSequences.join(" ,")}>`;
      return errPrefix + calculatedDescription + errSuffix;
    }
  }
};
Object.freeze(defaultParserErrorProvider);
var defaultGrammarResolverErrorProvider = {
  buildRuleNotFoundError(topLevelRule, undefinedRule) {
    const msg = "Invalid grammar, reference to a rule which is not defined: ->" + undefinedRule.nonTerminalName + "<-\ninside top level rule: ->" + topLevelRule.name + "<-";
    return msg;
  }
};
var defaultGrammarValidatorErrorProvider = {
  buildDuplicateFoundError(topLevelRule, duplicateProds) {
    function getExtraProductionArgument2(prod) {
      if (prod instanceof Terminal) {
        return prod.terminalType.name;
      } else if (prod instanceof NonTerminal) {
        return prod.nonTerminalName;
      } else {
        return "";
      }
    }
    const topLevelName = topLevelRule.name;
    const duplicateProd = head_default(duplicateProds);
    const index = duplicateProd.idx;
    const dslName = getProductionDslName(duplicateProd);
    const extraArgument = getExtraProductionArgument2(duplicateProd);
    const hasExplicitIndex = index > 0;
    let msg = `->${dslName}${hasExplicitIndex ? index : ""}<- ${extraArgument ? `with argument: ->${extraArgument}<-` : ""}
                  appears more than once (${duplicateProds.length} times) in the top level rule: ->${topLevelName}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    msg = msg.replace(/[ \t]+/g, " ");
    msg = msg.replace(/\s\s+/g, "\n");
    return msg;
  },
  buildNamespaceConflictError(rule) {
    const errMsg = `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${rule.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
    return errMsg;
  },
  buildAlternationPrefixAmbiguityError(options) {
    const pathMsg = map_default(options.prefixPath, (currTok) => tokenLabel2(currTok)).join(", ");
    const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
    const errMsg = `Ambiguous alternatives: <${options.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${occurrence}> inside <${options.topLevelRule.name}> Rule,
<${pathMsg}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
    return errMsg;
  },
  buildAlternationAmbiguityError(options) {
    const pathMsg = map_default(options.prefixPath, (currtok) => tokenLabel2(currtok)).join(", ");
    const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
    let currMessage = `Ambiguous Alternatives Detected: <${options.ambiguityIndices.join(" ,")}> in <OR${occurrence}> inside <${options.topLevelRule.name}> Rule,
<${pathMsg}> may appears as a prefix path in all these alternatives.
`;
    currMessage = currMessage + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`;
    return currMessage;
  },
  buildEmptyRepetitionError(options) {
    let dslName = getProductionDslName(options.repetition);
    if (options.repetition.idx !== 0) {
      dslName += options.repetition.idx;
    }
    const errMsg = `The repetition <${dslName}> within Rule <${options.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
    return errMsg;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(options) {
    return "deprecated";
  },
  buildEmptyAlternationError(options) {
    const errMsg = `Ambiguous empty alternative: <${options.emptyChoiceIdx + 1}> in <OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
    return errMsg;
  },
  buildTooManyAlternativesError(options) {
    const errMsg = `An Alternation cannot have more than 256 alternatives:
<OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.
 has ${options.alternation.definition.length + 1} alternatives.`;
    return errMsg;
  },
  buildLeftRecursionError(options) {
    const ruleName = options.topLevelRule.name;
    const pathNames = map_default(options.leftRecursionPath, (currRule) => currRule.name);
    const leftRecursivePath = `${ruleName} --> ${pathNames.concat([ruleName]).join(" --> ")}`;
    const errMsg = `Left Recursion found in grammar.
rule: <${ruleName}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${leftRecursivePath}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
    return errMsg;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(options) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(options) {
    let ruleName;
    if (options.topLevelRule instanceof Rule) {
      ruleName = options.topLevelRule.name;
    } else {
      ruleName = options.topLevelRule;
    }
    const errMsg = `Duplicate definition, rule: ->${ruleName}<- is already defined in the grammar: ->${options.grammarName}<-`;
    return errMsg;
  }
};

// node_modules/chevrotain/lib/src/parse/grammar/resolver.js
function resolveGrammar(topLevels, errMsgProvider) {
  const refResolver = new GastRefResolverVisitor(topLevels, errMsgProvider);
  refResolver.resolveRefs();
  return refResolver.errors;
}
var GastRefResolverVisitor = class extends GAstVisitor {
  constructor(nameToTopRule, errMsgProvider) {
    super();
    this.nameToTopRule = nameToTopRule;
    this.errMsgProvider = errMsgProvider;
    this.errors = [];
  }
  resolveRefs() {
    forEach_default(values_default(this.nameToTopRule), (prod) => {
      this.currTopLevel = prod;
      prod.accept(this);
    });
  }
  visitNonTerminal(node) {
    const ref = this.nameToTopRule[node.nonTerminalName];
    if (!ref) {
      const msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);
      this.errors.push({
        message: msg,
        type: ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: node.nonTerminalName
      });
    } else {
      node.referencedRule = ref;
    }
  }
};

// node_modules/chevrotain/lib/src/parse/grammar/interpreter.js
var AbstractNextPossibleTokensWalker = class extends RestWalker {
  constructor(topProd, path) {
    super();
    this.topProd = topProd;
    this.path = path;
    this.possibleTokTypes = [];
    this.nextProductionName = "";
    this.nextProductionOccurrence = 0;
    this.found = false;
    this.isAtEndOfPath = false;
  }
  startWalking() {
    this.found = false;
    if (this.path.ruleStack[0] !== this.topProd.name) {
      throw Error("The path does not start with the walker's top Rule!");
    }
    this.ruleStack = clone_default(this.path.ruleStack).reverse();
    this.occurrenceStack = clone_default(this.path.occurrenceStack).reverse();
    this.ruleStack.pop();
    this.occurrenceStack.pop();
    this.updateExpectedNext();
    this.walk(this.topProd);
    return this.possibleTokTypes;
  }
  walk(prod, prevRest = []) {
    if (!this.found) {
      super.walk(prod, prevRest);
    }
  }
  walkProdRef(refProd, currRest, prevRest) {
    if (refProd.referencedRule.name === this.nextProductionName && refProd.idx === this.nextProductionOccurrence) {
      const fullRest = currRest.concat(prevRest);
      this.updateExpectedNext();
      this.walk(refProd.referencedRule, fullRest);
    }
  }
  updateExpectedNext() {
    if (isEmpty_default(this.ruleStack)) {
      this.nextProductionName = "";
      this.nextProductionOccurrence = 0;
      this.isAtEndOfPath = true;
    } else {
      this.nextProductionName = this.ruleStack.pop();
      this.nextProductionOccurrence = this.occurrenceStack.pop();
    }
  }
};
var NextAfterTokenWalker = class extends AbstractNextPossibleTokensWalker {
  constructor(topProd, path) {
    super(topProd, path);
    this.path = path;
    this.nextTerminalName = "";
    this.nextTerminalOccurrence = 0;
    this.nextTerminalName = this.path.lastTok.name;
    this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(terminal, currRest, prevRest) {
    if (this.isAtEndOfPath && terminal.terminalType.name === this.nextTerminalName && terminal.idx === this.nextTerminalOccurrence && !this.found) {
      const fullRest = currRest.concat(prevRest);
      const restProd = new Alternative({ definition: fullRest });
      this.possibleTokTypes = first(restProd);
      this.found = true;
    }
  }
};
var AbstractNextTerminalAfterProductionWalker = class extends RestWalker {
  constructor(topRule, occurrence) {
    super();
    this.topRule = topRule;
    this.occurrence = occurrence;
    this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    this.walk(this.topRule);
    return this.result;
  }
};
var NextTerminalAfterManyWalker = class extends AbstractNextTerminalAfterProductionWalker {
  walkMany(manyProd, currRest, prevRest) {
    if (manyProd.idx === this.occurrence) {
      const firstAfterMany = head_default(currRest.concat(prevRest));
      this.result.isEndOfRule = firstAfterMany === void 0;
      if (firstAfterMany instanceof Terminal) {
        this.result.token = firstAfterMany.terminalType;
        this.result.occurrence = firstAfterMany.idx;
      }
    } else {
      super.walkMany(manyProd, currRest, prevRest);
    }
  }
};
var NextTerminalAfterManySepWalker = class extends AbstractNextTerminalAfterProductionWalker {
  walkManySep(manySepProd, currRest, prevRest) {
    if (manySepProd.idx === this.occurrence) {
      const firstAfterManySep = head_default(currRest.concat(prevRest));
      this.result.isEndOfRule = firstAfterManySep === void 0;
      if (firstAfterManySep instanceof Terminal) {
        this.result.token = firstAfterManySep.terminalType;
        this.result.occurrence = firstAfterManySep.idx;
      }
    } else {
      super.walkManySep(manySepProd, currRest, prevRest);
    }
  }
};
var NextTerminalAfterAtLeastOneWalker = class extends AbstractNextTerminalAfterProductionWalker {
  walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
    if (atLeastOneProd.idx === this.occurrence) {
      const firstAfterAtLeastOne = head_default(currRest.concat(prevRest));
      this.result.isEndOfRule = firstAfterAtLeastOne === void 0;
      if (firstAfterAtLeastOne instanceof Terminal) {
        this.result.token = firstAfterAtLeastOne.terminalType;
        this.result.occurrence = firstAfterAtLeastOne.idx;
      }
    } else {
      super.walkAtLeastOne(atLeastOneProd, currRest, prevRest);
    }
  }
};
var NextTerminalAfterAtLeastOneSepWalker = class extends AbstractNextTerminalAfterProductionWalker {
  walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest) {
    if (atleastOneSepProd.idx === this.occurrence) {
      const firstAfterfirstAfterAtLeastOneSep = head_default(currRest.concat(prevRest));
      this.result.isEndOfRule = firstAfterfirstAfterAtLeastOneSep === void 0;
      if (firstAfterfirstAfterAtLeastOneSep instanceof Terminal) {
        this.result.token = firstAfterfirstAfterAtLeastOneSep.terminalType;
        this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx;
      }
    } else {
      super.walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest);
    }
  }
};
function possiblePathsFrom(targetDef, maxLength, currPath = []) {
  currPath = clone_default(currPath);
  let result = [];
  let i = 0;
  function remainingPathWith(nextDef) {
    return nextDef.concat(drop_default(targetDef, i + 1));
  }
  function getAlternativesForProd(definition) {
    const alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);
    return result.concat(alternatives);
  }
  while (currPath.length < maxLength && i < targetDef.length) {
    const prod = targetDef[i];
    if (prod instanceof Alternative) {
      return getAlternativesForProd(prod.definition);
    } else if (prod instanceof NonTerminal) {
      return getAlternativesForProd(prod.definition);
    } else if (prod instanceof Option) {
      result = getAlternativesForProd(prod.definition);
    } else if (prod instanceof RepetitionMandatory) {
      const newDef = prod.definition.concat([
        new Repetition({
          definition: prod.definition
        })
      ]);
      return getAlternativesForProd(newDef);
    } else if (prod instanceof RepetitionMandatoryWithSeparator) {
      const newDef = [
        new Alternative({ definition: prod.definition }),
        new Repetition({
          definition: [new Terminal({ terminalType: prod.separator })].concat(prod.definition)
        })
      ];
      return getAlternativesForProd(newDef);
    } else if (prod instanceof RepetitionWithSeparator) {
      const newDef = prod.definition.concat([
        new Repetition({
          definition: [new Terminal({ terminalType: prod.separator })].concat(prod.definition)
        })
      ]);
      result = getAlternativesForProd(newDef);
    } else if (prod instanceof Repetition) {
      const newDef = prod.definition.concat([
        new Repetition({
          definition: prod.definition
        })
      ]);
      result = getAlternativesForProd(newDef);
    } else if (prod instanceof Alternation) {
      forEach_default(prod.definition, (currAlt) => {
        if (isEmpty_default(currAlt.definition) === false) {
          result = getAlternativesForProd(currAlt.definition);
        }
      });
      return result;
    } else if (prod instanceof Terminal) {
      currPath.push(prod.terminalType);
    } else {
      throw Error("non exhaustive match");
    }
    i++;
  }
  result.push({
    partialPath: currPath,
    suffixDef: drop_default(targetDef, i)
  });
  return result;
}
function nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {
  const EXIT_NON_TERMINAL = "EXIT_NONE_TERMINAL";
  const EXIT_NON_TERMINAL_ARR = [EXIT_NON_TERMINAL];
  const EXIT_ALTERNATIVE = "EXIT_ALTERNATIVE";
  let foundCompletePath = false;
  const tokenVectorLength = tokenVector.length;
  const minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1;
  const result = [];
  const possiblePaths = [];
  possiblePaths.push({
    idx: -1,
    def: initialDef,
    ruleStack: [],
    occurrenceStack: []
  });
  while (!isEmpty_default(possiblePaths)) {
    const currPath = possiblePaths.pop();
    if (currPath === EXIT_ALTERNATIVE) {
      if (foundCompletePath && last_default(possiblePaths).idx <= minimalAlternativesIndex) {
        possiblePaths.pop();
      }
      continue;
    }
    const currDef = currPath.def;
    const currIdx = currPath.idx;
    const currRuleStack = currPath.ruleStack;
    const currOccurrenceStack = currPath.occurrenceStack;
    if (isEmpty_default(currDef)) {
      continue;
    }
    const prod = currDef[0];
    if (prod === EXIT_NON_TERMINAL) {
      const nextPath = {
        idx: currIdx,
        def: drop_default(currDef),
        ruleStack: dropRight_default(currRuleStack),
        occurrenceStack: dropRight_default(currOccurrenceStack)
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof Terminal) {
      if (currIdx < tokenVectorLength - 1) {
        const nextIdx = currIdx + 1;
        const actualToken = tokenVector[nextIdx];
        if (tokMatcher(actualToken, prod.terminalType)) {
          const nextPath = {
            idx: nextIdx,
            def: drop_default(currDef),
            ruleStack: currRuleStack,
            occurrenceStack: currOccurrenceStack
          };
          possiblePaths.push(nextPath);
        }
      } else if (currIdx === tokenVectorLength - 1) {
        result.push({
          nextTokenType: prod.terminalType,
          nextTokenOccurrence: prod.idx,
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        });
        foundCompletePath = true;
      } else {
        throw Error("non exhaustive match");
      }
    } else if (prod instanceof NonTerminal) {
      const newRuleStack = clone_default(currRuleStack);
      newRuleStack.push(prod.nonTerminalName);
      const newOccurrenceStack = clone_default(currOccurrenceStack);
      newOccurrenceStack.push(prod.idx);
      const nextPath = {
        idx: currIdx,
        def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, drop_default(currDef)),
        ruleStack: newRuleStack,
        occurrenceStack: newOccurrenceStack
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof Option) {
      const nextPathWithout = {
        idx: currIdx,
        def: drop_default(currDef),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWithout);
      possiblePaths.push(EXIT_ALTERNATIVE);
      const nextPathWith = {
        idx: currIdx,
        def: prod.definition.concat(drop_default(currDef)),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWith);
    } else if (prod instanceof RepetitionMandatory) {
      const secondIteration = new Repetition({
        definition: prod.definition,
        idx: prod.idx
      });
      const nextDef = prod.definition.concat([secondIteration], drop_default(currDef));
      const nextPath = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof RepetitionMandatoryWithSeparator) {
      const separatorGast = new Terminal({
        terminalType: prod.separator
      });
      const secondIteration = new Repetition({
        definition: [separatorGast].concat(prod.definition),
        idx: prod.idx
      });
      const nextDef = prod.definition.concat([secondIteration], drop_default(currDef));
      const nextPath = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof RepetitionWithSeparator) {
      const nextPathWithout = {
        idx: currIdx,
        def: drop_default(currDef),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWithout);
      possiblePaths.push(EXIT_ALTERNATIVE);
      const separatorGast = new Terminal({
        terminalType: prod.separator
      });
      const nthRepetition = new Repetition({
        definition: [separatorGast].concat(prod.definition),
        idx: prod.idx
      });
      const nextDef = prod.definition.concat([nthRepetition], drop_default(currDef));
      const nextPathWith = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWith);
    } else if (prod instanceof Repetition) {
      const nextPathWithout = {
        idx: currIdx,
        def: drop_default(currDef),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWithout);
      possiblePaths.push(EXIT_ALTERNATIVE);
      const nthRepetition = new Repetition({
        definition: prod.definition,
        idx: prod.idx
      });
      const nextDef = prod.definition.concat([nthRepetition], drop_default(currDef));
      const nextPathWith = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWith);
    } else if (prod instanceof Alternation) {
      for (let i = prod.definition.length - 1; i >= 0; i--) {
        const currAlt = prod.definition[i];
        const currAltPath = {
          idx: currIdx,
          def: currAlt.definition.concat(drop_default(currDef)),
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        };
        possiblePaths.push(currAltPath);
        possiblePaths.push(EXIT_ALTERNATIVE);
      }
    } else if (prod instanceof Alternative) {
      possiblePaths.push({
        idx: currIdx,
        def: prod.definition.concat(drop_default(currDef)),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      });
    } else if (prod instanceof Rule) {
      possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));
    } else {
      throw Error("non exhaustive match");
    }
  }
  return result;
}
function expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {
  const newRuleStack = clone_default(currRuleStack);
  newRuleStack.push(topRule.name);
  const newCurrOccurrenceStack = clone_default(currOccurrenceStack);
  newCurrOccurrenceStack.push(1);
  return {
    idx: currIdx,
    def: topRule.definition,
    ruleStack: newRuleStack,
    occurrenceStack: newCurrOccurrenceStack
  };
}

// node_modules/chevrotain/lib/src/parse/grammar/lookahead.js
var PROD_TYPE;
(function(PROD_TYPE2) {
  PROD_TYPE2[PROD_TYPE2["OPTION"] = 0] = "OPTION";
  PROD_TYPE2[PROD_TYPE2["REPETITION"] = 1] = "REPETITION";
  PROD_TYPE2[PROD_TYPE2["REPETITION_MANDATORY"] = 2] = "REPETITION_MANDATORY";
  PROD_TYPE2[PROD_TYPE2["REPETITION_MANDATORY_WITH_SEPARATOR"] = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR";
  PROD_TYPE2[PROD_TYPE2["REPETITION_WITH_SEPARATOR"] = 4] = "REPETITION_WITH_SEPARATOR";
  PROD_TYPE2[PROD_TYPE2["ALTERNATION"] = 5] = "ALTERNATION";
})(PROD_TYPE || (PROD_TYPE = {}));
function getProdType(prod) {
  if (prod instanceof Option || prod === "Option") {
    return PROD_TYPE.OPTION;
  } else if (prod instanceof Repetition || prod === "Repetition") {
    return PROD_TYPE.REPETITION;
  } else if (prod instanceof RepetitionMandatory || prod === "RepetitionMandatory") {
    return PROD_TYPE.REPETITION_MANDATORY;
  } else if (prod instanceof RepetitionMandatoryWithSeparator || prod === "RepetitionMandatoryWithSeparator") {
    return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
  } else if (prod instanceof RepetitionWithSeparator || prod === "RepetitionWithSeparator") {
    return PROD_TYPE.REPETITION_WITH_SEPARATOR;
  } else if (prod instanceof Alternation || prod === "Alternation") {
    return PROD_TYPE.ALTERNATION;
  } else {
    throw Error("non exhaustive match");
  }
}
function getLookaheadPaths(options) {
  const { occurrence, rule, prodType, maxLookahead } = options;
  const type = getProdType(prodType);
  if (type === PROD_TYPE.ALTERNATION) {
    return getLookaheadPathsForOr(occurrence, rule, maxLookahead);
  } else {
    return getLookaheadPathsForOptionalProd(occurrence, rule, type, maxLookahead);
  }
}
function buildLookaheadFuncForOr(occurrence, ruleGrammar, maxLookahead, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {
  const lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, maxLookahead);
  const tokenMatcher2 = areTokenCategoriesNotUsed(lookAheadPaths) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
  return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher2, dynamicTokensEnabled);
}
function buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {
  const lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k);
  const tokenMatcher2 = areTokenCategoriesNotUsed(lookAheadPaths) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
  return lookaheadBuilder(lookAheadPaths[0], tokenMatcher2, dynamicTokensEnabled);
}
function buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher2, dynamicTokensEnabled) {
  const numOfAlts = alts.length;
  const areAllOneTokenLookahead = every_default(alts, (currAlt) => {
    return every_default(currAlt, (currPath) => {
      return currPath.length === 1;
    });
  });
  if (hasPredicates) {
    return function(orAlts) {
      const predicates = map_default(orAlts, (currAlt) => currAlt.GATE);
      for (let t = 0; t < numOfAlts; t++) {
        const currAlt = alts[t];
        const currNumOfPaths = currAlt.length;
        const currPredicate = predicates[t];
        if (currPredicate !== void 0 && currPredicate.call(this) === false) {
          continue;
        }
        nextPath: for (let j = 0; j < currNumOfPaths; j++) {
          const currPath = currAlt[j];
          const currPathLength = currPath.length;
          for (let i = 0; i < currPathLength; i++) {
            const nextToken = this.LA(i + 1);
            if (tokenMatcher2(nextToken, currPath[i]) === false) {
              continue nextPath;
            }
          }
          return t;
        }
      }
      return void 0;
    };
  } else if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
    const singleTokenAlts = map_default(alts, (currAlt) => {
      return flatten_default(currAlt);
    });
    const choiceToAlt = reduce_default(singleTokenAlts, (result, currAlt, idx) => {
      forEach_default(currAlt, (currTokType) => {
        if (!has_default(result, currTokType.tokenTypeIdx)) {
          result[currTokType.tokenTypeIdx] = idx;
        }
        forEach_default(currTokType.categoryMatches, (currExtendingType) => {
          if (!has_default(result, currExtendingType)) {
            result[currExtendingType] = idx;
          }
        });
      });
      return result;
    }, {});
    return function() {
      const nextToken = this.LA(1);
      return choiceToAlt[nextToken.tokenTypeIdx];
    };
  } else {
    return function() {
      for (let t = 0; t < numOfAlts; t++) {
        const currAlt = alts[t];
        const currNumOfPaths = currAlt.length;
        nextPath: for (let j = 0; j < currNumOfPaths; j++) {
          const currPath = currAlt[j];
          const currPathLength = currPath.length;
          for (let i = 0; i < currPathLength; i++) {
            const nextToken = this.LA(i + 1);
            if (tokenMatcher2(nextToken, currPath[i]) === false) {
              continue nextPath;
            }
          }
          return t;
        }
      }
      return void 0;
    };
  }
}
function buildSingleAlternativeLookaheadFunction(alt, tokenMatcher2, dynamicTokensEnabled) {
  const areAllOneTokenLookahead = every_default(alt, (currPath) => {
    return currPath.length === 1;
  });
  const numOfPaths = alt.length;
  if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
    const singleTokensTypes = flatten_default(alt);
    if (singleTokensTypes.length === 1 && isEmpty_default(singleTokensTypes[0].categoryMatches)) {
      const expectedTokenType = singleTokensTypes[0];
      const expectedTokenUniqueKey = expectedTokenType.tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey;
      };
    } else {
      const choiceToAlt = reduce_default(singleTokensTypes, (result, currTokType, idx) => {
        result[currTokType.tokenTypeIdx] = true;
        forEach_default(currTokType.categoryMatches, (currExtendingType) => {
          result[currExtendingType] = true;
        });
        return result;
      }, []);
      return function() {
        const nextToken = this.LA(1);
        return choiceToAlt[nextToken.tokenTypeIdx] === true;
      };
    }
  } else {
    return function() {
      nextPath: for (let j = 0; j < numOfPaths; j++) {
        const currPath = alt[j];
        const currPathLength = currPath.length;
        for (let i = 0; i < currPathLength; i++) {
          const nextToken = this.LA(i + 1);
          if (tokenMatcher2(nextToken, currPath[i]) === false) {
            continue nextPath;
          }
        }
        return true;
      }
      return false;
    };
  }
}
var RestDefinitionFinderWalker = class extends RestWalker {
  constructor(topProd, targetOccurrence, targetProdType) {
    super();
    this.topProd = topProd;
    this.targetOccurrence = targetOccurrence;
    this.targetProdType = targetProdType;
  }
  startWalking() {
    this.walk(this.topProd);
    return this.restDef;
  }
  checkIsTarget(node, expectedProdType, currRest, prevRest) {
    if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdType) {
      this.restDef = currRest.concat(prevRest);
      return true;
    }
    return false;
  }
  walkOption(optionProd, currRest, prevRest) {
    if (!this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest)) {
      super.walkOption(optionProd, currRest, prevRest);
    }
  }
  walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
    if (!this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest)) {
      super.walkOption(atLeastOneProd, currRest, prevRest);
    }
  }
  walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
    if (!this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest)) {
      super.walkOption(atLeastOneSepProd, currRest, prevRest);
    }
  }
  walkMany(manyProd, currRest, prevRest) {
    if (!this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest)) {
      super.walkOption(manyProd, currRest, prevRest);
    }
  }
  walkManySep(manySepProd, currRest, prevRest) {
    if (!this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest)) {
      super.walkOption(manySepProd, currRest, prevRest);
    }
  }
};
var InsideDefinitionFinderVisitor = class extends GAstVisitor {
  constructor(targetOccurrence, targetProdType, targetRef) {
    super();
    this.targetOccurrence = targetOccurrence;
    this.targetProdType = targetProdType;
    this.targetRef = targetRef;
    this.result = [];
  }
  checkIsTarget(node, expectedProdName) {
    if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdName && (this.targetRef === void 0 || node === this.targetRef)) {
      this.result = node.definition;
    }
  }
  visitOption(node) {
    this.checkIsTarget(node, PROD_TYPE.OPTION);
  }
  visitRepetition(node) {
    this.checkIsTarget(node, PROD_TYPE.REPETITION);
  }
  visitRepetitionMandatory(node) {
    this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(node) {
    this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(node) {
    this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(node) {
    this.checkIsTarget(node, PROD_TYPE.ALTERNATION);
  }
};
function initializeArrayOfArrays(size) {
  const result = new Array(size);
  for (let i = 0; i < size; i++) {
    result[i] = [];
  }
  return result;
}
function pathToHashKeys(path) {
  let keys = [""];
  for (let i = 0; i < path.length; i++) {
    const tokType = path[i];
    const longerKeys = [];
    for (let j = 0; j < keys.length; j++) {
      const currShorterKey = keys[j];
      longerKeys.push(currShorterKey + "_" + tokType.tokenTypeIdx);
      for (let t = 0; t < tokType.categoryMatches.length; t++) {
        const categoriesKeySuffix = "_" + tokType.categoryMatches[t];
        longerKeys.push(currShorterKey + categoriesKeySuffix);
      }
    }
    keys = longerKeys;
  }
  return keys;
}
function isUniquePrefixHash(altKnownPathsKeys, searchPathKeys, idx) {
  for (let currAltIdx = 0; currAltIdx < altKnownPathsKeys.length; currAltIdx++) {
    if (currAltIdx === idx) {
      continue;
    }
    const otherAltKnownPathsKeys = altKnownPathsKeys[currAltIdx];
    for (let searchIdx = 0; searchIdx < searchPathKeys.length; searchIdx++) {
      const searchKey = searchPathKeys[searchIdx];
      if (otherAltKnownPathsKeys[searchKey] === true) {
        return false;
      }
    }
  }
  return true;
}
function lookAheadSequenceFromAlternatives(altsDefs, k) {
  const partialAlts = map_default(altsDefs, (currAlt) => possiblePathsFrom([currAlt], 1));
  const finalResult = initializeArrayOfArrays(partialAlts.length);
  const altsHashes = map_default(partialAlts, (currAltPaths) => {
    const dict = {};
    forEach_default(currAltPaths, (item) => {
      const keys = pathToHashKeys(item.partialPath);
      forEach_default(keys, (currKey) => {
        dict[currKey] = true;
      });
    });
    return dict;
  });
  let newData = partialAlts;
  for (let pathLength = 1; pathLength <= k; pathLength++) {
    const currDataset = newData;
    newData = initializeArrayOfArrays(currDataset.length);
    for (let altIdx = 0; altIdx < currDataset.length; altIdx++) {
      const currAltPathsAndSuffixes = currDataset[altIdx];
      for (let currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++) {
        const currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath;
        const suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef;
        const prefixKeys = pathToHashKeys(currPathPrefix);
        const isUnique = isUniquePrefixHash(altsHashes, prefixKeys, altIdx);
        if (isUnique || isEmpty_default(suffixDef) || currPathPrefix.length === k) {
          const currAltResult = finalResult[altIdx];
          if (containsPath(currAltResult, currPathPrefix) === false) {
            currAltResult.push(currPathPrefix);
            for (let j = 0; j < prefixKeys.length; j++) {
              const currKey = prefixKeys[j];
              altsHashes[altIdx][currKey] = true;
            }
          }
        } else {
          const newPartialPathsAndSuffixes = possiblePathsFrom(suffixDef, pathLength + 1, currPathPrefix);
          newData[altIdx] = newData[altIdx].concat(newPartialPathsAndSuffixes);
          forEach_default(newPartialPathsAndSuffixes, (item) => {
            const prefixKeys2 = pathToHashKeys(item.partialPath);
            forEach_default(prefixKeys2, (key) => {
              altsHashes[altIdx][key] = true;
            });
          });
        }
      }
    }
  }
  return finalResult;
}
function getLookaheadPathsForOr(occurrence, ruleGrammar, k, orProd) {
  const visitor = new InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION, orProd);
  ruleGrammar.accept(visitor);
  return lookAheadSequenceFromAlternatives(visitor.result, k);
}
function getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {
  const insideDefVisitor = new InsideDefinitionFinderVisitor(occurrence, prodType);
  ruleGrammar.accept(insideDefVisitor);
  const insideDef = insideDefVisitor.result;
  const afterDefWalker = new RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType);
  const afterDef = afterDefWalker.startWalking();
  const insideFlat = new Alternative({ definition: insideDef });
  const afterFlat = new Alternative({ definition: afterDef });
  return lookAheadSequenceFromAlternatives([insideFlat, afterFlat], k);
}
function containsPath(alternative, searchPath) {
  compareOtherPath: for (let i = 0; i < alternative.length; i++) {
    const otherPath = alternative[i];
    if (otherPath.length !== searchPath.length) {
      continue;
    }
    for (let j = 0; j < otherPath.length; j++) {
      const searchTok = searchPath[j];
      const otherTok = otherPath[j];
      const matchingTokens = searchTok === otherTok || otherTok.categoryMatchesMap[searchTok.tokenTypeIdx] !== void 0;
      if (matchingTokens === false) {
        continue compareOtherPath;
      }
    }
    return true;
  }
  return false;
}
function isStrictPrefixOfPath(prefix, other) {
  return prefix.length < other.length && every_default(prefix, (tokType, idx) => {
    const otherTokType = other[idx];
    return tokType === otherTokType || otherTokType.categoryMatchesMap[tokType.tokenTypeIdx];
  });
}
function areTokenCategoriesNotUsed(lookAheadPaths) {
  return every_default(lookAheadPaths, (singleAltPaths) => every_default(singleAltPaths, (singlePath) => every_default(singlePath, (token) => isEmpty_default(token.categoryMatches))));
}

// node_modules/chevrotain/lib/src/parse/grammar/checks.js
function validateLookahead(options) {
  const lookaheadValidationErrorMessages = options.lookaheadStrategy.validate({
    rules: options.rules,
    tokenTypes: options.tokenTypes,
    grammarName: options.grammarName
  });
  return map_default(lookaheadValidationErrorMessages, (errorMessage) => Object.assign({ type: ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION }, errorMessage));
}
function validateGrammar(topLevels, tokenTypes, errMsgProvider, grammarName) {
  const duplicateErrors = flatMap_default(topLevels, (currTopLevel) => validateDuplicateProductions(currTopLevel, errMsgProvider));
  const termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider);
  const tooManyAltsErrors = flatMap_default(topLevels, (curRule) => validateTooManyAlts(curRule, errMsgProvider));
  const duplicateRulesError = flatMap_default(topLevels, (curRule) => validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider));
  return duplicateErrors.concat(termsNamespaceConflictErrors, tooManyAltsErrors, duplicateRulesError);
}
function validateDuplicateProductions(topLevelRule, errMsgProvider) {
  const collectorVisitor2 = new OccurrenceValidationCollector();
  topLevelRule.accept(collectorVisitor2);
  const allRuleProductions = collectorVisitor2.allProductions;
  const productionGroups = groupBy_default(allRuleProductions, identifyProductionForDuplicates);
  const duplicates = pickBy_default(productionGroups, (currGroup) => {
    return currGroup.length > 1;
  });
  const errors = map_default(values_default(duplicates), (currDuplicates) => {
    const firstProd = head_default(currDuplicates);
    const msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates);
    const dslName = getProductionDslName(firstProd);
    const defError = {
      message: msg,
      type: ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
      ruleName: topLevelRule.name,
      dslName,
      occurrence: firstProd.idx
    };
    const param = getExtraProductionArgument(firstProd);
    if (param) {
      defError.parameter = param;
    }
    return defError;
  });
  return errors;
}
function identifyProductionForDuplicates(prod) {
  return `${getProductionDslName(prod)}_#_${prod.idx}_#_${getExtraProductionArgument(prod)}`;
}
function getExtraProductionArgument(prod) {
  if (prod instanceof Terminal) {
    return prod.terminalType.name;
  } else if (prod instanceof NonTerminal) {
    return prod.nonTerminalName;
  } else {
    return "";
  }
}
var OccurrenceValidationCollector = class extends GAstVisitor {
  constructor() {
    super(...arguments);
    this.allProductions = [];
  }
  visitNonTerminal(subrule) {
    this.allProductions.push(subrule);
  }
  visitOption(option2) {
    this.allProductions.push(option2);
  }
  visitRepetitionWithSeparator(manySep) {
    this.allProductions.push(manySep);
  }
  visitRepetitionMandatory(atLeastOne) {
    this.allProductions.push(atLeastOne);
  }
  visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
    this.allProductions.push(atLeastOneSep);
  }
  visitRepetition(many) {
    this.allProductions.push(many);
  }
  visitAlternation(or) {
    this.allProductions.push(or);
  }
  visitTerminal(terminal) {
    this.allProductions.push(terminal);
  }
};
function validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {
  const errors = [];
  const occurrences = reduce_default(allRules, (result, curRule) => {
    if (curRule.name === rule.name) {
      return result + 1;
    }
    return result;
  }, 0);
  if (occurrences > 1) {
    const errMsg = errMsgProvider.buildDuplicateRuleNameError({
      topLevelRule: rule,
      grammarName: className
    });
    errors.push({
      message: errMsg,
      type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
      ruleName: rule.name
    });
  }
  return errors;
}
function validateRuleIsOverridden(ruleName, definedRulesNames, className) {
  const errors = [];
  let errMsg;
  if (!includes_default(definedRulesNames, ruleName)) {
    errMsg = `Invalid rule override, rule: ->${ruleName}<- cannot be overridden in the grammar: ->${className}<-as it is not defined in any of the super grammars `;
    errors.push({
      message: errMsg,
      type: ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
      ruleName
    });
  }
  return errors;
}
function validateNoLeftRecursion(topRule, currRule, errMsgProvider, path = []) {
  const errors = [];
  const nextNonTerminals = getFirstNoneTerminal(currRule.definition);
  if (isEmpty_default(nextNonTerminals)) {
    return [];
  } else {
    const ruleName = topRule.name;
    const foundLeftRecursion = includes_default(nextNonTerminals, topRule);
    if (foundLeftRecursion) {
      errors.push({
        message: errMsgProvider.buildLeftRecursionError({
          topLevelRule: topRule,
          leftRecursionPath: path
        }),
        type: ParserDefinitionErrorType.LEFT_RECURSION,
        ruleName
      });
    }
    const validNextSteps = difference_default(nextNonTerminals, path.concat([topRule]));
    const errorsFromNextSteps = flatMap_default(validNextSteps, (currRefRule) => {
      const newPath = clone_default(path);
      newPath.push(currRefRule);
      return validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);
    });
    return errors.concat(errorsFromNextSteps);
  }
}
function getFirstNoneTerminal(definition) {
  let result = [];
  if (isEmpty_default(definition)) {
    return result;
  }
  const firstProd = head_default(definition);
  if (firstProd instanceof NonTerminal) {
    result.push(firstProd.referencedRule);
  } else if (firstProd instanceof Alternative || firstProd instanceof Option || firstProd instanceof RepetitionMandatory || firstProd instanceof RepetitionMandatoryWithSeparator || firstProd instanceof RepetitionWithSeparator || firstProd instanceof Repetition) {
    result = result.concat(getFirstNoneTerminal(firstProd.definition));
  } else if (firstProd instanceof Alternation) {
    result = flatten_default(map_default(firstProd.definition, (currSubDef) => getFirstNoneTerminal(currSubDef.definition)));
  } else if (firstProd instanceof Terminal) {
  } else {
    throw Error("non exhaustive match");
  }
  const isFirstOptional = isOptionalProd(firstProd);
  const hasMore = definition.length > 1;
  if (isFirstOptional && hasMore) {
    const rest = drop_default(definition);
    return result.concat(getFirstNoneTerminal(rest));
  } else {
    return result;
  }
}
var OrCollector = class extends GAstVisitor {
  constructor() {
    super(...arguments);
    this.alternations = [];
  }
  visitAlternation(node) {
    this.alternations.push(node);
  }
};
function validateEmptyOrAlternative(topLevelRule, errMsgProvider) {
  const orCollector = new OrCollector();
  topLevelRule.accept(orCollector);
  const ors = orCollector.alternations;
  const errors = flatMap_default(ors, (currOr) => {
    const exceptLast = dropRight_default(currOr.definition);
    return flatMap_default(exceptLast, (currAlternative, currAltIdx) => {
      const possibleFirstInAlt = nextPossibleTokensAfter([currAlternative], [], tokenStructuredMatcher, 1);
      if (isEmpty_default(possibleFirstInAlt)) {
        return [
          {
            message: errMsgProvider.buildEmptyAlternationError({
              topLevelRule,
              alternation: currOr,
              emptyChoiceIdx: currAltIdx
            }),
            type: ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
            ruleName: topLevelRule.name,
            occurrence: currOr.idx,
            alternative: currAltIdx + 1
          }
        ];
      } else {
        return [];
      }
    });
  });
  return errors;
}
function validateAmbiguousAlternationAlternatives(topLevelRule, globalMaxLookahead, errMsgProvider) {
  const orCollector = new OrCollector();
  topLevelRule.accept(orCollector);
  let ors = orCollector.alternations;
  ors = reject_default(ors, (currOr) => currOr.ignoreAmbiguities === true);
  const errors = flatMap_default(ors, (currOr) => {
    const currOccurrence = currOr.idx;
    const actualMaxLookahead = currOr.maxLookahead || globalMaxLookahead;
    const alternatives = getLookaheadPathsForOr(currOccurrence, topLevelRule, actualMaxLookahead, currOr);
    const altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
    const altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
    return altsAmbiguityErrors.concat(altsPrefixAmbiguityErrors);
  });
  return errors;
}
var RepetitionCollector = class extends GAstVisitor {
  constructor() {
    super(...arguments);
    this.allProductions = [];
  }
  visitRepetitionWithSeparator(manySep) {
    this.allProductions.push(manySep);
  }
  visitRepetitionMandatory(atLeastOne) {
    this.allProductions.push(atLeastOne);
  }
  visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
    this.allProductions.push(atLeastOneSep);
  }
  visitRepetition(many) {
    this.allProductions.push(many);
  }
};
function validateTooManyAlts(topLevelRule, errMsgProvider) {
  const orCollector = new OrCollector();
  topLevelRule.accept(orCollector);
  const ors = orCollector.alternations;
  const errors = flatMap_default(ors, (currOr) => {
    if (currOr.definition.length > 255) {
      return [
        {
          message: errMsgProvider.buildTooManyAlternativesError({
            topLevelRule,
            alternation: currOr
          }),
          type: ParserDefinitionErrorType.TOO_MANY_ALTS,
          ruleName: topLevelRule.name,
          occurrence: currOr.idx
        }
      ];
    } else {
      return [];
    }
  });
  return errors;
}
function validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {
  const errors = [];
  forEach_default(topLevelRules, (currTopRule) => {
    const collectorVisitor2 = new RepetitionCollector();
    currTopRule.accept(collectorVisitor2);
    const allRuleProductions = collectorVisitor2.allProductions;
    forEach_default(allRuleProductions, (currProd) => {
      const prodType = getProdType(currProd);
      const actualMaxLookahead = currProd.maxLookahead || maxLookahead;
      const currOccurrence = currProd.idx;
      const paths = getLookaheadPathsForOptionalProd(currOccurrence, currTopRule, prodType, actualMaxLookahead);
      const pathsInsideProduction = paths[0];
      if (isEmpty_default(flatten_default(pathsInsideProduction))) {
        const errMsg = errMsgProvider.buildEmptyRepetitionError({
          topLevelRule: currTopRule,
          repetition: currProd
        });
        errors.push({
          message: errMsg,
          type: ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: currTopRule.name
        });
      }
    });
  });
  return errors;
}
function checkAlternativesAmbiguities(alternatives, alternation2, rule, errMsgProvider) {
  const foundAmbiguousPaths = [];
  const identicalAmbiguities = reduce_default(alternatives, (result, currAlt, currAltIdx) => {
    if (alternation2.definition[currAltIdx].ignoreAmbiguities === true) {
      return result;
    }
    forEach_default(currAlt, (currPath) => {
      const altsCurrPathAppearsIn = [currAltIdx];
      forEach_default(alternatives, (currOtherAlt, currOtherAltIdx) => {
        if (currAltIdx !== currOtherAltIdx && containsPath(currOtherAlt, currPath) && // ignore (skip) ambiguities with this "other" alternative
        alternation2.definition[currOtherAltIdx].ignoreAmbiguities !== true) {
          altsCurrPathAppearsIn.push(currOtherAltIdx);
        }
      });
      if (altsCurrPathAppearsIn.length > 1 && !containsPath(foundAmbiguousPaths, currPath)) {
        foundAmbiguousPaths.push(currPath);
        result.push({
          alts: altsCurrPathAppearsIn,
          path: currPath
        });
      }
    });
    return result;
  }, []);
  const currErrors = map_default(identicalAmbiguities, (currAmbDescriptor) => {
    const ambgIndices = map_default(currAmbDescriptor.alts, (currAltIdx) => currAltIdx + 1);
    const currMessage = errMsgProvider.buildAlternationAmbiguityError({
      topLevelRule: rule,
      alternation: alternation2,
      ambiguityIndices: ambgIndices,
      prefixPath: currAmbDescriptor.path
    });
    return {
      message: currMessage,
      type: ParserDefinitionErrorType.AMBIGUOUS_ALTS,
      ruleName: rule.name,
      occurrence: alternation2.idx,
      alternatives: currAmbDescriptor.alts
    };
  });
  return currErrors;
}
function checkPrefixAlternativesAmbiguities(alternatives, alternation2, rule, errMsgProvider) {
  const pathsAndIndices = reduce_default(alternatives, (result, currAlt, idx) => {
    const currPathsAndIdx = map_default(currAlt, (currPath) => {
      return { idx, path: currPath };
    });
    return result.concat(currPathsAndIdx);
  }, []);
  const errors = compact_default(flatMap_default(pathsAndIndices, (currPathAndIdx) => {
    const alternativeGast = alternation2.definition[currPathAndIdx.idx];
    if (alternativeGast.ignoreAmbiguities === true) {
      return [];
    }
    const targetIdx = currPathAndIdx.idx;
    const targetPath = currPathAndIdx.path;
    const prefixAmbiguitiesPathsAndIndices = filter_default(pathsAndIndices, (searchPathAndIdx) => {
      return (
        // ignore (skip) ambiguities with this "other" alternative
        alternation2.definition[searchPathAndIdx.idx].ignoreAmbiguities !== true && searchPathAndIdx.idx < targetIdx && // checking for strict prefix because identical lookaheads
        // will be be detected using a different validation.
        isStrictPrefixOfPath(searchPathAndIdx.path, targetPath)
      );
    });
    const currPathPrefixErrors = map_default(prefixAmbiguitiesPathsAndIndices, (currAmbPathAndIdx) => {
      const ambgIndices = [currAmbPathAndIdx.idx + 1, targetIdx + 1];
      const occurrence = alternation2.idx === 0 ? "" : alternation2.idx;
      const message = errMsgProvider.buildAlternationPrefixAmbiguityError({
        topLevelRule: rule,
        alternation: alternation2,
        ambiguityIndices: ambgIndices,
        prefixPath: currAmbPathAndIdx.path
      });
      return {
        message,
        type: ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
        ruleName: rule.name,
        occurrence,
        alternatives: ambgIndices
      };
    });
    return currPathPrefixErrors;
  }));
  return errors;
}
function checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {
  const errors = [];
  const tokenNames = map_default(tokenTypes, (currToken) => currToken.name);
  forEach_default(topLevels, (currRule) => {
    const currRuleName = currRule.name;
    if (includes_default(tokenNames, currRuleName)) {
      const errMsg = errMsgProvider.buildNamespaceConflictError(currRule);
      errors.push({
        message: errMsg,
        type: ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: currRuleName
      });
    }
  });
  return errors;
}

// node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js
function resolveGrammar2(options) {
  const actualOptions = defaults_default(options, {
    errMsgProvider: defaultGrammarResolverErrorProvider
  });
  const topRulesTable = {};
  forEach_default(options.rules, (rule) => {
    topRulesTable[rule.name] = rule;
  });
  return resolveGrammar(topRulesTable, actualOptions.errMsgProvider);
}
function validateGrammar2(options) {
  options = defaults_default(options, {
    errMsgProvider: defaultGrammarValidatorErrorProvider
  });
  return validateGrammar(options.rules, options.tokenTypes, options.errMsgProvider, options.grammarName);
}

// node_modules/chevrotain/lib/src/parse/exceptions_public.js
var MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException";
var NO_VIABLE_ALT_EXCEPTION = "NoViableAltException";
var EARLY_EXIT_EXCEPTION = "EarlyExitException";
var NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException";
var RECOGNITION_EXCEPTION_NAMES = [
  MISMATCHED_TOKEN_EXCEPTION,
  NO_VIABLE_ALT_EXCEPTION,
  EARLY_EXIT_EXCEPTION,
  NOT_ALL_INPUT_PARSED_EXCEPTION
];
Object.freeze(RECOGNITION_EXCEPTION_NAMES);
function isRecognitionException(error) {
  return includes_default(RECOGNITION_EXCEPTION_NAMES, error.name);
}
var RecognitionException = class extends Error {
  constructor(message, token) {
    super(message);
    this.token = token;
    this.resyncedTokens = [];
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};
var MismatchedTokenException = class extends RecognitionException {
  constructor(message, token, previousToken) {
    super(message, token);
    this.previousToken = previousToken;
    this.name = MISMATCHED_TOKEN_EXCEPTION;
  }
};
var NoViableAltException = class extends RecognitionException {
  constructor(message, token, previousToken) {
    super(message, token);
    this.previousToken = previousToken;
    this.name = NO_VIABLE_ALT_EXCEPTION;
  }
};
var NotAllInputParsedException = class extends RecognitionException {
  constructor(message, token) {
    super(message, token);
    this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
  }
};
var EarlyExitException = class extends RecognitionException {
  constructor(message, token, previousToken) {
    super(message, token);
    this.previousToken = previousToken;
    this.name = EARLY_EXIT_EXCEPTION;
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js
var EOF_FOLLOW_KEY = {};
var IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
var InRuleRecoveryException = class extends Error {
  constructor(message) {
    super(message);
    this.name = IN_RULE_RECOVERY_EXCEPTION;
  }
};
var Recoverable = class {
  initRecoverable(config) {
    this.firstAfterRepMap = {};
    this.resyncFollows = {};
    this.recoveryEnabled = has_default(config, "recoveryEnabled") ? config.recoveryEnabled : DEFAULT_PARSER_CONFIG.recoveryEnabled;
    if (this.recoveryEnabled) {
      this.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
    }
  }
  getTokenToInsert(tokType) {
    const tokToInsert = createTokenInstance(tokType, "", NaN, NaN, NaN, NaN, NaN, NaN);
    tokToInsert.isInsertedInRecovery = true;
    return tokToInsert;
  }
  canTokenTypeBeInsertedInRecovery(tokType) {
    return true;
  }
  canTokenTypeBeDeletedInRecovery(tokType) {
    return true;
  }
  tryInRepetitionRecovery(grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {
    const reSyncTokType = this.findReSyncTokenType();
    const savedLexerState = this.exportLexerState();
    const resyncedTokens = [];
    let passedResyncPoint = false;
    const nextTokenWithoutResync = this.LA(1);
    let currToken = this.LA(1);
    const generateErrorMessage = () => {
      const previousToken = this.LA(0);
      const msg = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: expectedTokType,
        actual: nextTokenWithoutResync,
        previous: previousToken,
        ruleName: this.getCurrRuleFullName()
      });
      const error = new MismatchedTokenException(msg, nextTokenWithoutResync, this.LA(0));
      error.resyncedTokens = dropRight_default(resyncedTokens);
      this.SAVE_ERROR(error);
    };
    while (!passedResyncPoint) {
      if (this.tokenMatcher(currToken, expectedTokType)) {
        generateErrorMessage();
        return;
      } else if (lookAheadFunc.call(this)) {
        generateErrorMessage();
        grammarRule.apply(this, grammarRuleArgs);
        return;
      } else if (this.tokenMatcher(currToken, reSyncTokType)) {
        passedResyncPoint = true;
      } else {
        currToken = this.SKIP_TOKEN();
        this.addToResyncTokens(currToken, resyncedTokens);
      }
    }
    this.importLexerState(savedLexerState);
  }
  shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck) {
    if (notStuck === false) {
      return false;
    }
    if (this.tokenMatcher(this.LA(1), expectTokAfterLastMatch)) {
      return false;
    }
    if (this.isBackTracking()) {
      return false;
    }
    if (this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx))) {
      return false;
    }
    return true;
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(tokType, tokIdxInRule) {
    const grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule);
    const follows = this.getNextPossibleTokenTypes(grammarPath);
    return follows;
  }
  tryInRuleRecovery(expectedTokType, follows) {
    if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {
      const tokToInsert = this.getTokenToInsert(expectedTokType);
      return tokToInsert;
    }
    if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {
      const nextTok = this.SKIP_TOKEN();
      this.consumeToken();
      return nextTok;
    }
    throw new InRuleRecoveryException("sad sad panda");
  }
  canPerformInRuleRecovery(expectedToken, follows) {
    return this.canRecoverWithSingleTokenInsertion(expectedToken, follows) || this.canRecoverWithSingleTokenDeletion(expectedToken);
  }
  canRecoverWithSingleTokenInsertion(expectedTokType, follows) {
    if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType)) {
      return false;
    }
    if (isEmpty_default(follows)) {
      return false;
    }
    const mismatchedTok = this.LA(1);
    const isMisMatchedTokInFollows = find_default(follows, (possibleFollowsTokType) => {
      return this.tokenMatcher(mismatchedTok, possibleFollowsTokType);
    }) !== void 0;
    return isMisMatchedTokInFollows;
  }
  canRecoverWithSingleTokenDeletion(expectedTokType) {
    if (!this.canTokenTypeBeDeletedInRecovery(expectedTokType)) {
      return false;
    }
    const isNextTokenWhatIsExpected = this.tokenMatcher(this.LA(2), expectedTokType);
    return isNextTokenWhatIsExpected;
  }
  isInCurrentRuleReSyncSet(tokenTypeIdx) {
    const followKey = this.getCurrFollowKey();
    const currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);
    return includes_default(currentRuleReSyncSet, tokenTypeIdx);
  }
  findReSyncTokenType() {
    const allPossibleReSyncTokTypes = this.flattenFollowSet();
    let nextToken = this.LA(1);
    let k = 2;
    while (true) {
      const foundMatch = find_default(allPossibleReSyncTokTypes, (resyncTokType) => {
        const canMatch = tokenMatcher(nextToken, resyncTokType);
        return canMatch;
      });
      if (foundMatch !== void 0) {
        return foundMatch;
      }
      nextToken = this.LA(k);
      k++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1) {
      return EOF_FOLLOW_KEY;
    }
    const currRuleShortName = this.getLastExplicitRuleShortName();
    const currRuleIdx = this.getLastExplicitRuleOccurrenceIndex();
    const prevRuleShortName = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(currRuleShortName),
      idxInCallingRule: currRuleIdx,
      inRule: this.shortRuleNameToFullName(prevRuleShortName)
    };
  }
  buildFullFollowKeyStack() {
    const explicitRuleStack = this.RULE_STACK;
    const explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;
    return map_default(explicitRuleStack, (ruleName, idx) => {
      if (idx === 0) {
        return EOF_FOLLOW_KEY;
      }
      return {
        ruleName: this.shortRuleNameToFullName(ruleName),
        idxInCallingRule: explicitOccurrenceStack[idx],
        inRule: this.shortRuleNameToFullName(explicitRuleStack[idx - 1])
      };
    });
  }
  flattenFollowSet() {
    const followStack = map_default(this.buildFullFollowKeyStack(), (currKey) => {
      return this.getFollowSetFromFollowKey(currKey);
    });
    return flatten_default(followStack);
  }
  getFollowSetFromFollowKey(followKey) {
    if (followKey === EOF_FOLLOW_KEY) {
      return [EOF];
    }
    const followName = followKey.ruleName + followKey.idxInCallingRule + IN + followKey.inRule;
    return this.resyncFollows[followName];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(token, resyncTokens) {
    if (!this.tokenMatcher(token, EOF)) {
      resyncTokens.push(token);
    }
    return resyncTokens;
  }
  reSyncTo(tokType) {
    const resyncedTokens = [];
    let nextTok = this.LA(1);
    while (this.tokenMatcher(nextTok, tokType) === false) {
      nextTok = this.SKIP_TOKEN();
      this.addToResyncTokens(nextTok, resyncedTokens);
    }
    return dropRight_default(resyncedTokens);
  }
  attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
  }
  getCurrentGrammarPath(tokType, tokIdxInRule) {
    const pathRuleStack = this.getHumanReadableRuleStack();
    const pathOccurrenceStack = clone_default(this.RULE_OCCURRENCE_STACK);
    const grammarPath = {
      ruleStack: pathRuleStack,
      occurrenceStack: pathOccurrenceStack,
      lastTok: tokType,
      lastTokOccurrence: tokIdxInRule
    };
    return grammarPath;
  }
  getHumanReadableRuleStack() {
    return map_default(this.RULE_STACK, (currShortName) => this.shortRuleNameToFullName(currShortName));
  }
};
function attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
  const key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence);
  let firstAfterRepInfo = this.firstAfterRepMap[key];
  if (firstAfterRepInfo === void 0) {
    const currRuleName = this.getCurrRuleFullName();
    const ruleGrammar = this.getGAstProductions()[currRuleName];
    const walker = new nextToksWalker(ruleGrammar, prodOccurrence);
    firstAfterRepInfo = walker.startWalking();
    this.firstAfterRepMap[key] = firstAfterRepInfo;
  }
  let expectTokAfterLastMatch = firstAfterRepInfo.token;
  let nextTokIdx = firstAfterRepInfo.occurrence;
  const isEndOfRule = firstAfterRepInfo.isEndOfRule;
  if (this.RULE_STACK.length === 1 && isEndOfRule && expectTokAfterLastMatch === void 0) {
    expectTokAfterLastMatch = EOF;
    nextTokIdx = 1;
  }
  if (expectTokAfterLastMatch === void 0 || nextTokIdx === void 0) {
    return;
  }
  if (this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck)) {
    this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);
  }
}

// node_modules/chevrotain/lib/src/parse/grammar/keys.js
var BITS_FOR_METHOD_TYPE = 4;
var BITS_FOR_OCCURRENCE_IDX = 8;
var BITS_FOR_ALT_IDX = 8;
var OR_IDX = 1 << BITS_FOR_OCCURRENCE_IDX;
var OPTION_IDX = 2 << BITS_FOR_OCCURRENCE_IDX;
var MANY_IDX = 3 << BITS_FOR_OCCURRENCE_IDX;
var AT_LEAST_ONE_IDX = 4 << BITS_FOR_OCCURRENCE_IDX;
var MANY_SEP_IDX = 5 << BITS_FOR_OCCURRENCE_IDX;
var AT_LEAST_ONE_SEP_IDX = 6 << BITS_FOR_OCCURRENCE_IDX;
function getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {
  return occurrence | dslMethodIdx | ruleIdx;
}
var BITS_START_FOR_ALT_IDX = 32 - BITS_FOR_ALT_IDX;

// node_modules/chevrotain/lib/src/parse/grammar/llk_lookahead.js
var LLkLookaheadStrategy = class {
  constructor(options) {
    var _a;
    this.maxLookahead = (_a = options === null || options === void 0 ? void 0 : options.maxLookahead) !== null && _a !== void 0 ? _a : DEFAULT_PARSER_CONFIG.maxLookahead;
  }
  validate(options) {
    const leftRecursionErrors = this.validateNoLeftRecursion(options.rules);
    if (isEmpty_default(leftRecursionErrors)) {
      const emptyAltErrors = this.validateEmptyOrAlternatives(options.rules);
      const ambiguousAltsErrors = this.validateAmbiguousAlternationAlternatives(options.rules, this.maxLookahead);
      const emptyRepetitionErrors = this.validateSomeNonEmptyLookaheadPath(options.rules, this.maxLookahead);
      const allErrors = [
        ...leftRecursionErrors,
        ...emptyAltErrors,
        ...ambiguousAltsErrors,
        ...emptyRepetitionErrors
      ];
      return allErrors;
    }
    return leftRecursionErrors;
  }
  validateNoLeftRecursion(rules) {
    return flatMap_default(rules, (currTopRule) => validateNoLeftRecursion(currTopRule, currTopRule, defaultGrammarValidatorErrorProvider));
  }
  validateEmptyOrAlternatives(rules) {
    return flatMap_default(rules, (currTopRule) => validateEmptyOrAlternative(currTopRule, defaultGrammarValidatorErrorProvider));
  }
  validateAmbiguousAlternationAlternatives(rules, maxLookahead) {
    return flatMap_default(rules, (currTopRule) => validateAmbiguousAlternationAlternatives(currTopRule, maxLookahead, defaultGrammarValidatorErrorProvider));
  }
  validateSomeNonEmptyLookaheadPath(rules, maxLookahead) {
    return validateSomeNonEmptyLookaheadPath(rules, maxLookahead, defaultGrammarValidatorErrorProvider);
  }
  buildLookaheadForAlternation(options) {
    return buildLookaheadFuncForOr(options.prodOccurrence, options.rule, options.maxLookahead, options.hasPredicates, options.dynamicTokensEnabled, buildAlternativesLookAheadFunc);
  }
  buildLookaheadForOptional(options) {
    return buildLookaheadFuncForOptionalProd(options.prodOccurrence, options.rule, options.maxLookahead, options.dynamicTokensEnabled, getProdType(options.prodType), buildSingleAlternativeLookaheadFunction);
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js
var LooksAhead = class {
  initLooksAhead(config) {
    this.dynamicTokensEnabled = has_default(config, "dynamicTokensEnabled") ? config.dynamicTokensEnabled : DEFAULT_PARSER_CONFIG.dynamicTokensEnabled;
    this.maxLookahead = has_default(config, "maxLookahead") ? config.maxLookahead : DEFAULT_PARSER_CONFIG.maxLookahead;
    this.lookaheadStrategy = has_default(config, "lookaheadStrategy") ? config.lookaheadStrategy : new LLkLookaheadStrategy({ maxLookahead: this.maxLookahead });
    this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(rules) {
    forEach_default(rules, (currRule) => {
      this.TRACE_INIT(`${currRule.name} Rule Lookahead`, () => {
        const { alternation: alternation2, repetition: repetition2, option: option2, repetitionMandatory: repetitionMandatory2, repetitionMandatoryWithSeparator, repetitionWithSeparator } = collectMethods(currRule);
        forEach_default(alternation2, (currProd) => {
          const prodIdx = currProd.idx === 0 ? "" : currProd.idx;
          this.TRACE_INIT(`${getProductionDslName(currProd)}${prodIdx}`, () => {
            const laFunc = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: currProd.idx,
              rule: currRule,
              maxLookahead: currProd.maxLookahead || this.maxLookahead,
              hasPredicates: currProd.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            });
            const key = getKeyForAutomaticLookahead(this.fullRuleNameToShort[currRule.name], OR_IDX, currProd.idx);
            this.setLaFuncCache(key, laFunc);
          });
        });
        forEach_default(repetition2, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, MANY_IDX, "Repetition", currProd.maxLookahead, getProductionDslName(currProd));
        });
        forEach_default(option2, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, OPTION_IDX, "Option", currProd.maxLookahead, getProductionDslName(currProd));
        });
        forEach_default(repetitionMandatory2, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, AT_LEAST_ONE_IDX, "RepetitionMandatory", currProd.maxLookahead, getProductionDslName(currProd));
        });
        forEach_default(repetitionMandatoryWithSeparator, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, AT_LEAST_ONE_SEP_IDX, "RepetitionMandatoryWithSeparator", currProd.maxLookahead, getProductionDslName(currProd));
        });
        forEach_default(repetitionWithSeparator, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, MANY_SEP_IDX, "RepetitionWithSeparator", currProd.maxLookahead, getProductionDslName(currProd));
        });
      });
    });
  }
  computeLookaheadFunc(rule, prodOccurrence, prodKey, prodType, prodMaxLookahead, dslMethodName) {
    this.TRACE_INIT(`${dslMethodName}${prodOccurrence === 0 ? "" : prodOccurrence}`, () => {
      const laFunc = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence,
        rule,
        maxLookahead: prodMaxLookahead || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType
      });
      const key = getKeyForAutomaticLookahead(this.fullRuleNameToShort[rule.name], prodKey, prodOccurrence);
      this.setLaFuncCache(key, laFunc);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(dslMethodIdx, occurrence) {
    const currRuleShortName = this.getLastExplicitRuleShortName();
    return getKeyForAutomaticLookahead(currRuleShortName, dslMethodIdx, occurrence);
  }
  getLaFuncFromCache(key) {
    return this.lookAheadFuncsCache.get(key);
  }
  /* istanbul ignore next */
  setLaFuncCache(key, value) {
    this.lookAheadFuncsCache.set(key, value);
  }
};
var DslMethodsCollectorVisitor = class extends GAstVisitor {
  constructor() {
    super(...arguments);
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(option2) {
    this.dslMethods.option.push(option2);
  }
  visitRepetitionWithSeparator(manySep) {
    this.dslMethods.repetitionWithSeparator.push(manySep);
  }
  visitRepetitionMandatory(atLeastOne) {
    this.dslMethods.repetitionMandatory.push(atLeastOne);
  }
  visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);
  }
  visitRepetition(many) {
    this.dslMethods.repetition.push(many);
  }
  visitAlternation(or) {
    this.dslMethods.alternation.push(or);
  }
};
var collectorVisitor = new DslMethodsCollectorVisitor();
function collectMethods(rule) {
  collectorVisitor.reset();
  rule.accept(collectorVisitor);
  const dslMethods = collectorVisitor.dslMethods;
  collectorVisitor.reset();
  return dslMethods;
}

// node_modules/chevrotain/lib/src/parse/cst/cst.js
function setNodeLocationOnlyOffset(currNodeLocation, newLocationInfo) {
  if (isNaN(currNodeLocation.startOffset) === true) {
    currNodeLocation.startOffset = newLocationInfo.startOffset;
    currNodeLocation.endOffset = newLocationInfo.endOffset;
  } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
    currNodeLocation.endOffset = newLocationInfo.endOffset;
  }
}
function setNodeLocationFull(currNodeLocation, newLocationInfo) {
  if (isNaN(currNodeLocation.startOffset) === true) {
    currNodeLocation.startOffset = newLocationInfo.startOffset;
    currNodeLocation.startColumn = newLocationInfo.startColumn;
    currNodeLocation.startLine = newLocationInfo.startLine;
    currNodeLocation.endOffset = newLocationInfo.endOffset;
    currNodeLocation.endColumn = newLocationInfo.endColumn;
    currNodeLocation.endLine = newLocationInfo.endLine;
  } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
    currNodeLocation.endOffset = newLocationInfo.endOffset;
    currNodeLocation.endColumn = newLocationInfo.endColumn;
    currNodeLocation.endLine = newLocationInfo.endLine;
  }
}
function addTerminalToCst(node, token, tokenTypeName) {
  if (node.children[tokenTypeName] === void 0) {
    node.children[tokenTypeName] = [token];
  } else {
    node.children[tokenTypeName].push(token);
  }
}
function addNoneTerminalToCst(node, ruleName, ruleResult) {
  if (node.children[ruleName] === void 0) {
    node.children[ruleName] = [ruleResult];
  } else {
    node.children[ruleName].push(ruleResult);
  }
}

// node_modules/chevrotain/lib/src/lang/lang_extensions.js
var NAME = "name";
function defineNameProp(obj, nameValue) {
  Object.defineProperty(obj, NAME, {
    enumerable: false,
    configurable: true,
    writable: false,
    value: nameValue
  });
}

// node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js
function defaultVisit(ctx, param) {
  const childrenNames = keys_default(ctx);
  const childrenNamesLength = childrenNames.length;
  for (let i = 0; i < childrenNamesLength; i++) {
    const currChildName = childrenNames[i];
    const currChildArray = ctx[currChildName];
    const currChildArrayLength = currChildArray.length;
    for (let j = 0; j < currChildArrayLength; j++) {
      const currChild = currChildArray[j];
      if (currChild.tokenTypeIdx === void 0) {
        this[currChild.name](currChild.children, param);
      }
    }
  }
}
function createBaseSemanticVisitorConstructor(grammarName, ruleNames) {
  const derivedConstructor = function() {
  };
  defineNameProp(derivedConstructor, grammarName + "BaseSemantics");
  const semanticProto = {
    visit: function(cstNode, param) {
      if (isArray_default(cstNode)) {
        cstNode = cstNode[0];
      }
      if (isUndefined_default(cstNode)) {
        return void 0;
      }
      return this[cstNode.name](cstNode.children, param);
    },
    validateVisitor: function() {
      const semanticDefinitionErrors = validateVisitor(this, ruleNames);
      if (!isEmpty_default(semanticDefinitionErrors)) {
        const errorMessages = map_default(semanticDefinitionErrors, (currDefError) => currDefError.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${errorMessages.join("\n\n").replace(/\n/g, "\n	")}`);
      }
    }
  };
  derivedConstructor.prototype = semanticProto;
  derivedConstructor.prototype.constructor = derivedConstructor;
  derivedConstructor._RULE_NAMES = ruleNames;
  return derivedConstructor;
}
function createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {
  const derivedConstructor = function() {
  };
  defineNameProp(derivedConstructor, grammarName + "BaseSemanticsWithDefaults");
  const withDefaultsProto = Object.create(baseConstructor.prototype);
  forEach_default(ruleNames, (ruleName) => {
    withDefaultsProto[ruleName] = defaultVisit;
  });
  derivedConstructor.prototype = withDefaultsProto;
  derivedConstructor.prototype.constructor = derivedConstructor;
  return derivedConstructor;
}
var CstVisitorDefinitionError;
(function(CstVisitorDefinitionError2) {
  CstVisitorDefinitionError2[CstVisitorDefinitionError2["REDUNDANT_METHOD"] = 0] = "REDUNDANT_METHOD";
  CstVisitorDefinitionError2[CstVisitorDefinitionError2["MISSING_METHOD"] = 1] = "MISSING_METHOD";
})(CstVisitorDefinitionError || (CstVisitorDefinitionError = {}));
function validateVisitor(visitorInstance, ruleNames) {
  const missingErrors = validateMissingCstMethods(visitorInstance, ruleNames);
  return missingErrors;
}
function validateMissingCstMethods(visitorInstance, ruleNames) {
  const missingRuleNames = filter_default(ruleNames, (currRuleName) => {
    return isFunction_default(visitorInstance[currRuleName]) === false;
  });
  const errors = map_default(missingRuleNames, (currRuleName) => {
    return {
      msg: `Missing visitor method: <${currRuleName}> on ${visitorInstance.constructor.name} CST Visitor.`,
      type: CstVisitorDefinitionError.MISSING_METHOD,
      methodName: currRuleName
    };
  });
  return compact_default(errors);
}

// node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js
var TreeBuilder = class {
  initTreeBuilder(config) {
    this.CST_STACK = [];
    this.outputCst = config.outputCst;
    this.nodeLocationTracking = has_default(config, "nodeLocationTracking") ? config.nodeLocationTracking : DEFAULT_PARSER_CONFIG.nodeLocationTracking;
    if (!this.outputCst) {
      this.cstInvocationStateUpdate = noop_default;
      this.cstFinallyStateUpdate = noop_default;
      this.cstPostTerminal = noop_default;
      this.cstPostNonTerminal = noop_default;
      this.cstPostRule = noop_default;
    } else {
      if (/full/i.test(this.nodeLocationTracking)) {
        if (this.recoveryEnabled) {
          this.setNodeLocationFromToken = setNodeLocationFull;
          this.setNodeLocationFromNode = setNodeLocationFull;
          this.cstPostRule = noop_default;
          this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery;
        } else {
          this.setNodeLocationFromToken = noop_default;
          this.setNodeLocationFromNode = noop_default;
          this.cstPostRule = this.cstPostRuleFull;
          this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular;
        }
      } else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
        if (this.recoveryEnabled) {
          this.setNodeLocationFromToken = setNodeLocationOnlyOffset;
          this.setNodeLocationFromNode = setNodeLocationOnlyOffset;
          this.cstPostRule = noop_default;
          this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery;
        } else {
          this.setNodeLocationFromToken = noop_default;
          this.setNodeLocationFromNode = noop_default;
          this.cstPostRule = this.cstPostRuleOnlyOffset;
          this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular;
        }
      } else if (/none/i.test(this.nodeLocationTracking)) {
        this.setNodeLocationFromToken = noop_default;
        this.setNodeLocationFromNode = noop_default;
        this.cstPostRule = noop_default;
        this.setInitialNodeLocation = noop_default;
      } else {
        throw Error(`Invalid <nodeLocationTracking> config option: "${config.nodeLocationTracking}"`);
      }
    }
  }
  setInitialNodeLocationOnlyOffsetRecovery(cstNode) {
    cstNode.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(cstNode) {
    cstNode.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(cstNode) {
    cstNode.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(cstNode) {
    const nextToken = this.LA(1);
    cstNode.location = {
      startOffset: nextToken.startOffset,
      startLine: nextToken.startLine,
      startColumn: nextToken.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(fullRuleName) {
    const cstNode = {
      name: fullRuleName,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(cstNode);
    this.CST_STACK.push(cstNode);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(ruleCstNode) {
    const prevToken = this.LA(0);
    const loc = ruleCstNode.location;
    if (loc.startOffset <= prevToken.startOffset === true) {
      loc.endOffset = prevToken.endOffset;
      loc.endLine = prevToken.endLine;
      loc.endColumn = prevToken.endColumn;
    } else {
      loc.startOffset = NaN;
      loc.startLine = NaN;
      loc.startColumn = NaN;
    }
  }
  cstPostRuleOnlyOffset(ruleCstNode) {
    const prevToken = this.LA(0);
    const loc = ruleCstNode.location;
    if (loc.startOffset <= prevToken.startOffset === true) {
      loc.endOffset = prevToken.endOffset;
    } else {
      loc.startOffset = NaN;
    }
  }
  cstPostTerminal(key, consumedToken) {
    const rootCst = this.CST_STACK[this.CST_STACK.length - 1];
    addTerminalToCst(rootCst, consumedToken, key);
    this.setNodeLocationFromToken(rootCst.location, consumedToken);
  }
  cstPostNonTerminal(ruleCstResult, ruleName) {
    const preCstNode = this.CST_STACK[this.CST_STACK.length - 1];
    addNoneTerminalToCst(preCstNode, ruleName, ruleCstResult);
    this.setNodeLocationFromNode(preCstNode.location, ruleCstResult.location);
  }
  getBaseCstVisitorConstructor() {
    if (isUndefined_default(this.baseCstVisitorConstructor)) {
      const newBaseCstVisitorConstructor = createBaseSemanticVisitorConstructor(this.className, keys_default(this.gastProductionsCache));
      this.baseCstVisitorConstructor = newBaseCstVisitorConstructor;
      return newBaseCstVisitorConstructor;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (isUndefined_default(this.baseCstVisitorWithDefaultsConstructor)) {
      const newConstructor = createBaseVisitorConstructorWithDefaults(this.className, keys_default(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      this.baseCstVisitorWithDefaultsConstructor = newConstructor;
      return newConstructor;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    const ruleStack = this.RULE_STACK;
    return ruleStack[ruleStack.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    const ruleStack = this.RULE_STACK;
    return ruleStack[ruleStack.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    const occurrenceStack = this.RULE_OCCURRENCE_STACK;
    return occurrenceStack[occurrenceStack.length - 1];
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js
var LexerAdapter = class {
  initLexerAdapter() {
    this.tokVector = [];
    this.tokVectorLength = 0;
    this.currIdx = -1;
  }
  set input(newInput) {
    if (this.selfAnalysisDone !== true) {
      throw Error(`Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.`);
    }
    this.reset();
    this.tokVector = newInput;
    this.tokVectorLength = newInput.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    if (this.currIdx <= this.tokVector.length - 2) {
      this.consumeToken();
      return this.LA(1);
    } else {
      return END_OF_FILE;
    }
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(howMuch) {
    const soughtIdx = this.currIdx + howMuch;
    if (soughtIdx < 0 || this.tokVectorLength <= soughtIdx) {
      return END_OF_FILE;
    } else {
      return this.tokVector[soughtIdx];
    }
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(newState2) {
    this.currIdx = newState2;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js
var RecognizerApi = class {
  ACTION(impl) {
    return impl.call(this);
  }
  consume(idx, tokType, options) {
    return this.consumeInternal(tokType, idx, options);
  }
  subrule(idx, ruleToCall, options) {
    return this.subruleInternal(ruleToCall, idx, options);
  }
  option(idx, actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, idx);
  }
  or(idx, altsOrOpts) {
    return this.orInternal(altsOrOpts, idx);
  }
  many(idx, actionORMethodDef) {
    return this.manyInternal(idx, actionORMethodDef);
  }
  atLeastOne(idx, actionORMethodDef) {
    return this.atLeastOneInternal(idx, actionORMethodDef);
  }
  CONSUME(tokType, options) {
    return this.consumeInternal(tokType, 0, options);
  }
  CONSUME1(tokType, options) {
    return this.consumeInternal(tokType, 1, options);
  }
  CONSUME2(tokType, options) {
    return this.consumeInternal(tokType, 2, options);
  }
  CONSUME3(tokType, options) {
    return this.consumeInternal(tokType, 3, options);
  }
  CONSUME4(tokType, options) {
    return this.consumeInternal(tokType, 4, options);
  }
  CONSUME5(tokType, options) {
    return this.consumeInternal(tokType, 5, options);
  }
  CONSUME6(tokType, options) {
    return this.consumeInternal(tokType, 6, options);
  }
  CONSUME7(tokType, options) {
    return this.consumeInternal(tokType, 7, options);
  }
  CONSUME8(tokType, options) {
    return this.consumeInternal(tokType, 8, options);
  }
  CONSUME9(tokType, options) {
    return this.consumeInternal(tokType, 9, options);
  }
  SUBRULE(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 0, options);
  }
  SUBRULE1(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 1, options);
  }
  SUBRULE2(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 2, options);
  }
  SUBRULE3(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 3, options);
  }
  SUBRULE4(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 4, options);
  }
  SUBRULE5(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 5, options);
  }
  SUBRULE6(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 6, options);
  }
  SUBRULE7(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 7, options);
  }
  SUBRULE8(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 8, options);
  }
  SUBRULE9(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 9, options);
  }
  OPTION(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 0);
  }
  OPTION1(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 1);
  }
  OPTION2(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 2);
  }
  OPTION3(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 3);
  }
  OPTION4(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 4);
  }
  OPTION5(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 5);
  }
  OPTION6(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 6);
  }
  OPTION7(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 7);
  }
  OPTION8(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 8);
  }
  OPTION9(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 9);
  }
  OR(altsOrOpts) {
    return this.orInternal(altsOrOpts, 0);
  }
  OR1(altsOrOpts) {
    return this.orInternal(altsOrOpts, 1);
  }
  OR2(altsOrOpts) {
    return this.orInternal(altsOrOpts, 2);
  }
  OR3(altsOrOpts) {
    return this.orInternal(altsOrOpts, 3);
  }
  OR4(altsOrOpts) {
    return this.orInternal(altsOrOpts, 4);
  }
  OR5(altsOrOpts) {
    return this.orInternal(altsOrOpts, 5);
  }
  OR6(altsOrOpts) {
    return this.orInternal(altsOrOpts, 6);
  }
  OR7(altsOrOpts) {
    return this.orInternal(altsOrOpts, 7);
  }
  OR8(altsOrOpts) {
    return this.orInternal(altsOrOpts, 8);
  }
  OR9(altsOrOpts) {
    return this.orInternal(altsOrOpts, 9);
  }
  MANY(actionORMethodDef) {
    this.manyInternal(0, actionORMethodDef);
  }
  MANY1(actionORMethodDef) {
    this.manyInternal(1, actionORMethodDef);
  }
  MANY2(actionORMethodDef) {
    this.manyInternal(2, actionORMethodDef);
  }
  MANY3(actionORMethodDef) {
    this.manyInternal(3, actionORMethodDef);
  }
  MANY4(actionORMethodDef) {
    this.manyInternal(4, actionORMethodDef);
  }
  MANY5(actionORMethodDef) {
    this.manyInternal(5, actionORMethodDef);
  }
  MANY6(actionORMethodDef) {
    this.manyInternal(6, actionORMethodDef);
  }
  MANY7(actionORMethodDef) {
    this.manyInternal(7, actionORMethodDef);
  }
  MANY8(actionORMethodDef) {
    this.manyInternal(8, actionORMethodDef);
  }
  MANY9(actionORMethodDef) {
    this.manyInternal(9, actionORMethodDef);
  }
  MANY_SEP(options) {
    this.manySepFirstInternal(0, options);
  }
  MANY_SEP1(options) {
    this.manySepFirstInternal(1, options);
  }
  MANY_SEP2(options) {
    this.manySepFirstInternal(2, options);
  }
  MANY_SEP3(options) {
    this.manySepFirstInternal(3, options);
  }
  MANY_SEP4(options) {
    this.manySepFirstInternal(4, options);
  }
  MANY_SEP5(options) {
    this.manySepFirstInternal(5, options);
  }
  MANY_SEP6(options) {
    this.manySepFirstInternal(6, options);
  }
  MANY_SEP7(options) {
    this.manySepFirstInternal(7, options);
  }
  MANY_SEP8(options) {
    this.manySepFirstInternal(8, options);
  }
  MANY_SEP9(options) {
    this.manySepFirstInternal(9, options);
  }
  AT_LEAST_ONE(actionORMethodDef) {
    this.atLeastOneInternal(0, actionORMethodDef);
  }
  AT_LEAST_ONE1(actionORMethodDef) {
    return this.atLeastOneInternal(1, actionORMethodDef);
  }
  AT_LEAST_ONE2(actionORMethodDef) {
    this.atLeastOneInternal(2, actionORMethodDef);
  }
  AT_LEAST_ONE3(actionORMethodDef) {
    this.atLeastOneInternal(3, actionORMethodDef);
  }
  AT_LEAST_ONE4(actionORMethodDef) {
    this.atLeastOneInternal(4, actionORMethodDef);
  }
  AT_LEAST_ONE5(actionORMethodDef) {
    this.atLeastOneInternal(5, actionORMethodDef);
  }
  AT_LEAST_ONE6(actionORMethodDef) {
    this.atLeastOneInternal(6, actionORMethodDef);
  }
  AT_LEAST_ONE7(actionORMethodDef) {
    this.atLeastOneInternal(7, actionORMethodDef);
  }
  AT_LEAST_ONE8(actionORMethodDef) {
    this.atLeastOneInternal(8, actionORMethodDef);
  }
  AT_LEAST_ONE9(actionORMethodDef) {
    this.atLeastOneInternal(9, actionORMethodDef);
  }
  AT_LEAST_ONE_SEP(options) {
    this.atLeastOneSepFirstInternal(0, options);
  }
  AT_LEAST_ONE_SEP1(options) {
    this.atLeastOneSepFirstInternal(1, options);
  }
  AT_LEAST_ONE_SEP2(options) {
    this.atLeastOneSepFirstInternal(2, options);
  }
  AT_LEAST_ONE_SEP3(options) {
    this.atLeastOneSepFirstInternal(3, options);
  }
  AT_LEAST_ONE_SEP4(options) {
    this.atLeastOneSepFirstInternal(4, options);
  }
  AT_LEAST_ONE_SEP5(options) {
    this.atLeastOneSepFirstInternal(5, options);
  }
  AT_LEAST_ONE_SEP6(options) {
    this.atLeastOneSepFirstInternal(6, options);
  }
  AT_LEAST_ONE_SEP7(options) {
    this.atLeastOneSepFirstInternal(7, options);
  }
  AT_LEAST_ONE_SEP8(options) {
    this.atLeastOneSepFirstInternal(8, options);
  }
  AT_LEAST_ONE_SEP9(options) {
    this.atLeastOneSepFirstInternal(9, options);
  }
  RULE(name, implementation, config = DEFAULT_RULE_CONFIG) {
    if (includes_default(this.definedRulesNames, name)) {
      const errMsg = defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
        topLevelRule: name,
        grammarName: this.className
      });
      const error = {
        message: errMsg,
        type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
        ruleName: name
      };
      this.definitionErrors.push(error);
    }
    this.definedRulesNames.push(name);
    const ruleImplementation = this.defineRule(name, implementation, config);
    this[name] = ruleImplementation;
    return ruleImplementation;
  }
  OVERRIDE_RULE(name, impl, config = DEFAULT_RULE_CONFIG) {
    const ruleErrors = validateRuleIsOverridden(name, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(ruleErrors);
    const ruleImplementation = this.defineRule(name, impl, config);
    this[name] = ruleImplementation;
    return ruleImplementation;
  }
  BACKTRACK(grammarRule, args) {
    return function() {
      this.isBackTrackingStack.push(1);
      const orgState = this.saveRecogState();
      try {
        grammarRule.apply(this, args);
        return true;
      } catch (e) {
        if (isRecognitionException(e)) {
          return false;
        } else {
          throw e;
        }
      } finally {
        this.reloadRecogState(orgState);
        this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return serializeGrammar(values_default(this.gastProductionsCache));
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js
var RecognizerEngine = class {
  initRecognizerEngine(tokenVocabulary, config) {
    this.className = this.constructor.name;
    this.shortRuleNameToFull = {};
    this.fullRuleNameToShort = {};
    this.ruleShortNameIdx = 256;
    this.tokenMatcher = tokenStructuredMatcherNoCategories;
    this.subruleIdx = 0;
    this.definedRulesNames = [];
    this.tokensMap = {};
    this.isBackTrackingStack = [];
    this.RULE_STACK = [];
    this.RULE_OCCURRENCE_STACK = [];
    this.gastProductionsCache = {};
    if (has_default(config, "serializedGrammar")) {
      throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n	For Further details.");
    }
    if (isArray_default(tokenVocabulary)) {
      if (isEmpty_default(tokenVocabulary)) {
        throw Error("A Token Vocabulary cannot be empty.\n	Note that the first argument for the parser constructor\n	is no longer a Token vector (since v4.0).");
      }
      if (typeof tokenVocabulary[0].startOffset === "number") {
        throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n	For Further details.");
      }
    }
    if (isArray_default(tokenVocabulary)) {
      this.tokensMap = reduce_default(tokenVocabulary, (acc, tokType) => {
        acc[tokType.name] = tokType;
        return acc;
      }, {});
    } else if (has_default(tokenVocabulary, "modes") && every_default(flatten_default(values_default(tokenVocabulary.modes)), isTokenType)) {
      const allTokenTypes2 = flatten_default(values_default(tokenVocabulary.modes));
      const uniqueTokens = uniq_default(allTokenTypes2);
      this.tokensMap = reduce_default(uniqueTokens, (acc, tokType) => {
        acc[tokType.name] = tokType;
        return acc;
      }, {});
    } else if (isObject_default(tokenVocabulary)) {
      this.tokensMap = clone_default(tokenVocabulary);
    } else {
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    }
    this.tokensMap["EOF"] = EOF;
    const allTokenTypes = has_default(tokenVocabulary, "modes") ? flatten_default(values_default(tokenVocabulary.modes)) : values_default(tokenVocabulary);
    const noTokenCategoriesUsed = every_default(allTokenTypes, (tokenConstructor) => isEmpty_default(tokenConstructor.categoryMatches));
    this.tokenMatcher = noTokenCategoriesUsed ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
    augmentTokenTypes(values_default(this.tokensMap));
  }
  defineRule(ruleName, impl, config) {
    if (this.selfAnalysisDone) {
      throw Error(`Grammar rule <${ruleName}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    }
    const resyncEnabled = has_default(config, "resyncEnabled") ? config.resyncEnabled : DEFAULT_RULE_CONFIG.resyncEnabled;
    const recoveryValueFunc = has_default(config, "recoveryValueFunc") ? config.recoveryValueFunc : DEFAULT_RULE_CONFIG.recoveryValueFunc;
    const shortName = this.ruleShortNameIdx << BITS_FOR_METHOD_TYPE + BITS_FOR_OCCURRENCE_IDX;
    this.ruleShortNameIdx++;
    this.shortRuleNameToFull[shortName] = ruleName;
    this.fullRuleNameToShort[ruleName] = shortName;
    let invokeRuleWithTry;
    if (this.outputCst === true) {
      invokeRuleWithTry = function invokeRuleWithTry2(...args) {
        try {
          this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
          impl.apply(this, args);
          const cst = this.CST_STACK[this.CST_STACK.length - 1];
          this.cstPostRule(cst);
          return cst;
        } catch (e) {
          return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
        } finally {
          this.ruleFinallyStateUpdate();
        }
      };
    } else {
      invokeRuleWithTry = function invokeRuleWithTryCst(...args) {
        try {
          this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
          return impl.apply(this, args);
        } catch (e) {
          return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
        } finally {
          this.ruleFinallyStateUpdate();
        }
      };
    }
    const wrappedGrammarRule = Object.assign(invokeRuleWithTry, { ruleName, originalGrammarAction: impl });
    return wrappedGrammarRule;
  }
  invokeRuleCatch(e, resyncEnabledConfig, recoveryValueFunc) {
    const isFirstInvokedRule = this.RULE_STACK.length === 1;
    const reSyncEnabled = resyncEnabledConfig && !this.isBackTracking() && this.recoveryEnabled;
    if (isRecognitionException(e)) {
      const recogError = e;
      if (reSyncEnabled) {
        const reSyncTokType = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(reSyncTokType)) {
          recogError.resyncedTokens = this.reSyncTo(reSyncTokType);
          if (this.outputCst) {
            const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
            partialCstResult.recoveredNode = true;
            return partialCstResult;
          } else {
            return recoveryValueFunc(e);
          }
        } else {
          if (this.outputCst) {
            const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
            partialCstResult.recoveredNode = true;
            recogError.partialCstResult = partialCstResult;
          }
          throw recogError;
        }
      } else if (isFirstInvokedRule) {
        this.moveToTerminatedState();
        return recoveryValueFunc(e);
      } else {
        throw recogError;
      }
    } else {
      throw e;
    }
  }
  // Implementation of parsing DSL
  optionInternal(actionORMethodDef, occurrence) {
    const key = this.getKeyForAutomaticLookahead(OPTION_IDX, occurrence);
    return this.optionInternalLogic(actionORMethodDef, occurrence, key);
  }
  optionInternalLogic(actionORMethodDef, occurrence, key) {
    let lookAheadFunc = this.getLaFuncFromCache(key);
    let action;
    if (typeof actionORMethodDef !== "function") {
      action = actionORMethodDef.DEF;
      const predicate = actionORMethodDef.GATE;
      if (predicate !== void 0) {
        const orgLookaheadFunction = lookAheadFunc;
        lookAheadFunc = () => {
          return predicate.call(this) && orgLookaheadFunction.call(this);
        };
      }
    } else {
      action = actionORMethodDef;
    }
    if (lookAheadFunc.call(this) === true) {
      return action.call(this);
    }
    return void 0;
  }
  atLeastOneInternal(prodOccurrence, actionORMethodDef) {
    const laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_IDX, prodOccurrence);
    return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);
  }
  atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, key) {
    let lookAheadFunc = this.getLaFuncFromCache(key);
    let action;
    if (typeof actionORMethodDef !== "function") {
      action = actionORMethodDef.DEF;
      const predicate = actionORMethodDef.GATE;
      if (predicate !== void 0) {
        const orgLookaheadFunction = lookAheadFunc;
        lookAheadFunc = () => {
          return predicate.call(this) && orgLookaheadFunction.call(this);
        };
      }
    } else {
      action = actionORMethodDef;
    }
    if (lookAheadFunc.call(this) === true) {
      let notStuck = this.doSingleRepetition(action);
      while (lookAheadFunc.call(this) === true && notStuck === true) {
        notStuck = this.doSingleRepetition(action);
      }
    } else {
      throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);
    }
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [prodOccurrence, actionORMethodDef], lookAheadFunc, AT_LEAST_ONE_IDX, prodOccurrence, NextTerminalAfterAtLeastOneWalker);
  }
  atLeastOneSepFirstInternal(prodOccurrence, options) {
    const laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_SEP_IDX, prodOccurrence);
    this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
  }
  atLeastOneSepFirstInternalLogic(prodOccurrence, options, key) {
    const action = options.DEF;
    const separator = options.SEP;
    const firstIterationLookaheadFunc = this.getLaFuncFromCache(key);
    if (firstIterationLookaheadFunc.call(this) === true) {
      action.call(this);
      const separatorLookAheadFunc = () => {
        return this.tokenMatcher(this.LA(1), separator);
      };
      while (this.tokenMatcher(this.LA(1), separator) === true) {
        this.CONSUME(separator);
        action.call(this);
      }
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        prodOccurrence,
        separator,
        separatorLookAheadFunc,
        action,
        NextTerminalAfterAtLeastOneSepWalker
      ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, NextTerminalAfterAtLeastOneSepWalker);
    } else {
      throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);
    }
  }
  manyInternal(prodOccurrence, actionORMethodDef) {
    const laKey = this.getKeyForAutomaticLookahead(MANY_IDX, prodOccurrence);
    return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
  }
  manyInternalLogic(prodOccurrence, actionORMethodDef, key) {
    let lookaheadFunction = this.getLaFuncFromCache(key);
    let action;
    if (typeof actionORMethodDef !== "function") {
      action = actionORMethodDef.DEF;
      const predicate = actionORMethodDef.GATE;
      if (predicate !== void 0) {
        const orgLookaheadFunction = lookaheadFunction;
        lookaheadFunction = () => {
          return predicate.call(this) && orgLookaheadFunction.call(this);
        };
      }
    } else {
      action = actionORMethodDef;
    }
    let notStuck = true;
    while (lookaheadFunction.call(this) === true && notStuck === true) {
      notStuck = this.doSingleRepetition(action);
    }
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [prodOccurrence, actionORMethodDef],
      lookaheadFunction,
      MANY_IDX,
      prodOccurrence,
      NextTerminalAfterManyWalker,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      notStuck
    );
  }
  manySepFirstInternal(prodOccurrence, options) {
    const laKey = this.getKeyForAutomaticLookahead(MANY_SEP_IDX, prodOccurrence);
    this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
  }
  manySepFirstInternalLogic(prodOccurrence, options, key) {
    const action = options.DEF;
    const separator = options.SEP;
    const firstIterationLaFunc = this.getLaFuncFromCache(key);
    if (firstIterationLaFunc.call(this) === true) {
      action.call(this);
      const separatorLookAheadFunc = () => {
        return this.tokenMatcher(this.LA(1), separator);
      };
      while (this.tokenMatcher(this.LA(1), separator) === true) {
        this.CONSUME(separator);
        action.call(this);
      }
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        prodOccurrence,
        separator,
        separatorLookAheadFunc,
        action,
        NextTerminalAfterManySepWalker
      ], separatorLookAheadFunc, MANY_SEP_IDX, prodOccurrence, NextTerminalAfterManySepWalker);
    }
  }
  repetitionSepSecondInternal(prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {
    while (separatorLookAheadFunc()) {
      this.CONSUME(separator);
      action.call(this);
    }
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      prodOccurrence,
      separator,
      separatorLookAheadFunc,
      action,
      nextTerminalAfterWalker
    ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, nextTerminalAfterWalker);
  }
  doSingleRepetition(action) {
    const beforeIteration = this.getLexerPosition();
    action.call(this);
    const afterIteration = this.getLexerPosition();
    return afterIteration > beforeIteration;
  }
  orInternal(altsOrOpts, occurrence) {
    const laKey = this.getKeyForAutomaticLookahead(OR_IDX, occurrence);
    const alts = isArray_default(altsOrOpts) ? altsOrOpts : altsOrOpts.DEF;
    const laFunc = this.getLaFuncFromCache(laKey);
    const altIdxToTake = laFunc.call(this, alts);
    if (altIdxToTake !== void 0) {
      const chosenAlternative = alts[altIdxToTake];
      return chosenAlternative.ALT.call(this);
    }
    this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    this.RULE_STACK.pop();
    this.RULE_OCCURRENCE_STACK.pop();
    this.cstFinallyStateUpdate();
    if (this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
      const firstRedundantTok = this.LA(1);
      const errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: firstRedundantTok,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new NotAllInputParsedException(errMsg, firstRedundantTok));
    }
  }
  subruleInternal(ruleToCall, idx, options) {
    let ruleResult;
    try {
      const args = options !== void 0 ? options.ARGS : void 0;
      this.subruleIdx = idx;
      ruleResult = ruleToCall.apply(this, args);
      this.cstPostNonTerminal(ruleResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleToCall.ruleName);
      return ruleResult;
    } catch (e) {
      throw this.subruleInternalError(e, options, ruleToCall.ruleName);
    }
  }
  subruleInternalError(e, options, ruleName) {
    if (isRecognitionException(e) && e.partialCstResult !== void 0) {
      this.cstPostNonTerminal(e.partialCstResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleName);
      delete e.partialCstResult;
    }
    throw e;
  }
  consumeInternal(tokType, idx, options) {
    let consumedToken;
    try {
      const nextToken = this.LA(1);
      if (this.tokenMatcher(nextToken, tokType) === true) {
        this.consumeToken();
        consumedToken = nextToken;
      } else {
        this.consumeInternalError(tokType, nextToken, options);
      }
    } catch (eFromConsumption) {
      consumedToken = this.consumeInternalRecovery(tokType, idx, eFromConsumption);
    }
    this.cstPostTerminal(options !== void 0 && options.LABEL !== void 0 ? options.LABEL : tokType.name, consumedToken);
    return consumedToken;
  }
  consumeInternalError(tokType, nextToken, options) {
    let msg;
    const previousToken = this.LA(0);
    if (options !== void 0 && options.ERR_MSG) {
      msg = options.ERR_MSG;
    } else {
      msg = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: tokType,
        actual: nextToken,
        previous: previousToken,
        ruleName: this.getCurrRuleFullName()
      });
    }
    throw this.SAVE_ERROR(new MismatchedTokenException(msg, nextToken, previousToken));
  }
  consumeInternalRecovery(tokType, idx, eFromConsumption) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    eFromConsumption.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const follows = this.getFollowsForInRuleRecovery(tokType, idx);
      try {
        return this.tryInRuleRecovery(tokType, follows);
      } catch (eFromInRuleRecovery) {
        if (eFromInRuleRecovery.name === IN_RULE_RECOVERY_EXCEPTION) {
          throw eFromConsumption;
        } else {
          throw eFromInRuleRecovery;
        }
      }
    } else {
      throw eFromConsumption;
    }
  }
  saveRecogState() {
    const savedErrors = this.errors;
    const savedRuleStack = clone_default(this.RULE_STACK);
    return {
      errors: savedErrors,
      lexerState: this.exportLexerState(),
      RULE_STACK: savedRuleStack,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(newState2) {
    this.errors = newState2.errors;
    this.importLexerState(newState2.lexerState);
    this.RULE_STACK = newState2.RULE_STACK;
  }
  ruleInvocationStateUpdate(shortName, fullName, idxInCallingRule) {
    this.RULE_OCCURRENCE_STACK.push(idxInCallingRule);
    this.RULE_STACK.push(shortName);
    this.cstInvocationStateUpdate(fullName);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const shortName = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[shortName];
  }
  shortRuleNameToFullName(shortName) {
    return this.shortRuleNameToFull[shortName];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), EOF);
  }
  reset() {
    this.resetLexerState();
    this.subruleIdx = 0;
    this.isBackTrackingStack = [];
    this.errors = [];
    this.RULE_STACK = [];
    this.CST_STACK = [];
    this.RULE_OCCURRENCE_STACK = [];
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js
var ErrorHandler = class {
  initErrorHandler(config) {
    this._errors = [];
    this.errorMessageProvider = has_default(config, "errorMessageProvider") ? config.errorMessageProvider : DEFAULT_PARSER_CONFIG.errorMessageProvider;
  }
  SAVE_ERROR(error) {
    if (isRecognitionException(error)) {
      error.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: clone_default(this.RULE_OCCURRENCE_STACK)
      };
      this._errors.push(error);
      return error;
    } else {
      throw Error("Trying to save an Error which is not a RecognitionException");
    }
  }
  get errors() {
    return clone_default(this._errors);
  }
  set errors(newErrors) {
    this._errors = newErrors;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(occurrence, prodType, userDefinedErrMsg) {
    const ruleName = this.getCurrRuleFullName();
    const ruleGrammar = this.getGAstProductions()[ruleName];
    const lookAheadPathsPerAlternative = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, this.maxLookahead);
    const insideProdPaths = lookAheadPathsPerAlternative[0];
    const actualTokens = [];
    for (let i = 1; i <= this.maxLookahead; i++) {
      actualTokens.push(this.LA(i));
    }
    const msg = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: insideProdPaths,
      actual: actualTokens,
      previous: this.LA(0),
      customUserDescription: userDefinedErrMsg,
      ruleName
    });
    throw this.SAVE_ERROR(new EarlyExitException(msg, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(occurrence, errMsgTypes) {
    const ruleName = this.getCurrRuleFullName();
    const ruleGrammar = this.getGAstProductions()[ruleName];
    const lookAheadPathsPerAlternative = getLookaheadPathsForOr(occurrence, ruleGrammar, this.maxLookahead);
    const actualTokens = [];
    for (let i = 1; i <= this.maxLookahead; i++) {
      actualTokens.push(this.LA(i));
    }
    const previousToken = this.LA(0);
    const errMsg = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: lookAheadPathsPerAlternative,
      actual: actualTokens,
      previous: previousToken,
      customUserDescription: errMsgTypes,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new NoViableAltException(errMsg, this.LA(1), previousToken));
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js
var ContentAssist = class {
  initContentAssist() {
  }
  computeContentAssist(startRuleName, precedingInput) {
    const startRuleGast = this.gastProductionsCache[startRuleName];
    if (isUndefined_default(startRuleGast)) {
      throw Error(`Rule ->${startRuleName}<- does not exist in this grammar.`);
    }
    return nextPossibleTokensAfter([startRuleGast], precedingInput, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(grammarPath) {
    const topRuleName = head_default(grammarPath.ruleStack);
    const gastProductions = this.getGAstProductions();
    const topProduction = gastProductions[topRuleName];
    const nextPossibleTokenTypes = new NextAfterTokenWalker(topProduction, grammarPath).startWalking();
    return nextPossibleTokenTypes;
  }
};

// node_modules/chevrotain/lib/src/parse/parser/traits/gast_recorder.js
var RECORDING_NULL_OBJECT = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(RECORDING_NULL_OBJECT);
var HANDLE_SEPARATOR = true;
var MAX_METHOD_IDX = Math.pow(2, BITS_FOR_OCCURRENCE_IDX) - 1;
var RFT = createToken({ name: "RECORDING_PHASE_TOKEN", pattern: Lexer.NA });
augmentTokenTypes([RFT]);
var RECORDING_PHASE_TOKEN = createTokenInstance(
  RFT,
  "This IToken indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(RECORDING_PHASE_TOKEN);
var RECORDING_PHASE_CSTNODE = {
  name: "This CSTNode indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
  children: {}
};
var GastRecorder = class {
  initGastRecorder(config) {
    this.recordingProdStack = [];
    this.RECORDING_PHASE = false;
  }
  enableRecording() {
    this.RECORDING_PHASE = true;
    this.TRACE_INIT("Enable Recording", () => {
      for (let i = 0; i < 10; i++) {
        const idx = i > 0 ? i : "";
        this[`CONSUME${idx}`] = function(arg1, arg2) {
          return this.consumeInternalRecord(arg1, i, arg2);
        };
        this[`SUBRULE${idx}`] = function(arg1, arg2) {
          return this.subruleInternalRecord(arg1, i, arg2);
        };
        this[`OPTION${idx}`] = function(arg1) {
          return this.optionInternalRecord(arg1, i);
        };
        this[`OR${idx}`] = function(arg1) {
          return this.orInternalRecord(arg1, i);
        };
        this[`MANY${idx}`] = function(arg1) {
          this.manyInternalRecord(i, arg1);
        };
        this[`MANY_SEP${idx}`] = function(arg1) {
          this.manySepFirstInternalRecord(i, arg1);
        };
        this[`AT_LEAST_ONE${idx}`] = function(arg1) {
          this.atLeastOneInternalRecord(i, arg1);
        };
        this[`AT_LEAST_ONE_SEP${idx}`] = function(arg1) {
          this.atLeastOneSepFirstInternalRecord(i, arg1);
        };
      }
      this[`consume`] = function(idx, arg1, arg2) {
        return this.consumeInternalRecord(arg1, idx, arg2);
      };
      this[`subrule`] = function(idx, arg1, arg2) {
        return this.subruleInternalRecord(arg1, idx, arg2);
      };
      this[`option`] = function(idx, arg1) {
        return this.optionInternalRecord(arg1, idx);
      };
      this[`or`] = function(idx, arg1) {
        return this.orInternalRecord(arg1, idx);
      };
      this[`many`] = function(idx, arg1) {
        this.manyInternalRecord(idx, arg1);
      };
      this[`atLeastOne`] = function(idx, arg1) {
        this.atLeastOneInternalRecord(idx, arg1);
      };
      this.ACTION = this.ACTION_RECORD;
      this.BACKTRACK = this.BACKTRACK_RECORD;
      this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = false;
    this.TRACE_INIT("Deleting Recording methods", () => {
      const that = this;
      for (let i = 0; i < 10; i++) {
        const idx = i > 0 ? i : "";
        delete that[`CONSUME${idx}`];
        delete that[`SUBRULE${idx}`];
        delete that[`OPTION${idx}`];
        delete that[`OR${idx}`];
        delete that[`MANY${idx}`];
        delete that[`MANY_SEP${idx}`];
        delete that[`AT_LEAST_ONE${idx}`];
        delete that[`AT_LEAST_ONE_SEP${idx}`];
      }
      delete that[`consume`];
      delete that[`subrule`];
      delete that[`option`];
      delete that[`or`];
      delete that[`many`];
      delete that[`atLeastOne`];
      delete that.ACTION;
      delete that.BACKTRACK;
      delete that.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(impl) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(grammarRule, args) {
    return () => true;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(howMuch) {
    return END_OF_FILE;
  }
  topLevelRuleRecord(name, def) {
    try {
      const newTopLevelRule = new Rule({ definition: [], name });
      newTopLevelRule.name = name;
      this.recordingProdStack.push(newTopLevelRule);
      def.call(this);
      this.recordingProdStack.pop();
      return newTopLevelRule;
    } catch (originalError) {
      if (originalError.KNOWN_RECORDER_ERROR !== true) {
        try {
          originalError.message = originalError.message + '\n	 This error was thrown during the "grammar recording phase" For more info see:\n	https://chevrotain.io/docs/guide/internals.html#grammar-recording';
        } catch (mutabilityError) {
          throw originalError;
        }
      }
      throw originalError;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(actionORMethodDef, occurrence) {
    return recordProd.call(this, Option, actionORMethodDef, occurrence);
  }
  atLeastOneInternalRecord(occurrence, actionORMethodDef) {
    recordProd.call(this, RepetitionMandatory, actionORMethodDef, occurrence);
  }
  atLeastOneSepFirstInternalRecord(occurrence, options) {
    recordProd.call(this, RepetitionMandatoryWithSeparator, options, occurrence, HANDLE_SEPARATOR);
  }
  manyInternalRecord(occurrence, actionORMethodDef) {
    recordProd.call(this, Repetition, actionORMethodDef, occurrence);
  }
  manySepFirstInternalRecord(occurrence, options) {
    recordProd.call(this, RepetitionWithSeparator, options, occurrence, HANDLE_SEPARATOR);
  }
  orInternalRecord(altsOrOpts, occurrence) {
    return recordOrProd.call(this, altsOrOpts, occurrence);
  }
  subruleInternalRecord(ruleToCall, occurrence, options) {
    assertMethodIdxIsValid(occurrence);
    if (!ruleToCall || has_default(ruleToCall, "ruleName") === false) {
      const error = new Error(`<SUBRULE${getIdxSuffix(occurrence)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(ruleToCall)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      error.KNOWN_RECORDER_ERROR = true;
      throw error;
    }
    const prevProd = last_default(this.recordingProdStack);
    const ruleName = ruleToCall.ruleName;
    const newNoneTerminal = new NonTerminal({
      idx: occurrence,
      nonTerminalName: ruleName,
      label: options === null || options === void 0 ? void 0 : options.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    prevProd.definition.push(newNoneTerminal);
    return this.outputCst ? RECORDING_PHASE_CSTNODE : RECORDING_NULL_OBJECT;
  }
  consumeInternalRecord(tokType, occurrence, options) {
    assertMethodIdxIsValid(occurrence);
    if (!hasShortKeyProperty(tokType)) {
      const error = new Error(`<CONSUME${getIdxSuffix(occurrence)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(tokType)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      error.KNOWN_RECORDER_ERROR = true;
      throw error;
    }
    const prevProd = last_default(this.recordingProdStack);
    const newNoneTerminal = new Terminal({
      idx: occurrence,
      terminalType: tokType,
      label: options === null || options === void 0 ? void 0 : options.LABEL
    });
    prevProd.definition.push(newNoneTerminal);
    return RECORDING_PHASE_TOKEN;
  }
};
function recordProd(prodConstructor, mainProdArg, occurrence, handleSep = false) {
  assertMethodIdxIsValid(occurrence);
  const prevProd = last_default(this.recordingProdStack);
  const grammarAction = isFunction_default(mainProdArg) ? mainProdArg : mainProdArg.DEF;
  const newProd = new prodConstructor({ definition: [], idx: occurrence });
  if (handleSep) {
    newProd.separator = mainProdArg.SEP;
  }
  if (has_default(mainProdArg, "MAX_LOOKAHEAD")) {
    newProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
  }
  this.recordingProdStack.push(newProd);
  grammarAction.call(this);
  prevProd.definition.push(newProd);
  this.recordingProdStack.pop();
  return RECORDING_NULL_OBJECT;
}
function recordOrProd(mainProdArg, occurrence) {
  assertMethodIdxIsValid(occurrence);
  const prevProd = last_default(this.recordingProdStack);
  const hasOptions = isArray_default(mainProdArg) === false;
  const alts = hasOptions === false ? mainProdArg : mainProdArg.DEF;
  const newOrProd = new Alternation({
    definition: [],
    idx: occurrence,
    ignoreAmbiguities: hasOptions && mainProdArg.IGNORE_AMBIGUITIES === true
  });
  if (has_default(mainProdArg, "MAX_LOOKAHEAD")) {
    newOrProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
  }
  const hasPredicates = some_default(alts, (currAlt) => isFunction_default(currAlt.GATE));
  newOrProd.hasPredicates = hasPredicates;
  prevProd.definition.push(newOrProd);
  forEach_default(alts, (currAlt) => {
    const currAltFlat = new Alternative({ definition: [] });
    newOrProd.definition.push(currAltFlat);
    if (has_default(currAlt, "IGNORE_AMBIGUITIES")) {
      currAltFlat.ignoreAmbiguities = currAlt.IGNORE_AMBIGUITIES;
    } else if (has_default(currAlt, "GATE")) {
      currAltFlat.ignoreAmbiguities = true;
    }
    this.recordingProdStack.push(currAltFlat);
    currAlt.ALT.call(this);
    this.recordingProdStack.pop();
  });
  return RECORDING_NULL_OBJECT;
}
function getIdxSuffix(idx) {
  return idx === 0 ? "" : `${idx}`;
}
function assertMethodIdxIsValid(idx) {
  if (idx < 0 || idx > MAX_METHOD_IDX) {
    const error = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${idx}>
	Idx value must be a none negative value smaller than ${MAX_METHOD_IDX + 1}`
    );
    error.KNOWN_RECORDER_ERROR = true;
    throw error;
  }
}

// node_modules/chevrotain/lib/src/parse/parser/traits/perf_tracer.js
var PerformanceTracer = class {
  initPerformanceTracer(config) {
    if (has_default(config, "traceInitPerf")) {
      const userTraceInitPerf = config.traceInitPerf;
      const traceIsNumber = typeof userTraceInitPerf === "number";
      this.traceInitMaxIdent = traceIsNumber ? userTraceInitPerf : Infinity;
      this.traceInitPerf = traceIsNumber ? userTraceInitPerf > 0 : userTraceInitPerf;
    } else {
      this.traceInitMaxIdent = 0;
      this.traceInitPerf = DEFAULT_PARSER_CONFIG.traceInitPerf;
    }
    this.traceInitIndent = -1;
  }
  TRACE_INIT(phaseDesc, phaseImpl) {
    if (this.traceInitPerf === true) {
      this.traceInitIndent++;
      const indent = new Array(this.traceInitIndent + 1).join("	");
      if (this.traceInitIndent < this.traceInitMaxIdent) {
        console.log(`${indent}--> <${phaseDesc}>`);
      }
      const { time, value } = timer(phaseImpl);
      const traceMethod = time > 10 ? console.warn : console.log;
      if (this.traceInitIndent < this.traceInitMaxIdent) {
        traceMethod(`${indent}<-- <${phaseDesc}> time: ${time}ms`);
      }
      this.traceInitIndent--;
      return value;
    } else {
      return phaseImpl();
    }
  }
};

// node_modules/chevrotain/lib/src/parse/parser/utils/apply_mixins.js
function applyMixins(derivedCtor, baseCtors) {
  baseCtors.forEach((baseCtor) => {
    const baseProto = baseCtor.prototype;
    Object.getOwnPropertyNames(baseProto).forEach((propName) => {
      if (propName === "constructor") {
        return;
      }
      const basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);
      if (basePropDescriptor && (basePropDescriptor.get || basePropDescriptor.set)) {
        Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor);
      } else {
        derivedCtor.prototype[propName] = baseCtor.prototype[propName];
      }
    });
  });
}

// node_modules/chevrotain/lib/src/parse/parser/parser.js
var END_OF_FILE = createTokenInstance(EOF, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(END_OF_FILE);
var DEFAULT_PARSER_CONFIG = Object.freeze({
  recoveryEnabled: false,
  maxLookahead: 3,
  dynamicTokensEnabled: false,
  outputCst: true,
  errorMessageProvider: defaultParserErrorProvider,
  nodeLocationTracking: "none",
  traceInitPerf: false,
  skipValidations: false
});
var DEFAULT_RULE_CONFIG = Object.freeze({
  recoveryValueFunc: () => void 0,
  resyncEnabled: true
});
var ParserDefinitionErrorType;
(function(ParserDefinitionErrorType2) {
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_RULE_NAME"] = 0] = "INVALID_RULE_NAME";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["DUPLICATE_RULE_NAME"] = 1] = "DUPLICATE_RULE_NAME";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_RULE_OVERRIDE"] = 2] = "INVALID_RULE_OVERRIDE";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["DUPLICATE_PRODUCTIONS"] = 3] = "DUPLICATE_PRODUCTIONS";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["UNRESOLVED_SUBRULE_REF"] = 4] = "UNRESOLVED_SUBRULE_REF";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["LEFT_RECURSION"] = 5] = "LEFT_RECURSION";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["NONE_LAST_EMPTY_ALT"] = 6] = "NONE_LAST_EMPTY_ALT";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["AMBIGUOUS_ALTS"] = 7] = "AMBIGUOUS_ALTS";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["CONFLICT_TOKENS_RULES_NAMESPACE"] = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_TOKEN_NAME"] = 9] = "INVALID_TOKEN_NAME";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["NO_NON_EMPTY_LOOKAHEAD"] = 10] = "NO_NON_EMPTY_LOOKAHEAD";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["AMBIGUOUS_PREFIX_ALTS"] = 11] = "AMBIGUOUS_PREFIX_ALTS";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["TOO_MANY_ALTS"] = 12] = "TOO_MANY_ALTS";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["CUSTOM_LOOKAHEAD_VALIDATION"] = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ParserDefinitionErrorType || (ParserDefinitionErrorType = {}));
var Parser = class _Parser {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(parserInstance) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let defErrorsMsgs;
      this.selfAnalysisDone = true;
      const className = this.className;
      this.TRACE_INIT("toFastProps", () => {
        toFastProperties(this);
      });
      this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording();
          forEach_default(this.definedRulesNames, (currRuleName) => {
            const wrappedRule = this[currRuleName];
            const originalGrammarAction = wrappedRule["originalGrammarAction"];
            let recordedRuleGast;
            this.TRACE_INIT(`${currRuleName} Rule`, () => {
              recordedRuleGast = this.topLevelRuleRecord(currRuleName, originalGrammarAction);
            });
            this.gastProductionsCache[currRuleName] = recordedRuleGast;
          });
        } finally {
          this.disableRecording();
        }
      });
      let resolverErrors = [];
      this.TRACE_INIT("Grammar Resolving", () => {
        resolverErrors = resolveGrammar2({
          rules: values_default(this.gastProductionsCache)
        });
        this.definitionErrors = this.definitionErrors.concat(resolverErrors);
      });
      this.TRACE_INIT("Grammar Validations", () => {
        if (isEmpty_default(resolverErrors) && this.skipValidations === false) {
          const validationErrors = validateGrammar2({
            rules: values_default(this.gastProductionsCache),
            tokenTypes: values_default(this.tokensMap),
            errMsgProvider: defaultGrammarValidatorErrorProvider,
            grammarName: className
          });
          const lookaheadValidationErrors = validateLookahead({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: values_default(this.gastProductionsCache),
            tokenTypes: values_default(this.tokensMap),
            grammarName: className
          });
          this.definitionErrors = this.definitionErrors.concat(validationErrors, lookaheadValidationErrors);
        }
      });
      if (isEmpty_default(this.definitionErrors)) {
        if (this.recoveryEnabled) {
          this.TRACE_INIT("computeAllProdsFollows", () => {
            const allFollows = computeAllProdsFollows(values_default(this.gastProductionsCache));
            this.resyncFollows = allFollows;
          });
        }
        this.TRACE_INIT("ComputeLookaheadFunctions", () => {
          var _a, _b;
          (_b = (_a = this.lookaheadStrategy).initialize) === null || _b === void 0 ? void 0 : _b.call(_a, {
            rules: values_default(this.gastProductionsCache)
          });
          this.preComputeLookaheadFunctions(values_default(this.gastProductionsCache));
        });
      }
      if (!_Parser.DEFER_DEFINITION_ERRORS_HANDLING && !isEmpty_default(this.definitionErrors)) {
        defErrorsMsgs = map_default(this.definitionErrors, (defError) => defError.message);
        throw new Error(`Parser Definition Errors detected:
 ${defErrorsMsgs.join("\n-------------------------------\n")}`);
      }
    });
  }
  constructor(tokenVocabulary, config) {
    this.definitionErrors = [];
    this.selfAnalysisDone = false;
    const that = this;
    that.initErrorHandler(config);
    that.initLexerAdapter();
    that.initLooksAhead(config);
    that.initRecognizerEngine(tokenVocabulary, config);
    that.initRecoverable(config);
    that.initTreeBuilder(config);
    that.initContentAssist();
    that.initGastRecorder(config);
    that.initPerformanceTracer(config);
    if (has_default(config, "ignoredIssues")) {
      throw new Error("The <ignoredIssues> IParserConfig property has been deprecated.\n	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n	For further details.");
    }
    this.skipValidations = has_default(config, "skipValidations") ? config.skipValidations : DEFAULT_PARSER_CONFIG.skipValidations;
  }
};
Parser.DEFER_DEFINITION_ERRORS_HANDLING = false;
applyMixins(Parser, [
  Recoverable,
  LooksAhead,
  TreeBuilder,
  LexerAdapter,
  RecognizerEngine,
  RecognizerApi,
  ErrorHandler,
  ContentAssist,
  GastRecorder,
  PerformanceTracer
]);
var CstParser = class extends Parser {
  constructor(tokenVocabulary, config = DEFAULT_PARSER_CONFIG) {
    const configClone = clone_default(config);
    configClone.outputCst = true;
    super(tokenVocabulary, configClone);
  }
};

// node_modules/java-parser/src/tokens.js
var import_camelCase = __toESM(require_camelCase(), 1);

// node_modules/java-parser/src/unicodesets.js
var addRanges = (set, rangesArr) => {
  for (let i = 0; i < rangesArr.length; i++) {
    const range = rangesArr[i];
    const start = range[0];
    const end = range[1];
    for (let codePoint = start; codePoint <= end; codePoint++) {
      set.add(codePoint);
    }
  }
};
var fic = /* @__PURE__ */ new Set([
  181,
  257,
  259,
  261,
  263,
  265,
  267,
  269,
  271,
  273,
  275,
  277,
  279,
  281,
  283,
  285,
  287,
  289,
  291,
  293,
  295,
  297,
  299,
  301,
  303,
  305,
  307,
  309,
  314,
  316,
  318,
  320,
  322,
  324,
  326,
  331,
  333,
  335,
  337,
  339,
  341,
  343,
  345,
  347,
  349,
  351,
  353,
  355,
  357,
  359,
  361,
  363,
  365,
  367,
  369,
  371,
  373,
  375,
  378,
  380,
  387,
  389,
  392,
  402,
  405,
  414,
  417,
  419,
  421,
  424,
  429,
  432,
  436,
  438,
  454,
  457,
  460,
  462,
  464,
  466,
  468,
  470,
  472,
  474,
  479,
  481,
  483,
  485,
  487,
  489,
  491,
  493,
  499,
  501,
  505,
  507,
  509,
  511,
  513,
  515,
  517,
  519,
  521,
  523,
  525,
  527,
  529,
  531,
  533,
  535,
  537,
  539,
  541,
  543,
  545,
  547,
  549,
  551,
  553,
  555,
  557,
  559,
  561,
  572,
  578,
  583,
  585,
  587,
  589,
  881,
  883,
  887,
  912,
  985,
  987,
  989,
  991,
  993,
  995,
  997,
  999,
  1001,
  1003,
  1005,
  1013,
  1016,
  1121,
  1123,
  1125,
  1127,
  1129,
  1131,
  1133,
  1135,
  1137,
  1139,
  1141,
  1143,
  1145,
  1147,
  1149,
  1151,
  1153,
  1163,
  1165,
  1167,
  1169,
  1171,
  1173,
  1175,
  1177,
  1179,
  1181,
  1183,
  1185,
  1187,
  1189,
  1191,
  1193,
  1195,
  1197,
  1199,
  1201,
  1203,
  1205,
  1207,
  1209,
  1211,
  1213,
  1215,
  1218,
  1220,
  1222,
  1224,
  1226,
  1228,
  1233,
  1235,
  1237,
  1239,
  1241,
  1243,
  1245,
  1247,
  1249,
  1251,
  1253,
  1255,
  1257,
  1259,
  1261,
  1263,
  1265,
  1267,
  1269,
  1271,
  1273,
  1275,
  1277,
  1279,
  1281,
  1283,
  1285,
  1287,
  1289,
  1291,
  1293,
  1295,
  1297,
  1299,
  1301,
  1303,
  1305,
  1307,
  1309,
  1311,
  1313,
  1315,
  1317,
  1319,
  1321,
  1323,
  1325,
  1327,
  7681,
  7683,
  7685,
  7687,
  7689,
  7691,
  7693,
  7695,
  7697,
  7699,
  7701,
  7703,
  7705,
  7707,
  7709,
  7711,
  7713,
  7715,
  7717,
  7719,
  7721,
  7723,
  7725,
  7727,
  7729,
  7731,
  7733,
  7735,
  7737,
  7739,
  7741,
  7743,
  7745,
  7747,
  7749,
  7751,
  7753,
  7755,
  7757,
  7759,
  7761,
  7763,
  7765,
  7767,
  7769,
  7771,
  7773,
  7775,
  7777,
  7779,
  7781,
  7783,
  7785,
  7787,
  7789,
  7791,
  7793,
  7795,
  7797,
  7799,
  7801,
  7803,
  7805,
  7807,
  7809,
  7811,
  7813,
  7815,
  7817,
  7819,
  7821,
  7823,
  7825,
  7827,
  7839,
  7841,
  7843,
  7845,
  7847,
  7849,
  7851,
  7853,
  7855,
  7857,
  7859,
  7861,
  7863,
  7865,
  7867,
  7869,
  7871,
  7873,
  7875,
  7877,
  7879,
  7881,
  7883,
  7885,
  7887,
  7889,
  7891,
  7893,
  7895,
  7897,
  7899,
  7901,
  7903,
  7905,
  7907,
  7909,
  7911,
  7913,
  7915,
  7917,
  7919,
  7921,
  7923,
  7925,
  7927,
  7929,
  7931,
  7933,
  8126,
  8458,
  8467,
  8495,
  8500,
  8505,
  8526,
  8580,
  11361,
  11368,
  11370,
  11372,
  11377,
  11393,
  11395,
  11397,
  11399,
  11401,
  11403,
  11405,
  11407,
  11409,
  11411,
  11413,
  11415,
  11417,
  11419,
  11421,
  11423,
  11425,
  11427,
  11429,
  11431,
  11433,
  11435,
  11437,
  11439,
  11441,
  11443,
  11445,
  11447,
  11449,
  11451,
  11453,
  11455,
  11457,
  11459,
  11461,
  11463,
  11465,
  11467,
  11469,
  11471,
  11473,
  11475,
  11477,
  11479,
  11481,
  11483,
  11485,
  11487,
  11489,
  11500,
  11502,
  11507,
  11559,
  11565,
  42561,
  42563,
  42565,
  42567,
  42569,
  42571,
  42573,
  42575,
  42577,
  42579,
  42581,
  42583,
  42585,
  42587,
  42589,
  42591,
  42593,
  42595,
  42597,
  42599,
  42601,
  42603,
  42605,
  42625,
  42627,
  42629,
  42631,
  42633,
  42635,
  42637,
  42639,
  42641,
  42643,
  42645,
  42647,
  42649,
  42651,
  42787,
  42789,
  42791,
  42793,
  42795,
  42797,
  42803,
  42805,
  42807,
  42809,
  42811,
  42813,
  42815,
  42817,
  42819,
  42821,
  42823,
  42825,
  42827,
  42829,
  42831,
  42833,
  42835,
  42837,
  42839,
  42841,
  42843,
  42845,
  42847,
  42849,
  42851,
  42853,
  42855,
  42857,
  42859,
  42861,
  42863,
  42874,
  42876,
  42879,
  42881,
  42883,
  42885,
  42887,
  42892,
  42894,
  42897,
  42903,
  42905,
  42907,
  42909,
  42911,
  42913,
  42915,
  42917,
  42919,
  42921,
  42927,
  42933,
  42935,
  42937,
  42939,
  42941,
  42943,
  42947,
  43002,
  119995,
  120779,
  748,
  750,
  884,
  890,
  1369,
  1600,
  2042,
  2074,
  2084,
  2088,
  2417,
  3654,
  3782,
  4348,
  6103,
  6211,
  6823,
  7544,
  8305,
  8319,
  11631,
  11823,
  12293,
  12347,
  40981,
  42508,
  42623,
  42864,
  42888,
  43471,
  43494,
  43632,
  43741,
  65392,
  94179,
  125259,
  170,
  186,
  443,
  660,
  1749,
  1791,
  1808,
  1969,
  2365,
  2384,
  2482,
  2493,
  2510,
  2556,
  2654,
  2749,
  2768,
  2809,
  2877,
  2929,
  2947,
  2972,
  3024,
  3133,
  3200,
  3261,
  3294,
  3389,
  3406,
  3517,
  3716,
  3749,
  3773,
  3840,
  4159,
  4193,
  4238,
  4696,
  4800,
  6108,
  6314,
  7418,
  12294,
  12348,
  12447,
  12543,
  13312,
  19968,
  42606,
  42895,
  42999,
  43259,
  43642,
  43697,
  43712,
  43714,
  43762,
  44032,
  64285,
  64318,
  67592,
  67644,
  68096,
  69415,
  69956,
  70006,
  70106,
  70108,
  70280,
  70461,
  70480,
  70751,
  70855,
  71236,
  71352,
  71935,
  72161,
  72163,
  72192,
  72250,
  72272,
  72349,
  72768,
  73030,
  73112,
  94032,
  94208,
  123214,
  126500,
  126503,
  126521,
  126523,
  126530,
  126535,
  126537,
  126539,
  126548,
  126551,
  126553,
  126555,
  126557,
  126559,
  126564,
  126590,
  131072,
  173824,
  177984,
  178208,
  183984,
  453,
  456,
  459,
  498,
  8124,
  8140,
  8188,
  256,
  258,
  260,
  262,
  264,
  266,
  268,
  270,
  272,
  274,
  276,
  278,
  280,
  282,
  284,
  286,
  288,
  290,
  292,
  294,
  296,
  298,
  300,
  302,
  304,
  306,
  308,
  310,
  313,
  315,
  317,
  319,
  321,
  323,
  325,
  327,
  330,
  332,
  334,
  336,
  338,
  340,
  342,
  344,
  346,
  348,
  350,
  352,
  354,
  356,
  358,
  360,
  362,
  364,
  366,
  368,
  370,
  372,
  374,
  379,
  381,
  388,
  418,
  420,
  425,
  428,
  437,
  444,
  452,
  455,
  458,
  461,
  463,
  465,
  467,
  469,
  471,
  473,
  475,
  478,
  480,
  482,
  484,
  486,
  488,
  490,
  492,
  494,
  497,
  500,
  506,
  508,
  510,
  512,
  514,
  516,
  518,
  520,
  522,
  524,
  526,
  528,
  530,
  532,
  534,
  536,
  538,
  540,
  542,
  544,
  546,
  548,
  550,
  552,
  554,
  556,
  558,
  560,
  562,
  577,
  584,
  586,
  588,
  590,
  880,
  882,
  886,
  895,
  902,
  908,
  975,
  984,
  986,
  988,
  990,
  992,
  994,
  996,
  998,
  1e3,
  1002,
  1004,
  1006,
  1012,
  1015,
  1120,
  1122,
  1124,
  1126,
  1128,
  1130,
  1132,
  1134,
  1136,
  1138,
  1140,
  1142,
  1144,
  1146,
  1148,
  1150,
  1152,
  1162,
  1164,
  1166,
  1168,
  1170,
  1172,
  1174,
  1176,
  1178,
  1180,
  1182,
  1184,
  1186,
  1188,
  1190,
  1192,
  1194,
  1196,
  1198,
  1200,
  1202,
  1204,
  1206,
  1208,
  1210,
  1212,
  1214,
  1219,
  1221,
  1223,
  1225,
  1227,
  1229,
  1232,
  1234,
  1236,
  1238,
  1240,
  1242,
  1244,
  1246,
  1248,
  1250,
  1252,
  1254,
  1256,
  1258,
  1260,
  1262,
  1264,
  1266,
  1268,
  1270,
  1272,
  1274,
  1276,
  1278,
  1280,
  1282,
  1284,
  1286,
  1288,
  1290,
  1292,
  1294,
  1296,
  1298,
  1300,
  1302,
  1304,
  1306,
  1308,
  1310,
  1312,
  1314,
  1316,
  1318,
  1320,
  1322,
  1324,
  1326,
  4295,
  4301,
  7680,
  7682,
  7684,
  7686,
  7688,
  7690,
  7692,
  7694,
  7696,
  7698,
  7700,
  7702,
  7704,
  7706,
  7708,
  7710,
  7712,
  7714,
  7716,
  7718,
  7720,
  7722,
  7724,
  7726,
  7728,
  7730,
  7732,
  7734,
  7736,
  7738,
  7740,
  7742,
  7744,
  7746,
  7748,
  7750,
  7752,
  7754,
  7756,
  7758,
  7760,
  7762,
  7764,
  7766,
  7768,
  7770,
  7772,
  7774,
  7776,
  7778,
  7780,
  7782,
  7784,
  7786,
  7788,
  7790,
  7792,
  7794,
  7796,
  7798,
  7800,
  7802,
  7804,
  7806,
  7808,
  7810,
  7812,
  7814,
  7816,
  7818,
  7820,
  7822,
  7824,
  7826,
  7828,
  7838,
  7840,
  7842,
  7844,
  7846,
  7848,
  7850,
  7852,
  7854,
  7856,
  7858,
  7860,
  7862,
  7864,
  7866,
  7868,
  7870,
  7872,
  7874,
  7876,
  7878,
  7880,
  7882,
  7884,
  7886,
  7888,
  7890,
  7892,
  7894,
  7896,
  7898,
  7900,
  7902,
  7904,
  7906,
  7908,
  7910,
  7912,
  7914,
  7916,
  7918,
  7920,
  7922,
  7924,
  7926,
  7928,
  7930,
  7932,
  7934,
  8025,
  8027,
  8029,
  8031,
  8450,
  8455,
  8469,
  8484,
  8486,
  8488,
  8517,
  8579,
  11360,
  11367,
  11369,
  11371,
  11378,
  11381,
  11394,
  11396,
  11398,
  11400,
  11402,
  11404,
  11406,
  11408,
  11410,
  11412,
  11414,
  11416,
  11418,
  11420,
  11422,
  11424,
  11426,
  11428,
  11430,
  11432,
  11434,
  11436,
  11438,
  11440,
  11442,
  11444,
  11446,
  11448,
  11450,
  11452,
  11454,
  11456,
  11458,
  11460,
  11462,
  11464,
  11466,
  11468,
  11470,
  11472,
  11474,
  11476,
  11478,
  11480,
  11482,
  11484,
  11486,
  11488,
  11490,
  11499,
  11501,
  11506,
  42560,
  42562,
  42564,
  42566,
  42568,
  42570,
  42572,
  42574,
  42576,
  42578,
  42580,
  42582,
  42584,
  42586,
  42588,
  42590,
  42592,
  42594,
  42596,
  42598,
  42600,
  42602,
  42604,
  42624,
  42626,
  42628,
  42630,
  42632,
  42634,
  42636,
  42638,
  42640,
  42642,
  42644,
  42646,
  42648,
  42650,
  42786,
  42788,
  42790,
  42792,
  42794,
  42796,
  42798,
  42802,
  42804,
  42806,
  42808,
  42810,
  42812,
  42814,
  42816,
  42818,
  42820,
  42822,
  42824,
  42826,
  42828,
  42830,
  42832,
  42834,
  42836,
  42838,
  42840,
  42842,
  42844,
  42846,
  42848,
  42850,
  42852,
  42854,
  42856,
  42858,
  42860,
  42862,
  42873,
  42875,
  42880,
  42882,
  42884,
  42886,
  42891,
  42893,
  42896,
  42898,
  42902,
  42904,
  42906,
  42908,
  42910,
  42912,
  42914,
  42916,
  42918,
  42920,
  42934,
  42936,
  42938,
  42940,
  42942,
  42946,
  119964,
  119970,
  120134,
  120778,
  12295,
  66369,
  66378,
  36,
  1423,
  1547,
  2555,
  2801,
  3065,
  3647,
  6107,
  43064,
  65020,
  65129,
  65284,
  123647,
  126128,
  95,
  8276,
  65343
]);
var fic_a = [
  [97, 122],
  [223, 246],
  [248, 255],
  [311, 312],
  [328, 329],
  [382, 384],
  [396, 397],
  [409, 411],
  [426, 427],
  [441, 442],
  [445, 447],
  [476, 477],
  [495, 496],
  [563, 569],
  [575, 576],
  [591, 659],
  [661, 687],
  [891, 893],
  [940, 974],
  [976, 977],
  [981, 983],
  [1007, 1011],
  [1019, 1020],
  [1072, 1119],
  [1230, 1231],
  [1376, 1416],
  [4304, 4346],
  [4349, 4351],
  [5112, 5117],
  [7296, 7304],
  [7424, 7467],
  [7531, 7543],
  [7545, 7578],
  [7829, 7837],
  [7935, 7943],
  [7952, 7957],
  [7968, 7975],
  [7984, 7991],
  [8e3, 8005],
  [8016, 8023],
  [8032, 8039],
  [8048, 8061],
  [8064, 8071],
  [8080, 8087],
  [8096, 8103],
  [8112, 8116],
  [8118, 8119],
  [8130, 8132],
  [8134, 8135],
  [8144, 8147],
  [8150, 8151],
  [8160, 8167],
  [8178, 8180],
  [8182, 8183],
  [8462, 8463],
  [8508, 8509],
  [8518, 8521],
  [11312, 11358],
  [11365, 11366],
  [11379, 11380],
  [11382, 11387],
  [11491, 11492],
  [11520, 11557],
  [42799, 42801],
  [42865, 42872],
  [42899, 42901],
  [43824, 43866],
  [43872, 43879],
  [43888, 43967],
  [64256, 64262],
  [64275, 64279],
  [65345, 65370],
  [66600, 66639],
  [66776, 66811],
  [68800, 68850],
  [71872, 71903],
  [93792, 93823],
  [119834, 119859],
  [119886, 119892],
  [119894, 119911],
  [119938, 119963],
  [119990, 119993],
  [119997, 120003],
  [120005, 120015],
  [120042, 120067],
  [120094, 120119],
  [120146, 120171],
  [120198, 120223],
  [120250, 120275],
  [120302, 120327],
  [120354, 120379],
  [120406, 120431],
  [120458, 120485],
  [120514, 120538],
  [120540, 120545],
  [120572, 120596],
  [120598, 120603],
  [120630, 120654],
  [120656, 120661],
  [120688, 120712],
  [120714, 120719],
  [120746, 120770],
  [120772, 120777],
  [125218, 125251],
  [688, 705],
  [710, 721],
  [736, 740],
  [1765, 1766],
  [2036, 2037],
  [7288, 7293],
  [7468, 7530],
  [7579, 7615],
  [8336, 8348],
  [11388, 11389],
  [12337, 12341],
  [12445, 12446],
  [12540, 12542],
  [42232, 42237],
  [42652, 42653],
  [42775, 42783],
  [43e3, 43001],
  [43763, 43764],
  [43868, 43871],
  [65438, 65439],
  [92992, 92995],
  [94099, 94111],
  [94176, 94177],
  [123191, 123197],
  [13313, 19893],
  [19969, 40943],
  [44033, 55203],
  [94209, 100343],
  [131073, 173782],
  [173825, 177972],
  [177985, 178205],
  [178209, 183969],
  [183985, 191456],
  [448, 451],
  [1488, 1514],
  [1519, 1522],
  [1568, 1599],
  [1601, 1610],
  [1646, 1647],
  [1649, 1747],
  [1774, 1775],
  [1786, 1788],
  [1810, 1839],
  [1869, 1957],
  [1994, 2026],
  [2048, 2069],
  [2112, 2136],
  [2144, 2154],
  [2208, 2228],
  [2230, 2237],
  [2308, 2361],
  [2392, 2401],
  [2418, 2432],
  [2437, 2444],
  [2447, 2448],
  [2451, 2472],
  [2474, 2480],
  [2486, 2489],
  [2524, 2525],
  [2527, 2529],
  [2544, 2545],
  [2565, 2570],
  [2575, 2576],
  [2579, 2600],
  [2602, 2608],
  [2610, 2611],
  [2613, 2614],
  [2616, 2617],
  [2649, 2652],
  [2674, 2676],
  [2693, 2701],
  [2703, 2705],
  [2707, 2728],
  [2730, 2736],
  [2738, 2739],
  [2741, 2745],
  [2784, 2785],
  [2821, 2828],
  [2831, 2832],
  [2835, 2856],
  [2858, 2864],
  [2866, 2867],
  [2869, 2873],
  [2908, 2909],
  [2911, 2913],
  [2949, 2954],
  [2958, 2960],
  [2962, 2965],
  [2969, 2970],
  [2974, 2975],
  [2979, 2980],
  [2984, 2986],
  [2990, 3001],
  [3077, 3084],
  [3086, 3088],
  [3090, 3112],
  [3114, 3129],
  [3160, 3162],
  [3168, 3169],
  [3205, 3212],
  [3214, 3216],
  [3218, 3240],
  [3242, 3251],
  [3253, 3257],
  [3296, 3297],
  [3313, 3314],
  [3333, 3340],
  [3342, 3344],
  [3346, 3386],
  [3412, 3414],
  [3423, 3425],
  [3450, 3455],
  [3461, 3478],
  [3482, 3505],
  [3507, 3515],
  [3520, 3526],
  [3585, 3632],
  [3634, 3635],
  [3648, 3653],
  [3713, 3714],
  [3718, 3722],
  [3724, 3747],
  [3751, 3760],
  [3762, 3763],
  [3776, 3780],
  [3804, 3807],
  [3904, 3911],
  [3913, 3948],
  [3976, 3980],
  [4096, 4138],
  [4176, 4181],
  [4186, 4189],
  [4197, 4198],
  [4206, 4208],
  [4213, 4225],
  [4352, 4680],
  [4682, 4685],
  [4688, 4694],
  [4698, 4701],
  [4704, 4744],
  [4746, 4749],
  [4752, 4784],
  [4786, 4789],
  [4792, 4798],
  [4802, 4805],
  [4808, 4822],
  [4824, 4880],
  [4882, 4885],
  [4888, 4954],
  [4992, 5007],
  [5121, 5740],
  [5743, 5759],
  [5761, 5786],
  [5792, 5866],
  [5873, 5880],
  [5888, 5900],
  [5902, 5905],
  [5920, 5937],
  [5952, 5969],
  [5984, 5996],
  [5998, 6e3],
  [6016, 6067],
  [6176, 6210],
  [6212, 6264],
  [6272, 6276],
  [6279, 6312],
  [6320, 6389],
  [6400, 6430],
  [6480, 6509],
  [6512, 6516],
  [6528, 6571],
  [6576, 6601],
  [6656, 6678],
  [6688, 6740],
  [6917, 6963],
  [6981, 6987],
  [7043, 7072],
  [7086, 7087],
  [7098, 7141],
  [7168, 7203],
  [7245, 7247],
  [7258, 7287],
  [7401, 7404],
  [7406, 7411],
  [7413, 7414],
  [8501, 8504],
  [11568, 11623],
  [11648, 11670],
  [11680, 11686],
  [11688, 11694],
  [11696, 11702],
  [11704, 11710],
  [11712, 11718],
  [11720, 11726],
  [11728, 11734],
  [11736, 11742],
  [12353, 12438],
  [12449, 12538],
  [12549, 12591],
  [12593, 12686],
  [12704, 12730],
  [12784, 12799],
  [40960, 40980],
  [40982, 42124],
  [42192, 42231],
  [42240, 42507],
  [42512, 42527],
  [42538, 42539],
  [42656, 42725],
  [43003, 43009],
  [43011, 43013],
  [43015, 43018],
  [43020, 43042],
  [43072, 43123],
  [43138, 43187],
  [43250, 43255],
  [43261, 43262],
  [43274, 43301],
  [43312, 43334],
  [43360, 43388],
  [43396, 43442],
  [43488, 43492],
  [43495, 43503],
  [43514, 43518],
  [43520, 43560],
  [43584, 43586],
  [43588, 43595],
  [43616, 43631],
  [43633, 43638],
  [43646, 43695],
  [43701, 43702],
  [43705, 43709],
  [43739, 43740],
  [43744, 43754],
  [43777, 43782],
  [43785, 43790],
  [43793, 43798],
  [43808, 43814],
  [43816, 43822],
  [43968, 44002],
  [55216, 55238],
  [55243, 55291],
  [63744, 64109],
  [64112, 64217],
  [64287, 64296],
  [64298, 64310],
  [64312, 64316],
  [64320, 64321],
  [64323, 64324],
  [64326, 64433],
  [64467, 64829],
  [64848, 64911],
  [64914, 64967],
  [65008, 65019],
  [65136, 65140],
  [65142, 65276],
  [65382, 65391],
  [65393, 65437],
  [65440, 65470],
  [65474, 65479],
  [65482, 65487],
  [65490, 65495],
  [65498, 65500],
  [65536, 65547],
  [65549, 65574],
  [65576, 65594],
  [65596, 65597],
  [65599, 65613],
  [65616, 65629],
  [65664, 65786],
  [66176, 66204],
  [66208, 66256],
  [66304, 66335],
  [66349, 66368],
  [66370, 66377],
  [66384, 66421],
  [66432, 66461],
  [66464, 66499],
  [66504, 66511],
  [66640, 66717],
  [66816, 66855],
  [66864, 66915],
  [67072, 67382],
  [67392, 67413],
  [67424, 67431],
  [67584, 67589],
  [67594, 67637],
  [67639, 67640],
  [67647, 67669],
  [67680, 67702],
  [67712, 67742],
  [67808, 67826],
  [67828, 67829],
  [67840, 67861],
  [67872, 67897],
  [67968, 68023],
  [68030, 68031],
  [68112, 68115],
  [68117, 68119],
  [68121, 68149],
  [68192, 68220],
  [68224, 68252],
  [68288, 68295],
  [68297, 68324],
  [68352, 68405],
  [68416, 68437],
  [68448, 68466],
  [68480, 68497],
  [68608, 68680],
  [68864, 68899],
  [69376, 69404],
  [69424, 69445],
  [69600, 69622],
  [69635, 69687],
  [69763, 69807],
  [69840, 69864],
  [69891, 69926],
  [69968, 70002],
  [70019, 70066],
  [70081, 70084],
  [70144, 70161],
  [70163, 70187],
  [70272, 70278],
  [70282, 70285],
  [70287, 70301],
  [70303, 70312],
  [70320, 70366],
  [70405, 70412],
  [70415, 70416],
  [70419, 70440],
  [70442, 70448],
  [70450, 70451],
  [70453, 70457],
  [70493, 70497],
  [70656, 70708],
  [70727, 70730],
  [70784, 70831],
  [70852, 70853],
  [71040, 71086],
  [71128, 71131],
  [71168, 71215],
  [71296, 71338],
  [71424, 71450],
  [71680, 71723],
  [72096, 72103],
  [72106, 72144],
  [72203, 72242],
  [72284, 72329],
  [72384, 72440],
  [72704, 72712],
  [72714, 72750],
  [72818, 72847],
  [72960, 72966],
  [72968, 72969],
  [72971, 73008],
  [73056, 73061],
  [73063, 73064],
  [73066, 73097],
  [73440, 73458],
  [73728, 74649],
  [74880, 75075],
  [77824, 78894],
  [82944, 83526],
  [92160, 92728],
  [92736, 92766],
  [92880, 92909],
  [92928, 92975],
  [93027, 93047],
  [93053, 93071],
  [93952, 94026],
  [100352, 101106],
  [110592, 110878],
  [110928, 110930],
  [110948, 110951],
  [110960, 111355],
  [113664, 113770],
  [113776, 113788],
  [113792, 113800],
  [113808, 113817],
  [123136, 123180],
  [123584, 123627],
  [124928, 125124],
  [126464, 126467],
  [126469, 126495],
  [126497, 126498],
  [126505, 126514],
  [126516, 126519],
  [126541, 126543],
  [126545, 126546],
  [126561, 126562],
  [126567, 126570],
  [126572, 126578],
  [126580, 126583],
  [126585, 126588],
  [126592, 126601],
  [126603, 126619],
  [126625, 126627],
  [126629, 126633],
  [126635, 126651],
  [194560, 195101],
  [8072, 8079],
  [8088, 8095],
  [8104, 8111],
  [65, 90],
  [192, 214],
  [216, 222],
  [376, 377],
  [385, 386],
  [390, 391],
  [393, 395],
  [398, 401],
  [403, 404],
  [406, 408],
  [412, 413],
  [415, 416],
  [422, 423],
  [430, 431],
  [433, 435],
  [439, 440],
  [502, 504],
  [570, 571],
  [573, 574],
  [579, 582],
  [904, 906],
  [910, 911],
  [913, 929],
  [931, 939],
  [978, 980],
  [1017, 1018],
  [1021, 1071],
  [1216, 1217],
  [1329, 1366],
  [4256, 4293],
  [5024, 5109],
  [7312, 7354],
  [7357, 7359],
  [7944, 7951],
  [7960, 7965],
  [7976, 7983],
  [7992, 7999],
  [8008, 8013],
  [8040, 8047],
  [8120, 8123],
  [8136, 8139],
  [8152, 8155],
  [8168, 8172],
  [8184, 8187],
  [8459, 8461],
  [8464, 8466],
  [8473, 8477],
  [8490, 8493],
  [8496, 8499],
  [8510, 8511],
  [11264, 11310],
  [11362, 11364],
  [11373, 11376],
  [11390, 11392],
  [42877, 42878],
  [42922, 42926],
  [42928, 42932],
  [42948, 42950],
  [65313, 65338],
  [66560, 66599],
  [66736, 66771],
  [68736, 68786],
  [71840, 71871],
  [93760, 93791],
  [119808, 119833],
  [119860, 119885],
  [119912, 119937],
  [119966, 119967],
  [119973, 119974],
  [119977, 119980],
  [119982, 119989],
  [120016, 120041],
  [120068, 120069],
  [120071, 120074],
  [120077, 120084],
  [120086, 120092],
  [120120, 120121],
  [120123, 120126],
  [120128, 120132],
  [120138, 120144],
  [120172, 120197],
  [120224, 120249],
  [120276, 120301],
  [120328, 120353],
  [120380, 120405],
  [120432, 120457],
  [120488, 120512],
  [120546, 120570],
  [120604, 120628],
  [120662, 120686],
  [120720, 120744],
  [125184, 125217],
  [5870, 5872],
  [8544, 8578],
  [8581, 8584],
  [12321, 12329],
  [12344, 12346],
  [42726, 42735],
  [65856, 65908],
  [66513, 66517],
  [74752, 74862],
  [162, 165],
  [2046, 2047],
  [2546, 2547],
  [8352, 8383],
  [65504, 65505],
  [65509, 65510],
  [73693, 73696],
  [8255, 8256],
  [65075, 65076],
  [65101, 65103]
];
addRanges(fic, fic_a);
var ricd = /* @__PURE__ */ new Set([
  1471,
  1479,
  1648,
  1809,
  2045,
  2362,
  2364,
  2381,
  2433,
  2492,
  2509,
  2558,
  2620,
  2641,
  2677,
  2748,
  2765,
  2817,
  2876,
  2879,
  2893,
  2902,
  2946,
  3008,
  3021,
  3072,
  3076,
  3201,
  3260,
  3263,
  3270,
  3405,
  3530,
  3542,
  3633,
  3761,
  3893,
  3895,
  3897,
  4038,
  4226,
  4237,
  4253,
  6086,
  6109,
  6313,
  6450,
  6683,
  6742,
  6752,
  6754,
  6783,
  6964,
  6972,
  6978,
  7142,
  7149,
  7405,
  7412,
  8417,
  11647,
  42607,
  43010,
  43014,
  43019,
  43263,
  43443,
  43493,
  43587,
  43596,
  43644,
  43696,
  43713,
  43766,
  44005,
  44008,
  44013,
  64286,
  66045,
  66272,
  68159,
  69633,
  70003,
  70196,
  70206,
  70367,
  70464,
  70726,
  70750,
  70842,
  71229,
  71339,
  71341,
  71351,
  72160,
  72263,
  72767,
  73018,
  73031,
  73109,
  73111,
  94031,
  121461,
  121476,
  173,
  1564,
  1757,
  1807,
  2274,
  6158,
  65279,
  69821,
  69837,
  917505
]);
var ricd_a = [
  [768, 879],
  [1155, 1159],
  [1425, 1469],
  [1473, 1474],
  [1476, 1477],
  [1552, 1562],
  [1611, 1631],
  [1750, 1756],
  [1759, 1764],
  [1767, 1768],
  [1770, 1773],
  [1840, 1866],
  [1958, 1968],
  [2027, 2035],
  [2070, 2073],
  [2075, 2083],
  [2085, 2087],
  [2089, 2093],
  [2137, 2139],
  [2259, 2273],
  [2275, 2306],
  [2369, 2376],
  [2385, 2391],
  [2402, 2403],
  [2497, 2500],
  [2530, 2531],
  [2561, 2562],
  [2625, 2626],
  [2631, 2632],
  [2635, 2637],
  [2672, 2673],
  [2689, 2690],
  [2753, 2757],
  [2759, 2760],
  [2786, 2787],
  [2810, 2815],
  [2881, 2884],
  [2914, 2915],
  [3134, 3136],
  [3142, 3144],
  [3146, 3149],
  [3157, 3158],
  [3170, 3171],
  [3276, 3277],
  [3298, 3299],
  [3328, 3329],
  [3387, 3388],
  [3393, 3396],
  [3426, 3427],
  [3538, 3540],
  [3636, 3642],
  [3655, 3662],
  [3764, 3772],
  [3784, 3789],
  [3864, 3865],
  [3953, 3966],
  [3968, 3972],
  [3974, 3975],
  [3981, 3991],
  [3993, 4028],
  [4141, 4144],
  [4146, 4151],
  [4153, 4154],
  [4157, 4158],
  [4184, 4185],
  [4190, 4192],
  [4209, 4212],
  [4229, 4230],
  [4957, 4959],
  [5906, 5908],
  [5938, 5940],
  [5970, 5971],
  [6002, 6003],
  [6068, 6069],
  [6071, 6077],
  [6089, 6099],
  [6155, 6157],
  [6277, 6278],
  [6432, 6434],
  [6439, 6440],
  [6457, 6459],
  [6679, 6680],
  [6744, 6750],
  [6757, 6764],
  [6771, 6780],
  [6832, 6845],
  [6912, 6915],
  [6966, 6970],
  [7019, 7027],
  [7040, 7041],
  [7074, 7077],
  [7080, 7081],
  [7083, 7085],
  [7144, 7145],
  [7151, 7153],
  [7212, 7219],
  [7222, 7223],
  [7376, 7378],
  [7380, 7392],
  [7394, 7400],
  [7416, 7417],
  [7616, 7673],
  [7675, 7679],
  [8400, 8412],
  [8421, 8432],
  [11503, 11505],
  [11744, 11775],
  [12330, 12333],
  [12441, 12442],
  [42612, 42621],
  [42654, 42655],
  [42736, 42737],
  [43045, 43046],
  [43204, 43205],
  [43232, 43249],
  [43302, 43309],
  [43335, 43345],
  [43392, 43394],
  [43446, 43449],
  [43452, 43453],
  [43561, 43566],
  [43569, 43570],
  [43573, 43574],
  [43698, 43700],
  [43703, 43704],
  [43710, 43711],
  [43756, 43757],
  [65024, 65039],
  [65056, 65071],
  [66422, 66426],
  [68097, 68099],
  [68101, 68102],
  [68108, 68111],
  [68152, 68154],
  [68325, 68326],
  [68900, 68903],
  [69446, 69456],
  [69688, 69702],
  [69759, 69761],
  [69811, 69814],
  [69817, 69818],
  [69888, 69890],
  [69927, 69931],
  [69933, 69940],
  [70016, 70017],
  [70070, 70078],
  [70089, 70092],
  [70191, 70193],
  [70198, 70199],
  [70371, 70378],
  [70400, 70401],
  [70459, 70460],
  [70502, 70508],
  [70512, 70516],
  [70712, 70719],
  [70722, 70724],
  [70835, 70840],
  [70847, 70848],
  [70850, 70851],
  [71090, 71093],
  [71100, 71101],
  [71103, 71104],
  [71132, 71133],
  [71219, 71226],
  [71231, 71232],
  [71344, 71349],
  [71453, 71455],
  [71458, 71461],
  [71463, 71467],
  [71727, 71735],
  [71737, 71738],
  [72148, 72151],
  [72154, 72155],
  [72193, 72202],
  [72243, 72248],
  [72251, 72254],
  [72273, 72278],
  [72281, 72283],
  [72330, 72342],
  [72344, 72345],
  [72752, 72758],
  [72760, 72765],
  [72850, 72871],
  [72874, 72880],
  [72882, 72883],
  [72885, 72886],
  [73009, 73014],
  [73020, 73021],
  [73023, 73029],
  [73104, 73105],
  [73459, 73460],
  [92912, 92916],
  [92976, 92982],
  [94095, 94098],
  [113821, 113822],
  [119143, 119145],
  [119163, 119170],
  [119173, 119179],
  [119210, 119213],
  [119362, 119364],
  [121344, 121398],
  [121403, 121452],
  [121499, 121503],
  [121505, 121519],
  [122880, 122886],
  [122888, 122904],
  [122907, 122913],
  [122915, 122916],
  [122918, 122922],
  [123184, 123190],
  [123628, 123631],
  [125136, 125142],
  [125252, 125258],
  [917760, 917999],
  [1536, 1541],
  [8203, 8207],
  [8234, 8238],
  [8288, 8292],
  [8294, 8303],
  [65529, 65531],
  [78896, 78904],
  [113824, 113827],
  [119155, 119162],
  [917536, 917631]
];
addRanges(ricd, ricd_a);
var mac_a = [
  [0, 8],
  [14, 27],
  [127, 159],
  [768, 879],
  [6832, 6911],
  [7616, 7679],
  [8400, 8447],
  [65056, 65071],
  [48, 57]
];
addRanges(ricd, mac_a);
var ric = new Set(
  function* () {
    yield* fic;
    yield* ricd;
  }()
);

// node_modules/java-parser/src/tokens.js
var fragments = {};
function inlineFragments(def) {
  let inlinedDef = def;
  Object.keys(fragments).forEach((prevFragmentName) => {
    const prevFragmentDef = fragments[prevFragmentName];
    const templateRegExp = new RegExp(`{{${prevFragmentName}}}`, "g");
    inlinedDef = inlinedDef.replace(templateRegExp, prevFragmentDef);
  });
  return inlinedDef;
}
function FRAGMENT(name, def) {
  fragments[name] = inlineFragments(def);
}
function MAKE_PATTERN(def, flags) {
  const inlinedDef = inlineFragments(def);
  return new RegExp(inlinedDef, flags);
}
FRAGMENT("Digits", "[0-9]([0-9_]*[0-9])?");
FRAGMENT("ExponentPart", "[eE][+-]?{{Digits}}");
FRAGMENT("HexDigit", "[0-9a-fA-F]");
FRAGMENT("HexDigits", "{{HexDigit}}(({{HexDigit}}|'_')*{{HexDigit}})?");
FRAGMENT("FloatTypeSuffix", "[fFdD]");
FRAGMENT("LineTerminator", "(\\x0A|(\\x0D(\\x0A)?))");
FRAGMENT("UnicodeMarker", "uu*");
FRAGMENT("UnicodeEscape", "\\\\{{UnicodeMarker}}{{HexDigit}}{4}");
FRAGMENT("RawInputCharacter", "\\\\{{UnicodeMarker}}[0-9a-fA-F]{4}");
FRAGMENT("UnicodeInputCharacter", "({{UnicodeEscape}}|{{RawInputCharacter}})");
FRAGMENT("OctalDigit", "[0-7]");
FRAGMENT("ZeroToThree", "[0-3]");
FRAGMENT(
  "OctalEscape",
  "\\\\({{OctalDigit}}|{{ZeroToThree}}?{{OctalDigit}}{2})"
);
FRAGMENT("EscapeSequence", `\\\\[bstnfr"'\\\\]|{{OctalEscape}}`);
FRAGMENT(
  "StringCharacter",
  '(?:(?:{{EscapeSequence}})|{{UnicodeEscape}}|(?!["\\\\]).)'
);
FRAGMENT(
  "TextBlockCharacter",
  "(?:(?:{{EscapeSequence}})|{{UnicodeEscape}}|(?!\\\\).|\\\\?{{LineTerminator}})"
);
function matchJavaIdentifier(text, startOffset) {
  let endOffset = startOffset;
  let charCode = text.codePointAt(endOffset);
  if (fic.has(charCode)) {
    endOffset++;
    if (charCode > 65535) {
      endOffset++;
    }
    charCode = text.codePointAt(endOffset);
  }
  while (ric.has(charCode)) {
    endOffset++;
    if (charCode > 65535) {
      endOffset++;
    }
    charCode = text.codePointAt(endOffset);
  }
  if (endOffset === startOffset) {
    return null;
  }
  const matchedString = text.substring(startOffset, endOffset);
  return [matchedString];
}
var Identifier = createToken({
  name: "Identifier",
  pattern: { exec: matchJavaIdentifier },
  line_breaks: false,
  start_chars_hint: Array.from(
    fic,
    (x) => String.fromCharCode(x)
  )
});
var allTokens = {
  modes: {
    global: [],
    stringTemplate: [],
    textBlockTemplate: []
  },
  defaultMode: "global"
};
var allModes = Object.keys(allTokens.modes);
var tokenDictionary = {};
function createToken2(options, modes = allModes) {
  if (!options.label) {
    if (typeof options.pattern === "string") {
      options.label = `'${options.pattern}'`;
    } else if (options.pattern instanceof RegExp) {
      options.label = `'${options.name}'`;
    }
  }
  const newTokenType = createToken(options);
  modes.forEach((mode) => allTokens.modes[mode].push(newTokenType));
  tokenDictionary[options.name] = newTokenType;
  return newTokenType;
}
function createKeywordLikeToken(options) {
  options.longer_alt = Identifier;
  return createToken2(options);
}
var RestrictedKeyword = createToken2({
  name: "RestrictedKeyword",
  pattern: Lexer.NA
});
var Keyword = createToken2({
  name: "Keyword",
  pattern: Lexer.NA
});
var AssignmentOperator = createToken2({
  name: "AssignmentOperator",
  pattern: Lexer.NA
});
var BinaryOperator = createToken2({
  name: "BinaryOperator",
  pattern: Lexer.NA
});
var UnaryPrefixOperator = createToken2({
  name: "UnaryPrefixOperator",
  pattern: Lexer.NA
});
var UnaryPrefixOperatorNotPlusMinus = createToken2({
  name: "UnaryPrefixOperatorNotPlusMinus",
  pattern: Lexer.NA
});
var UnarySuffixOperator = createToken2({
  name: "UnarySuffixOperator",
  pattern: Lexer.NA
});
var Separators = createToken2({
  name: "Separators",
  pattern: Lexer.NA
});
createToken2({
  name: "WhiteSpace",
  pattern: MAKE_PATTERN("[\\x09\\x20\\x0C]|{{LineTerminator}}"),
  group: Lexer.SKIPPED
});
createToken2({
  name: "LineComment",
  pattern: /\/\/[^\n\r]*/,
  group: "comments"
});
createToken2({
  name: "TraditionalComment",
  pattern: /\/\*([^*]|\*(?!\/))*\*\//,
  group: "comments"
});
createToken2({ name: "BinaryLiteral", pattern: /0[bB][01]([01_]*[01])?[lL]?/ });
createToken2({
  name: "FloatLiteral",
  pattern: MAKE_PATTERN(
    "{{Digits}}\\.({{Digits}})?({{ExponentPart}})?({{FloatTypeSuffix}})?|\\.{{Digits}}({{ExponentPart}})?({{FloatTypeSuffix}})?|{{Digits}}{{ExponentPart}}({{FloatTypeSuffix}})?|{{Digits}}({{ExponentPart}})?{{FloatTypeSuffix}}"
  )
});
createToken2({ name: "OctalLiteral", pattern: /0_*[0-7]([0-7_]*[0-7])?[lL]?/ });
createToken2({
  name: "HexFloatLiteral",
  pattern: MAKE_PATTERN(
    "0[xX]({{HexDigits}}\\.?|({{HexDigits}})?\\.{{HexDigits}})[pP][+-]?{{Digits}}[fFdD]?"
  )
});
createToken2({
  name: "HexLiteral",
  pattern: /0[xX][0-9a-fA-F]([0-9a-fA-F_]*[0-9a-fA-F])?[lL]?/
});
createToken2({
  name: "DecimalLiteral",
  pattern: MAKE_PATTERN("(0|[1-9](_+{{Digits}}|({{Digits}})?))[lL]?")
});
createToken2({
  name: "CharLiteral",
  // Not using SingleCharacter Terminology because ' and \ are captured in EscapeSequence
  pattern: MAKE_PATTERN(
    "'(?:[^\\\\']|(?:(?:{{EscapeSequence}})|{{UnicodeInputCharacter}}))'"
  )
});
createToken2({
  name: "TextBlock",
  pattern: MAKE_PATTERN(
    '"""[\\x09\\x20\\x0C]*{{LineTerminator}}{{TextBlockCharacter}}*?"""'
  )
});
createToken2({
  name: "TextBlockTemplateBegin",
  pattern: MAKE_PATTERN('"""{{LineTerminator}}{{TextBlockCharacter}}*?\\\\\\{'),
  push_mode: "textBlockTemplate"
});
createToken2(
  {
    name: "TextBlockTemplateEnd",
    pattern: MAKE_PATTERN('\\}{{TextBlockCharacter}}*?"""'),
    pop_mode: true
  },
  ["textBlockTemplate"]
);
createToken2({
  name: "StringLiteral",
  pattern: MAKE_PATTERN('"{{StringCharacter}}*?"')
});
createToken2({
  name: "StringTemplateBegin",
  pattern: MAKE_PATTERN('"{{StringCharacter}}*?\\\\\\{'),
  push_mode: "stringTemplate"
});
createToken2(
  {
    name: "StringTemplateEnd",
    pattern: MAKE_PATTERN('\\}{{StringCharacter}}*?"'),
    pop_mode: true
  },
  ["stringTemplate"]
);
createToken2(
  {
    name: "StringTemplateMid",
    pattern: MAKE_PATTERN("\\}{{StringCharacter}}*?\\\\\\{")
  },
  ["stringTemplate"]
);
createToken2(
  {
    name: "TextBlockTemplateMid",
    pattern: MAKE_PATTERN("\\}{{TextBlockCharacter}}*?\\\\\\{")
  },
  ["textBlockTemplate"]
);
var restrictedKeywords = [
  "open",
  "module",
  "requires",
  "transitive",
  "exports",
  "opens",
  "to",
  "uses",
  "provides",
  "when",
  "with",
  "sealed",
  "non-sealed",
  "permits"
];
sortDescLength(restrictedKeywords).forEach((word) => {
  createKeywordLikeToken({
    name: word[0].toUpperCase() + (0, import_camelCase.default)(word.substr(1)),
    pattern: word,
    // restricted keywords can also be used as an Identifiers according to the spec.
    // TODO: inspect this causes no ambiguities
    categories: [Identifier, RestrictedKeyword]
  });
});
var keywords = [
  "abstract",
  "continue",
  "for",
  "new",
  "switch",
  "assert",
  "default",
  "if",
  "package",
  "synchronized",
  "boolean",
  "do",
  "goto",
  "private",
  "this",
  "break",
  "double",
  "implements",
  "protected",
  "throw",
  "byte",
  "else",
  "import",
  "public",
  "throws",
  "case",
  "enum",
  // "instanceof", // special handling for "instanceof" operator below
  "return",
  "transient",
  "catch",
  "extends",
  "int",
  "short",
  "try",
  "char",
  "final",
  "interface",
  "static",
  "void",
  "class",
  "finally",
  "long",
  "strictfp",
  "volatile",
  "const",
  "float",
  "native",
  "super",
  "while",
  ["_", "underscore"]
];
sortDescLength(keywords).forEach((word) => {
  const isPair = Array.isArray(word);
  const actualName = isPair ? word[1] : word;
  const actualPattern = isPair ? word[0] : word;
  const options = {
    name: actualName[0].toUpperCase() + actualName.substr(1),
    pattern: actualPattern,
    categories: Keyword
  };
  if (isPair) {
    options.label = `'${actualName}'`;
  }
  createKeywordLikeToken(options);
});
createKeywordLikeToken({
  name: "Instanceof",
  pattern: "instanceof",
  categories: [Keyword, BinaryOperator]
});
createKeywordLikeToken({
  name: "Var",
  pattern: "var",
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-3.9
  // "var is not a keyword, but rather an identifier with special meaning as the type of a local variable declaration"
  categories: Identifier
});
createKeywordLikeToken({
  name: "Yield",
  pattern: "yield",
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-3.9
  // "yield is not a keyword, but rather an identifier with special meaning as the type of a local variable declaration"
  categories: Identifier
});
createKeywordLikeToken({
  name: "Record",
  pattern: "record",
  // https://docs.oracle.com/javase/specs/jls/se16/html/jls-3.html#jls-3.9
  // "record is not a keyword, but rather an identifier with special meaning as the type of a local variable declaration"
  categories: Identifier
});
createKeywordLikeToken({ name: "True", pattern: "true" });
createKeywordLikeToken({ name: "False", pattern: "false" });
createKeywordLikeToken({ name: "Null", pattern: "null" });
createToken2({ name: "At", pattern: "@", categories: [Separators] });
createToken2({ name: "Arrow", pattern: "->" });
createToken2({ name: "DotDotDot", pattern: "...", categories: [Separators] });
createToken2({ name: "Dot", pattern: ".", categories: [Separators] });
createToken2({ name: "Comma", pattern: ",", categories: [Separators] });
createToken2({ name: "Semicolon", pattern: ";", categories: [Separators] });
createToken2({ name: "ColonColon", pattern: "::", categories: [Separators] });
createToken2({ name: "Colon", pattern: ":" });
createToken2({ name: "QuestionMark", pattern: "?" });
createToken2({ name: "LBrace", pattern: "(", categories: [Separators] });
createToken2({ name: "RBrace", pattern: ")", categories: [Separators] });
createToken2({
  name: "LCurly",
  pattern: "{",
  categories: [Separators],
  push_mode: allTokens.defaultMode
});
createToken2(
  { name: "RCurly", pattern: "}", categories: [Separators], pop_mode: true },
  [allTokens.defaultMode]
);
createToken2({ name: "LSquare", pattern: "[", categories: [Separators] });
createToken2({ name: "RSquare", pattern: "]", categories: [Separators] });
createToken2({
  name: "MinusMinus",
  pattern: "--",
  categories: [
    UnaryPrefixOperator,
    UnarySuffixOperator,
    UnaryPrefixOperatorNotPlusMinus
  ]
});
createToken2({
  name: "PlusPlus",
  pattern: "++",
  categories: [
    UnaryPrefixOperator,
    UnarySuffixOperator,
    UnaryPrefixOperatorNotPlusMinus
  ]
});
createToken2({
  name: "Complement",
  pattern: "~",
  categories: [UnaryPrefixOperator, UnaryPrefixOperatorNotPlusMinus]
});
createToken2({
  name: "LessEquals",
  pattern: "<=",
  categories: [BinaryOperator]
});
createToken2({
  name: "LessLessEquals",
  pattern: "<<=",
  categories: [AssignmentOperator]
});
createToken2({ name: "Less", pattern: "<", categories: [BinaryOperator] });
createToken2({
  name: "GreaterEquals",
  pattern: ">=",
  categories: [BinaryOperator]
});
createToken2({
  name: "GreaterGreaterEquals",
  pattern: ">>=",
  categories: [AssignmentOperator]
});
createToken2({
  name: "GreaterGreaterGreaterEquals",
  pattern: ">>>=",
  categories: [AssignmentOperator]
});
createToken2({ name: "Greater", pattern: ">", categories: [BinaryOperator] });
createToken2({
  name: "EqualsEquals",
  pattern: "==",
  categories: [BinaryOperator]
});
createToken2({
  name: "Equals",
  pattern: "=",
  categories: [BinaryOperator, AssignmentOperator]
});
createToken2({
  name: "MinusEquals",
  pattern: "-=",
  categories: [AssignmentOperator]
});
createToken2({
  name: "Minus",
  pattern: "-",
  categories: [BinaryOperator, UnaryPrefixOperator]
});
createToken2({
  name: "PlusEquals",
  pattern: "+=",
  categories: [AssignmentOperator]
});
createToken2({
  name: "Plus",
  pattern: "+",
  categories: [BinaryOperator, UnaryPrefixOperator]
});
createToken2({ name: "AndAnd", pattern: "&&", categories: [BinaryOperator] });
createToken2({
  name: "AndEquals",
  pattern: "&=",
  categories: [AssignmentOperator]
});
createToken2({ name: "And", pattern: "&", categories: [BinaryOperator] });
createToken2({
  name: "XorEquals",
  pattern: "^=",
  categories: [AssignmentOperator]
});
createToken2({ name: "Xor", pattern: "^", categories: [BinaryOperator] });
createToken2({ name: "NotEquals", pattern: "!=", categories: [BinaryOperator] });
createToken2({ name: "OrOr", pattern: "||", categories: [BinaryOperator] });
createToken2({
  name: "OrEquals",
  pattern: "|=",
  categories: [AssignmentOperator]
});
createToken2({ name: "Or", pattern: "|", categories: [BinaryOperator] });
createToken2({
  name: "MultiplyEquals",
  pattern: "*=",
  categories: [AssignmentOperator]
});
createToken2({ name: "Star", pattern: "*", categories: [BinaryOperator] });
createToken2({
  name: "DivideEquals",
  pattern: "/=",
  categories: [AssignmentOperator]
});
createToken2({ name: "Divide", pattern: "/", categories: [BinaryOperator] });
createToken2({
  name: "ModuloEquals",
  pattern: "%=",
  categories: [AssignmentOperator]
});
createToken2({ name: "Modulo", pattern: "%", categories: [BinaryOperator] });
createToken2({
  name: "Not",
  pattern: "!",
  categories: [UnaryPrefixOperator, UnaryPrefixOperatorNotPlusMinus]
});
allModes.forEach((mode) => allTokens.modes[mode].push(Identifier));
tokenDictionary["Identifier"] = Identifier;
function sortDescLength(arr) {
  return arr.sort((a, b) => {
    return b.length - a.length;
  });
}

// node_modules/java-parser/src/utils.js
function getSkipValidations() {
  return (typeof process !== "undefined" && // (not every runtime has a global `process` object
  process.env && process.env["prettier-java-development-mode"] === "enabled") === false;
}

// node_modules/java-parser/src/lexer.js
var lexer_default = new Lexer(allTokens, {
  ensureOptimizations: true,
  skipValidations: getSkipValidations()
});

// node_modules/chevrotain-allstar/lib/atn.js
function buildATNKey(rule, type, occurrence) {
  return `${rule.name}_${type}_${occurrence}`;
}
var ATN_BASIC = 1;
var ATN_RULE_START = 2;
var ATN_PLUS_BLOCK_START = 4;
var ATN_STAR_BLOCK_START = 5;
var ATN_RULE_STOP = 7;
var ATN_BLOCK_END = 8;
var ATN_STAR_LOOP_BACK = 9;
var ATN_STAR_LOOP_ENTRY = 10;
var ATN_PLUS_LOOP_BACK = 11;
var ATN_LOOP_END = 12;
var AbstractTransition = class {
  constructor(target) {
    this.target = target;
  }
  isEpsilon() {
    return false;
  }
};
var AtomTransition = class extends AbstractTransition {
  constructor(target, tokenType) {
    super(target);
    this.tokenType = tokenType;
  }
};
var EpsilonTransition = class extends AbstractTransition {
  constructor(target) {
    super(target);
  }
  isEpsilon() {
    return true;
  }
};
var RuleTransition = class extends AbstractTransition {
  constructor(ruleStart, rule, followState) {
    super(ruleStart);
    this.rule = rule;
    this.followState = followState;
  }
  isEpsilon() {
    return true;
  }
};
function createATN(rules) {
  const atn = {
    decisionMap: {},
    decisionStates: [],
    ruleToStartState: /* @__PURE__ */ new Map(),
    ruleToStopState: /* @__PURE__ */ new Map(),
    states: []
  };
  createRuleStartAndStopATNStates(atn, rules);
  const ruleLength = rules.length;
  for (let i = 0; i < ruleLength; i++) {
    const rule = rules[i];
    const ruleBlock = block(atn, rule, rule);
    if (ruleBlock === void 0) {
      continue;
    }
    buildRuleHandle(atn, rule, ruleBlock);
  }
  return atn;
}
function createRuleStartAndStopATNStates(atn, rules) {
  const ruleLength = rules.length;
  for (let i = 0; i < ruleLength; i++) {
    const rule = rules[i];
    const start = newState(atn, rule, void 0, {
      type: ATN_RULE_START
    });
    const stop = newState(atn, rule, void 0, {
      type: ATN_RULE_STOP
    });
    start.stop = stop;
    atn.ruleToStartState.set(rule, start);
    atn.ruleToStopState.set(rule, stop);
  }
}
function atom(atn, rule, production) {
  if (production instanceof Terminal) {
    return tokenRef(atn, rule, production.terminalType, production);
  } else if (production instanceof NonTerminal) {
    return ruleRef(atn, rule, production);
  } else if (production instanceof Alternation) {
    return alternation(atn, rule, production);
  } else if (production instanceof Option) {
    return option(atn, rule, production);
  } else if (production instanceof Repetition) {
    return repetition(atn, rule, production);
  } else if (production instanceof RepetitionWithSeparator) {
    return repetitionSep(atn, rule, production);
  } else if (production instanceof RepetitionMandatory) {
    return repetitionMandatory(atn, rule, production);
  } else if (production instanceof RepetitionMandatoryWithSeparator) {
    return repetitionMandatorySep(atn, rule, production);
  } else {
    return block(atn, rule, production);
  }
}
function repetition(atn, rule, repetition2) {
  const starState = newState(atn, rule, repetition2, {
    type: ATN_STAR_BLOCK_START
  });
  defineDecisionState(atn, starState);
  const handle = makeAlts(atn, rule, starState, repetition2, block(atn, rule, repetition2));
  return star(atn, rule, repetition2, handle);
}
function repetitionSep(atn, rule, repetition2) {
  const starState = newState(atn, rule, repetition2, {
    type: ATN_STAR_BLOCK_START
  });
  defineDecisionState(atn, starState);
  const handle = makeAlts(atn, rule, starState, repetition2, block(atn, rule, repetition2));
  const sep = tokenRef(atn, rule, repetition2.separator, repetition2);
  return star(atn, rule, repetition2, handle, sep);
}
function repetitionMandatory(atn, rule, repetition2) {
  const plusState = newState(atn, rule, repetition2, {
    type: ATN_PLUS_BLOCK_START
  });
  defineDecisionState(atn, plusState);
  const handle = makeAlts(atn, rule, plusState, repetition2, block(atn, rule, repetition2));
  return plus(atn, rule, repetition2, handle);
}
function repetitionMandatorySep(atn, rule, repetition2) {
  const plusState = newState(atn, rule, repetition2, {
    type: ATN_PLUS_BLOCK_START
  });
  defineDecisionState(atn, plusState);
  const handle = makeAlts(atn, rule, plusState, repetition2, block(atn, rule, repetition2));
  const sep = tokenRef(atn, rule, repetition2.separator, repetition2);
  return plus(atn, rule, repetition2, handle, sep);
}
function alternation(atn, rule, alternation2) {
  const start = newState(atn, rule, alternation2, {
    type: ATN_BASIC
  });
  defineDecisionState(atn, start);
  const alts = map_default(alternation2.definition, (e) => atom(atn, rule, e));
  const handle = makeAlts(atn, rule, start, alternation2, ...alts);
  return handle;
}
function option(atn, rule, option2) {
  const start = newState(atn, rule, option2, {
    type: ATN_BASIC
  });
  defineDecisionState(atn, start);
  const handle = makeAlts(atn, rule, start, option2, block(atn, rule, option2));
  return optional(atn, rule, option2, handle);
}
function block(atn, rule, block2) {
  const handles = filter_default(map_default(block2.definition, (e) => atom(atn, rule, e)), (e) => e !== void 0);
  if (handles.length === 1) {
    return handles[0];
  } else if (handles.length === 0) {
    return void 0;
  } else {
    return makeBlock(atn, handles);
  }
}
function plus(atn, rule, plus2, handle, sep) {
  const blkStart = handle.left;
  const blkEnd = handle.right;
  const loop = newState(atn, rule, plus2, {
    type: ATN_PLUS_LOOP_BACK
  });
  defineDecisionState(atn, loop);
  const end = newState(atn, rule, plus2, {
    type: ATN_LOOP_END
  });
  blkStart.loopback = loop;
  end.loopback = loop;
  atn.decisionMap[buildATNKey(rule, sep ? "RepetitionMandatoryWithSeparator" : "RepetitionMandatory", plus2.idx)] = loop;
  epsilon(blkEnd, loop);
  if (sep === void 0) {
    epsilon(loop, blkStart);
    epsilon(loop, end);
  } else {
    epsilon(loop, end);
    epsilon(loop, sep.left);
    epsilon(sep.right, blkStart);
  }
  return {
    left: blkStart,
    right: end
  };
}
function star(atn, rule, star2, handle, sep) {
  const start = handle.left;
  const end = handle.right;
  const entry = newState(atn, rule, star2, {
    type: ATN_STAR_LOOP_ENTRY
  });
  defineDecisionState(atn, entry);
  const loopEnd = newState(atn, rule, star2, {
    type: ATN_LOOP_END
  });
  const loop = newState(atn, rule, star2, {
    type: ATN_STAR_LOOP_BACK
  });
  entry.loopback = loop;
  loopEnd.loopback = loop;
  epsilon(entry, start);
  epsilon(entry, loopEnd);
  epsilon(end, loop);
  if (sep !== void 0) {
    epsilon(loop, loopEnd);
    epsilon(loop, sep.left);
    epsilon(sep.right, start);
  } else {
    epsilon(loop, entry);
  }
  atn.decisionMap[buildATNKey(rule, sep ? "RepetitionWithSeparator" : "Repetition", star2.idx)] = entry;
  return {
    left: entry,
    right: loopEnd
  };
}
function optional(atn, rule, optional2, handle) {
  const start = handle.left;
  const end = handle.right;
  epsilon(start, end);
  atn.decisionMap[buildATNKey(rule, "Option", optional2.idx)] = start;
  return handle;
}
function defineDecisionState(atn, state) {
  atn.decisionStates.push(state);
  state.decision = atn.decisionStates.length - 1;
  return state.decision;
}
function makeAlts(atn, rule, start, production, ...alts) {
  const end = newState(atn, rule, production, {
    type: ATN_BLOCK_END,
    start
  });
  start.end = end;
  for (const alt of alts) {
    if (alt !== void 0) {
      epsilon(start, alt.left);
      epsilon(alt.right, end);
    } else {
      epsilon(start, end);
    }
  }
  const handle = {
    left: start,
    right: end
  };
  atn.decisionMap[buildATNKey(rule, getProdType2(production), production.idx)] = start;
  return handle;
}
function getProdType2(production) {
  if (production instanceof Alternation) {
    return "Alternation";
  } else if (production instanceof Option) {
    return "Option";
  } else if (production instanceof Repetition) {
    return "Repetition";
  } else if (production instanceof RepetitionWithSeparator) {
    return "RepetitionWithSeparator";
  } else if (production instanceof RepetitionMandatory) {
    return "RepetitionMandatory";
  } else if (production instanceof RepetitionMandatoryWithSeparator) {
    return "RepetitionMandatoryWithSeparator";
  } else {
    throw new Error("Invalid production type encountered");
  }
}
function makeBlock(atn, alts) {
  const altsLength = alts.length;
  for (let i = 0; i < altsLength - 1; i++) {
    const handle = alts[i];
    let transition;
    if (handle.left.transitions.length === 1) {
      transition = handle.left.transitions[0];
    }
    const isRuleTransition = transition instanceof RuleTransition;
    const ruleTransition = transition;
    const next = alts[i + 1].left;
    if (handle.left.type === ATN_BASIC && handle.right.type === ATN_BASIC && transition !== void 0 && (isRuleTransition && ruleTransition.followState === handle.right || transition.target === handle.right)) {
      if (isRuleTransition) {
        ruleTransition.followState = next;
      } else {
        transition.target = next;
      }
      removeState(atn, handle.right);
    } else {
      epsilon(handle.right, next);
    }
  }
  const first2 = alts[0];
  const last = alts[altsLength - 1];
  return {
    left: first2.left,
    right: last.right
  };
}
function tokenRef(atn, rule, tokenType, production) {
  const left = newState(atn, rule, production, {
    type: ATN_BASIC
  });
  const right = newState(atn, rule, production, {
    type: ATN_BASIC
  });
  addTransition(left, new AtomTransition(right, tokenType));
  return {
    left,
    right
  };
}
function ruleRef(atn, currentRule, nonTerminal) {
  const rule = nonTerminal.referencedRule;
  const start = atn.ruleToStartState.get(rule);
  const left = newState(atn, currentRule, nonTerminal, {
    type: ATN_BASIC
  });
  const right = newState(atn, currentRule, nonTerminal, {
    type: ATN_BASIC
  });
  const call = new RuleTransition(start, rule, right);
  addTransition(left, call);
  return {
    left,
    right
  };
}
function buildRuleHandle(atn, rule, block2) {
  const start = atn.ruleToStartState.get(rule);
  epsilon(start, block2.left);
  const stop = atn.ruleToStopState.get(rule);
  epsilon(block2.right, stop);
  const handle = {
    left: start,
    right: stop
  };
  return handle;
}
function epsilon(a, b) {
  const transition = new EpsilonTransition(b);
  addTransition(a, transition);
}
function newState(atn, rule, production, partial) {
  const t = Object.assign({
    atn,
    production,
    epsilonOnlyTransitions: false,
    rule,
    transitions: [],
    nextTokenWithinRule: [],
    stateNumber: atn.states.length
  }, partial);
  atn.states.push(t);
  return t;
}
function addTransition(state, transition) {
  if (state.transitions.length === 0) {
    state.epsilonOnlyTransitions = transition.isEpsilon();
  }
  state.transitions.push(transition);
}
function removeState(atn, state) {
  atn.states.splice(atn.states.indexOf(state), 1);
}

// node_modules/chevrotain-allstar/lib/dfa.js
var DFA_ERROR = {};
var ATNConfigSet = class {
  constructor() {
    this.map = {};
    this.configs = [];
  }
  get size() {
    return this.configs.length;
  }
  finalize() {
    this.map = {};
  }
  add(config) {
    const key = getATNConfigKey(config);
    if (!(key in this.map)) {
      this.map[key] = this.configs.length;
      this.configs.push(config);
    }
  }
  get elements() {
    return this.configs;
  }
  get alts() {
    return map_default(this.configs, (e) => e.alt);
  }
  get key() {
    let value = "";
    for (const k in this.map) {
      value += k + ":";
    }
    return value;
  }
};
function getATNConfigKey(config, alt = true) {
  return `${alt ? `a${config.alt}` : ""}s${config.state.stateNumber}:${config.stack.map((e) => e.stateNumber.toString()).join("_")}`;
}

// node_modules/chevrotain-allstar/lib/all-star-lookahead.js
function createDFACache(startState, decision) {
  const map = {};
  return (predicateSet) => {
    const key = predicateSet.toString();
    let existing = map[key];
    if (existing !== void 0) {
      return existing;
    } else {
      existing = {
        atnStartState: startState,
        decision,
        states: {}
      };
      map[key] = existing;
      return existing;
    }
  };
}
var PredicateSet = class {
  constructor() {
    this.predicates = [];
  }
  is(index) {
    return index >= this.predicates.length || this.predicates[index];
  }
  set(index, value) {
    this.predicates[index] = value;
  }
  toString() {
    let value = "";
    const size = this.predicates.length;
    for (let i = 0; i < size; i++) {
      value += this.predicates[i] === true ? "1" : "0";
    }
    return value;
  }
};
var EMPTY_PREDICATES = new PredicateSet();
var LLStarLookaheadStrategy = class extends LLkLookaheadStrategy {
  constructor(options) {
    var _a;
    super();
    this.logging = (_a = options === null || options === void 0 ? void 0 : options.logging) !== null && _a !== void 0 ? _a : (message) => console.log(message);
  }
  initialize(options) {
    this.atn = createATN(options.rules);
    this.dfas = initATNSimulator(this.atn);
  }
  validateAmbiguousAlternationAlternatives() {
    return [];
  }
  validateEmptyOrAlternatives() {
    return [];
  }
  buildLookaheadForAlternation(options) {
    const { prodOccurrence, rule, hasPredicates, dynamicTokensEnabled } = options;
    const dfas = this.dfas;
    const logging = this.logging;
    const key = buildATNKey(rule, "Alternation", prodOccurrence);
    const decisionState = this.atn.decisionMap[key];
    const decisionIndex = decisionState.decision;
    const partialAlts = map_default(getLookaheadPaths({
      maxLookahead: 1,
      occurrence: prodOccurrence,
      prodType: "Alternation",
      rule
    }), (currAlt) => map_default(currAlt, (path) => path[0]));
    if (isLL1Sequence(partialAlts, false) && !dynamicTokensEnabled) {
      const choiceToAlt = reduce_default(partialAlts, (result, currAlt, idx) => {
        forEach_default(currAlt, (currTokType) => {
          if (currTokType) {
            result[currTokType.tokenTypeIdx] = idx;
            forEach_default(currTokType.categoryMatches, (currExtendingType) => {
              result[currExtendingType] = idx;
            });
          }
        });
        return result;
      }, {});
      if (hasPredicates) {
        return function(orAlts) {
          var _a;
          const nextToken = this.LA(1);
          const prediction = choiceToAlt[nextToken.tokenTypeIdx];
          if (orAlts !== void 0 && prediction !== void 0) {
            const gate = (_a = orAlts[prediction]) === null || _a === void 0 ? void 0 : _a.GATE;
            if (gate !== void 0 && gate.call(this) === false) {
              return void 0;
            }
          }
          return prediction;
        };
      } else {
        return function() {
          const nextToken = this.LA(1);
          return choiceToAlt[nextToken.tokenTypeIdx];
        };
      }
    } else if (hasPredicates) {
      return function(orAlts) {
        const predicates = new PredicateSet();
        const length = orAlts === void 0 ? 0 : orAlts.length;
        for (let i = 0; i < length; i++) {
          const gate = orAlts === null || orAlts === void 0 ? void 0 : orAlts[i].GATE;
          predicates.set(i, gate === void 0 || gate.call(this));
        }
        const result = adaptivePredict.call(this, dfas, decisionIndex, predicates, logging);
        return typeof result === "number" ? result : void 0;
      };
    } else {
      return function() {
        const result = adaptivePredict.call(this, dfas, decisionIndex, EMPTY_PREDICATES, logging);
        return typeof result === "number" ? result : void 0;
      };
    }
  }
  buildLookaheadForOptional(options) {
    const { prodOccurrence, rule, prodType, dynamicTokensEnabled } = options;
    const dfas = this.dfas;
    const logging = this.logging;
    const key = buildATNKey(rule, prodType, prodOccurrence);
    const decisionState = this.atn.decisionMap[key];
    const decisionIndex = decisionState.decision;
    const alts = map_default(getLookaheadPaths({
      maxLookahead: 1,
      occurrence: prodOccurrence,
      prodType,
      rule
    }), (e) => {
      return map_default(e, (g) => g[0]);
    });
    if (isLL1Sequence(alts) && alts[0][0] && !dynamicTokensEnabled) {
      const alt = alts[0];
      const singleTokensTypes = flatten_default(alt);
      if (singleTokensTypes.length === 1 && isEmpty_default(singleTokensTypes[0].categoryMatches)) {
        const expectedTokenType = singleTokensTypes[0];
        const expectedTokenUniqueKey = expectedTokenType.tokenTypeIdx;
        return function() {
          return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey;
        };
      } else {
        const choiceToAlt = reduce_default(singleTokensTypes, (result, currTokType) => {
          if (currTokType !== void 0) {
            result[currTokType.tokenTypeIdx] = true;
            forEach_default(currTokType.categoryMatches, (currExtendingType) => {
              result[currExtendingType] = true;
            });
          }
          return result;
        }, {});
        return function() {
          const nextToken = this.LA(1);
          return choiceToAlt[nextToken.tokenTypeIdx] === true;
        };
      }
    }
    return function() {
      const result = adaptivePredict.call(this, dfas, decisionIndex, EMPTY_PREDICATES, logging);
      return typeof result === "object" ? false : result === 0;
    };
  }
};
function isLL1Sequence(sequences, allowEmpty = true) {
  const fullSet = /* @__PURE__ */ new Set();
  for (const alt of sequences) {
    const altSet = /* @__PURE__ */ new Set();
    for (const tokType of alt) {
      if (tokType === void 0) {
        if (allowEmpty) {
          break;
        } else {
          return false;
        }
      }
      const indices = [tokType.tokenTypeIdx].concat(tokType.categoryMatches);
      for (const index of indices) {
        if (fullSet.has(index)) {
          if (!altSet.has(index)) {
            return false;
          }
        } else {
          fullSet.add(index);
          altSet.add(index);
        }
      }
    }
  }
  return true;
}
function initATNSimulator(atn) {
  const decisionLength = atn.decisionStates.length;
  const decisionToDFA = Array(decisionLength);
  for (let i = 0; i < decisionLength; i++) {
    decisionToDFA[i] = createDFACache(atn.decisionStates[i], i);
  }
  return decisionToDFA;
}
function adaptivePredict(dfaCaches, decision, predicateSet, logging) {
  const dfa = dfaCaches[decision](predicateSet);
  let start = dfa.start;
  if (start === void 0) {
    const closure2 = computeStartState(dfa.atnStartState);
    start = addDFAState(dfa, newDFAState(closure2));
    dfa.start = start;
  }
  const alt = performLookahead.apply(this, [dfa, start, predicateSet, logging]);
  return alt;
}
function performLookahead(dfa, s0, predicateSet, logging) {
  let previousD = s0;
  let i = 1;
  const path = [];
  let t = this.LA(i++);
  while (true) {
    let d = getExistingTargetState(previousD, t);
    if (d === void 0) {
      d = computeLookaheadTarget.apply(this, [dfa, previousD, t, i, predicateSet, logging]);
    }
    if (d === DFA_ERROR) {
      return buildAdaptivePredictError(path, previousD, t);
    }
    if (d.isAcceptState === true) {
      return d.prediction;
    }
    previousD = d;
    path.push(t);
    t = this.LA(i++);
  }
}
function computeLookaheadTarget(dfa, previousD, token, lookahead, predicateSet, logging) {
  const reach = computeReachSet(previousD.configs, token, predicateSet);
  if (reach.size === 0) {
    addDFAEdge(dfa, previousD, token, DFA_ERROR);
    return DFA_ERROR;
  }
  let newState2 = newDFAState(reach);
  const predictedAlt = getUniqueAlt(reach, predicateSet);
  if (predictedAlt !== void 0) {
    newState2.isAcceptState = true;
    newState2.prediction = predictedAlt;
    newState2.configs.uniqueAlt = predictedAlt;
  } else if (hasConflictTerminatingPrediction(reach)) {
    const prediction = min_default(reach.alts);
    newState2.isAcceptState = true;
    newState2.prediction = prediction;
    newState2.configs.uniqueAlt = prediction;
    reportLookaheadAmbiguity.apply(this, [dfa, lookahead, reach.alts, logging]);
  }
  newState2 = addDFAEdge(dfa, previousD, token, newState2);
  return newState2;
}
function reportLookaheadAmbiguity(dfa, lookahead, ambiguityIndices, logging) {
  const prefixPath = [];
  for (let i = 1; i <= lookahead; i++) {
    prefixPath.push(this.LA(i).tokenType);
  }
  const atnState = dfa.atnStartState;
  const topLevelRule = atnState.rule;
  const production = atnState.production;
  const message = buildAmbiguityError({
    topLevelRule,
    ambiguityIndices,
    production,
    prefixPath
  });
  logging(message);
}
function buildAmbiguityError(options) {
  const pathMsg = map_default(options.prefixPath, (currtok) => tokenLabel2(currtok)).join(", ");
  const occurrence = options.production.idx === 0 ? "" : options.production.idx;
  let currMessage = `Ambiguous Alternatives Detected: <${options.ambiguityIndices.join(", ")}> in <${getProductionDslName2(options.production)}${occurrence}> inside <${options.topLevelRule.name}> Rule,
<${pathMsg}> may appears as a prefix path in all these alternatives.
`;
  currMessage = currMessage + `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`;
  return currMessage;
}
function getProductionDslName2(prod) {
  if (prod instanceof NonTerminal) {
    return "SUBRULE";
  } else if (prod instanceof Option) {
    return "OPTION";
  } else if (prod instanceof Alternation) {
    return "OR";
  } else if (prod instanceof RepetitionMandatory) {
    return "AT_LEAST_ONE";
  } else if (prod instanceof RepetitionMandatoryWithSeparator) {
    return "AT_LEAST_ONE_SEP";
  } else if (prod instanceof RepetitionWithSeparator) {
    return "MANY_SEP";
  } else if (prod instanceof Repetition) {
    return "MANY";
  } else if (prod instanceof Terminal) {
    return "CONSUME";
  } else {
    throw Error("non exhaustive match");
  }
}
function buildAdaptivePredictError(path, previous, current) {
  const nextTransitions = flatMap_default(previous.configs.elements, (e) => e.state.transitions);
  const nextTokenTypes = uniqBy_default(nextTransitions.filter((e) => e instanceof AtomTransition).map((e) => e.tokenType), (e) => e.tokenTypeIdx);
  return {
    actualToken: current,
    possibleTokenTypes: nextTokenTypes,
    tokenPath: path
  };
}
function getExistingTargetState(state, token) {
  return state.edges[token.tokenTypeIdx];
}
function computeReachSet(configs, token, predicateSet) {
  const intermediate = new ATNConfigSet();
  const skippedStopStates = [];
  for (const c of configs.elements) {
    if (predicateSet.is(c.alt) === false) {
      continue;
    }
    if (c.state.type === ATN_RULE_STOP) {
      skippedStopStates.push(c);
      continue;
    }
    const transitionLength = c.state.transitions.length;
    for (let i = 0; i < transitionLength; i++) {
      const transition = c.state.transitions[i];
      const target = getReachableTarget(transition, token);
      if (target !== void 0) {
        intermediate.add({
          state: target,
          alt: c.alt,
          stack: c.stack
        });
      }
    }
  }
  let reach;
  if (skippedStopStates.length === 0 && intermediate.size === 1) {
    reach = intermediate;
  }
  if (reach === void 0) {
    reach = new ATNConfigSet();
    for (const c of intermediate.elements) {
      closure(c, reach);
    }
  }
  if (skippedStopStates.length > 0 && !hasConfigInRuleStopState(reach)) {
    for (const c of skippedStopStates) {
      reach.add(c);
    }
  }
  return reach;
}
function getReachableTarget(transition, token) {
  if (transition instanceof AtomTransition && tokenMatcher(token, transition.tokenType)) {
    return transition.target;
  }
  return void 0;
}
function getUniqueAlt(configs, predicateSet) {
  let alt;
  for (const c of configs.elements) {
    if (predicateSet.is(c.alt) === true) {
      if (alt === void 0) {
        alt = c.alt;
      } else if (alt !== c.alt) {
        return void 0;
      }
    }
  }
  return alt;
}
function newDFAState(closure2) {
  return {
    configs: closure2,
    edges: {},
    isAcceptState: false,
    prediction: -1
  };
}
function addDFAEdge(dfa, from, token, to) {
  to = addDFAState(dfa, to);
  from.edges[token.tokenTypeIdx] = to;
  return to;
}
function addDFAState(dfa, state) {
  if (state === DFA_ERROR) {
    return state;
  }
  const mapKey = state.configs.key;
  const existing = dfa.states[mapKey];
  if (existing !== void 0) {
    return existing;
  }
  state.configs.finalize();
  dfa.states[mapKey] = state;
  return state;
}
function computeStartState(atnState) {
  const configs = new ATNConfigSet();
  const numberOfTransitions = atnState.transitions.length;
  for (let i = 0; i < numberOfTransitions; i++) {
    const target = atnState.transitions[i].target;
    const config = {
      state: target,
      alt: i,
      stack: []
    };
    closure(config, configs);
  }
  return configs;
}
function closure(config, configs) {
  const p = config.state;
  if (p.type === ATN_RULE_STOP) {
    if (config.stack.length > 0) {
      const atnStack = [...config.stack];
      const followState = atnStack.pop();
      const followConfig = {
        state: followState,
        alt: config.alt,
        stack: atnStack
      };
      closure(followConfig, configs);
    } else {
      configs.add(config);
    }
    return;
  }
  if (!p.epsilonOnlyTransitions) {
    configs.add(config);
  }
  const transitionLength = p.transitions.length;
  for (let i = 0; i < transitionLength; i++) {
    const transition = p.transitions[i];
    const c = getEpsilonTarget(config, transition);
    if (c !== void 0) {
      closure(c, configs);
    }
  }
}
function getEpsilonTarget(config, transition) {
  if (transition instanceof EpsilonTransition) {
    return {
      state: transition.target,
      alt: config.alt,
      stack: config.stack
    };
  } else if (transition instanceof RuleTransition) {
    const stack = [...config.stack, transition.followState];
    return {
      state: transition.target,
      alt: config.alt,
      stack
    };
  }
  return void 0;
}
function hasConfigInRuleStopState(configs) {
  for (const c of configs.elements) {
    if (c.state.type === ATN_RULE_STOP) {
      return true;
    }
  }
  return false;
}
function allConfigsInRuleStopStates(configs) {
  for (const c of configs.elements) {
    if (c.state.type !== ATN_RULE_STOP) {
      return false;
    }
  }
  return true;
}
function hasConflictTerminatingPrediction(configs) {
  if (allConfigsInRuleStopStates(configs)) {
    return true;
  }
  const altSets = getConflictingAltSets(configs.elements);
  const heuristic = hasConflictingAltSet(altSets) && !hasStateAssociatedWithOneAlt(altSets);
  return heuristic;
}
function getConflictingAltSets(configs) {
  const configToAlts = /* @__PURE__ */ new Map();
  for (const c of configs) {
    const key = getATNConfigKey(c, false);
    let alts = configToAlts.get(key);
    if (alts === void 0) {
      alts = {};
      configToAlts.set(key, alts);
    }
    alts[c.alt] = true;
  }
  return configToAlts;
}
function hasConflictingAltSet(altSets) {
  for (const value of Array.from(altSets.values())) {
    if (Object.keys(value).length > 1) {
      return true;
    }
  }
  return false;
}
function hasStateAssociatedWithOneAlt(altSets) {
  for (const value of Array.from(altSets.values())) {
    if (Object.keys(value).length === 1) {
      return true;
    }
  }
  return false;
}

// node_modules/java-parser/src/productions/lexical-structure.js
function defineRules($, t) {
  $.RULE("literal", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.integerLiteral) },
      { ALT: () => $.SUBRULE($.floatingPointLiteral) },
      { ALT: () => $.SUBRULE($.booleanLiteral) },
      { ALT: () => $.CONSUME(t.CharLiteral) },
      { ALT: () => $.CONSUME(t.TextBlock) },
      { ALT: () => $.CONSUME(t.StringLiteral) },
      { ALT: () => $.CONSUME(t.Null) }
    ]);
  });
  $.RULE("integerLiteral", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.DecimalLiteral) },
      { ALT: () => $.CONSUME(t.HexLiteral) },
      { ALT: () => $.CONSUME(t.OctalLiteral) },
      { ALT: () => $.CONSUME(t.BinaryLiteral) }
    ]);
  });
  $.RULE("floatingPointLiteral", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.FloatLiteral) },
      { ALT: () => $.CONSUME(t.HexFloatLiteral) }
    ]);
  });
  $.RULE("booleanLiteral", () => {
    $.OR([{ ALT: () => $.CONSUME(t.True) }, { ALT: () => $.CONSUME(t.False) }]);
  });
}

// node_modules/java-parser/src/productions/types-values-and-variables.js
function defineRules2($, t) {
  $.RULE("primitiveType", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.OR([
      { ALT: () => $.SUBRULE($.numericType) },
      { ALT: () => $.CONSUME(t.Boolean) }
    ]);
  });
  $.RULE("numericType", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.integralType) },
      { ALT: () => $.SUBRULE($.floatingPointType) }
    ]);
  });
  $.RULE("integralType", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.Byte) },
      { ALT: () => $.CONSUME(t.Short) },
      { ALT: () => $.CONSUME(t.Int) },
      { ALT: () => $.CONSUME(t.Long) },
      { ALT: () => $.CONSUME(t.Char) }
    ]);
  });
  $.RULE("floatingPointType", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.Float) },
      { ALT: () => $.CONSUME(t.Double) }
    ]);
  });
  $.RULE("referenceType", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.OR({
      DEF: [
        {
          ALT: () => {
            $.SUBRULE($.primitiveType);
            $.SUBRULE($.dims);
          }
        },
        {
          // Spec Deviation: "typeVariable" alternative is missing because
          //                 it is included in "classOrInterfaceType"
          ALT: () => {
            $.SUBRULE($.classOrInterfaceType);
            $.OPTION(() => {
              $.SUBRULE2($.dims);
            });
          }
        }
      ],
      IGNORE_AMBIGUITIES: true
      // annotation prefix was extracted to remove ambiguities
    });
  });
  $.RULE("classOrInterfaceType", () => {
    $.SUBRULE($.classType);
  });
  $.RULE("classType", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.Identifier);
    $.OPTION(() => {
      $.SUBRULE($.typeArguments);
    });
    $.MANY2(() => {
      $.CONSUME(t.Dot);
      $.MANY3(() => {
        $.SUBRULE2($.annotation);
      });
      $.CONSUME2(t.Identifier);
      $.OPTION2(() => $.SUBRULE2($.typeArguments));
    });
  });
  $.RULE("interfaceType", () => {
    $.SUBRULE($.classType);
  });
  $.RULE("typeVariable", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.Identifier);
  });
  $.RULE("dims", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.LSquare);
    $.CONSUME(t.RSquare);
    $.MANY2({
      GATE: () => $.BACKTRACK_LOOKAHEAD($.isDims),
      DEF: () => {
        $.MANY3(() => {
          $.SUBRULE2($.annotation);
        });
        $.CONSUME2(t.LSquare);
        $.CONSUME2(t.RSquare);
      }
    });
  });
  $.RULE("typeParameter", () => {
    $.MANY(() => {
      $.SUBRULE($.typeParameterModifier);
    });
    $.SUBRULE($.typeIdentifier);
    $.OPTION(() => {
      $.SUBRULE($.typeBound);
    });
  });
  $.RULE("typeParameterModifier", () => {
    $.SUBRULE($.annotation);
  });
  $.RULE("typeBound", () => {
    $.CONSUME(t.Extends);
    $.SUBRULE($.classOrInterfaceType);
    $.MANY(() => {
      $.SUBRULE($.additionalBound);
    });
  });
  $.RULE("additionalBound", () => {
    $.CONSUME(t.And);
    $.SUBRULE($.interfaceType);
  });
  $.RULE("typeArguments", () => {
    $.CONSUME(t.Less);
    $.SUBRULE($.typeArgumentList);
    $.CONSUME(t.Greater);
  });
  $.RULE("typeArgumentList", () => {
    $.SUBRULE($.typeArgument);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.typeArgument);
    });
  });
  $.RULE("typeArgument", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.referenceType) },
      { ALT: () => $.SUBRULE($.wildcard) }
    ]);
  });
  $.RULE("wildcard", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.QuestionMark);
    $.OPTION(() => {
      $.SUBRULE($.wildcardBounds);
    });
  });
  $.RULE("wildcardBounds", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.Extends) },
      { ALT: () => $.CONSUME(t.Super) }
    ]);
    $.SUBRULE($.referenceType);
  });
}

// node_modules/java-parser/src/productions/names.js
function defineRules3($, t) {
  $.RULE("moduleName", () => {
    $.CONSUME(t.Identifier);
    $.MANY(() => {
      $.CONSUME(t.Dot);
      $.CONSUME2(t.Identifier);
    });
  });
  $.RULE("packageName", () => {
    $.CONSUME(t.Identifier);
    $.MANY(() => {
      $.CONSUME(t.Dot);
      $.CONSUME2(t.Identifier);
    });
  });
  $.RULE("typeName", () => {
    $.CONSUME(t.Identifier);
    $.MANY(() => {
      $.CONSUME(t.Dot);
      $.CONSUME2(t.Identifier);
    });
  });
  $.RULE("expressionName", () => {
    $.CONSUME(t.Identifier);
    $.MANY({
      // expressionName could be called by "qualifiedExplicitConstructorInvocation"
      // in that case it may be followed by ".super" so we need to look two tokens
      // ahead.
      GATE: () => tokenMatcher(this.LA(2).tokenType, t.Identifier),
      DEF: () => {
        $.CONSUME(t.Dot);
        $.CONSUME2(t.Identifier);
      }
    });
  });
  $.RULE("methodName", () => {
    $.CONSUME(t.Identifier);
  });
  $.RULE("packageOrTypeName", () => {
    $.CONSUME(t.Identifier);
    $.MANY({
      // In some contexts a "Dot Star" (.*) may appear
      // after a "packageOrTypeName", by default Chevrotain will
      // only look a single token ahead (Dot) to determine if another iteration
      // exists which will cause a parsing error for inputs such as:
      // "import a.b.c.*"
      GATE: () => tokenMatcher(this.LA(2).tokenType, t.Star) === false,
      DEF: () => {
        $.CONSUME(t.Dot);
        $.CONSUME2(t.Identifier);
      }
    });
  });
  $.RULE("ambiguousName", () => {
    $.CONSUME(t.Identifier);
    $.MANY(() => {
      $.CONSUME(t.Dot);
      $.CONSUME2(t.Identifier);
    });
  });
}

// node_modules/java-parser/src/productions/packages-and-modules.js
function defineRules4($, t) {
  $.RULE("compilationUnit", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.ordinaryCompilationUnit) },
      { ALT: () => $.SUBRULE($.modularCompilationUnit) }
    ]);
    $.CONSUME(EOF);
  });
  $.RULE("ordinaryCompilationUnit", () => {
    $.OPTION(() => $.SUBRULE($.packageDeclaration));
    $.MANY(() => {
      $.SUBRULE3($.importDeclaration);
    });
    $.MANY2(() => {
      $.SUBRULE($.typeDeclaration);
    });
  });
  $.RULE("modularCompilationUnit", () => {
    $.MANY(() => {
      $.SUBRULE($.importDeclaration);
    });
    $.SUBRULE($.moduleDeclaration);
  });
  $.RULE("packageDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.packageModifier);
    });
    $.CONSUME(t.Package);
    $.CONSUME(t.Identifier);
    $.MANY2(() => {
      $.CONSUME(t.Dot);
      $.CONSUME2(t.Identifier);
    });
    $.CONSUME2(t.Semicolon);
  });
  $.RULE("packageModifier", () => {
    $.SUBRULE($.annotation);
  });
  $.RULE("importDeclaration", () => {
    $.OR([
      {
        ALT: () => {
          $.CONSUME(t.Import);
          $.OPTION(() => {
            $.CONSUME(t.Static);
          });
          $.SUBRULE($.packageOrTypeName);
          $.OPTION2(() => {
            $.CONSUME(t.Dot);
            $.CONSUME(t.Star);
          });
          $.CONSUME(t.Semicolon);
        }
      },
      // Spec Deviation: The spec do not allow empty statement in between imports.
      //                 However Java compiler consider empty statements valid, we chose
      //                 to support that case, thus deviate from the spec.
      //                 See here: https://github.com/jhipster/prettier-java/pull/158
      {
        ALT: () => $.SUBRULE($.emptyStatement)
      }
    ]);
  });
  $.RULE("typeDeclaration", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.Semicolon) },
      { ALT: () => $.SUBRULE($.classDeclaration) },
      { ALT: () => $.SUBRULE($.interfaceDeclaration) },
      { ALT: () => $.SUBRULE($.fieldDeclaration) },
      { ALT: () => $.SUBRULE($.methodDeclaration) }
    ]);
  });
  $.RULE("moduleDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.OPTION(() => {
      $.CONSUME(t.Open);
    });
    $.CONSUME(t.Module);
    $.CONSUME(t.Identifier);
    $.MANY2(() => {
      $.CONSUME(t.Dot);
      $.CONSUME2(t.Identifier);
    });
    $.CONSUME(t.LCurly);
    $.MANY3(() => {
      $.SUBRULE($.moduleDirective);
    });
    $.CONSUME(t.RCurly);
  });
  $.RULE("moduleDirective", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.requiresModuleDirective) },
      { ALT: () => $.SUBRULE($.exportsModuleDirective) },
      { ALT: () => $.SUBRULE($.opensModuleDirective) },
      { ALT: () => $.SUBRULE($.usesModuleDirective) },
      { ALT: () => $.SUBRULE($.providesModuleDirective) }
    ]);
  });
  $.RULE("requiresModuleDirective", () => {
    $.CONSUME(t.Requires);
    $.MANY({
      GATE: () => {
        return (tokenMatcher($.LA(1).tokenType, t.Transitive) && tokenMatcher($.LA(2).tokenType, t.Separators)) === false;
      },
      DEF: () => {
        $.SUBRULE($.requiresModifier);
      }
    });
    $.SUBRULE($.moduleName);
    $.CONSUME(t.Semicolon);
  });
  $.RULE("exportsModuleDirective", () => {
    $.CONSUME(t.Exports);
    $.SUBRULE($.packageName);
    $.OPTION(() => {
      $.CONSUME(t.To);
      $.SUBRULE($.moduleName);
      $.MANY(() => {
        $.CONSUME(t.Comma);
        $.SUBRULE2($.moduleName);
      });
    });
    $.CONSUME(t.Semicolon);
  });
  $.RULE("opensModuleDirective", () => {
    $.CONSUME(t.Opens);
    $.SUBRULE($.packageName);
    $.OPTION(() => {
      $.CONSUME(t.To);
      $.SUBRULE($.moduleName);
      $.MANY(() => {
        $.CONSUME(t.Comma);
        $.SUBRULE2($.moduleName);
      });
    });
    $.CONSUME(t.Semicolon);
  });
  $.RULE("usesModuleDirective", () => {
    $.CONSUME(t.Uses);
    $.SUBRULE($.typeName);
    $.CONSUME(t.Semicolon);
  });
  $.RULE("providesModuleDirective", () => {
    $.CONSUME(t.Provides);
    $.SUBRULE($.typeName);
    $.CONSUME(t.With);
    $.SUBRULE2($.typeName);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE3($.typeName);
    });
    $.CONSUME(t.Semicolon);
  });
  $.RULE("requiresModifier", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.Transitive) },
      { ALT: () => $.CONSUME(t.Static) }
    ]);
  });
}

// node_modules/java-parser/src/productions/classes.js
function defineRules5($, t) {
  $.RULE("classDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.classModifier);
    });
    $.OR([
      { ALT: () => $.SUBRULE($.normalClassDeclaration) },
      { ALT: () => $.SUBRULE($.enumDeclaration) },
      { ALT: () => $.SUBRULE($.recordDeclaration) }
    ]);
  });
  $.RULE("normalClassDeclaration", () => {
    $.CONSUME(t.Class);
    $.SUBRULE($.typeIdentifier);
    $.OPTION(() => {
      $.SUBRULE($.typeParameters);
    });
    $.OPTION2(() => {
      $.SUBRULE($.classExtends);
    });
    $.OPTION3(() => {
      $.SUBRULE($.classImplements);
    });
    $.OPTION4(() => {
      $.SUBRULE($.classPermits);
    });
    $.SUBRULE($.classBody);
  });
  $.RULE("classModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Protected) },
      { ALT: () => $.CONSUME(t.Private) },
      { ALT: () => $.CONSUME(t.Abstract) },
      { ALT: () => $.CONSUME(t.Static) },
      { ALT: () => $.CONSUME(t.Final) },
      { ALT: () => $.CONSUME(t.Sealed) },
      { ALT: () => $.CONSUME(t.NonSealed) },
      { ALT: () => $.CONSUME(t.Strictfp) }
    ]);
  });
  $.RULE("typeParameters", () => {
    $.CONSUME(t.Less);
    $.SUBRULE($.typeParameterList);
    $.CONSUME(t.Greater);
  });
  $.RULE("typeParameterList", () => {
    $.SUBRULE($.typeParameter);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.typeParameter);
    });
  });
  $.RULE("classExtends", () => {
    $.CONSUME(t.Extends);
    $.SUBRULE($.classType);
  });
  $.RULE("classImplements", () => {
    $.CONSUME(t.Implements);
    $.SUBRULE($.interfaceTypeList);
  });
  $.RULE("interfaceTypeList", () => {
    $.SUBRULE($.interfaceType);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.interfaceType);
    });
  });
  $.RULE("classPermits", () => {
    $.CONSUME(t.Permits);
    $.SUBRULE($.typeName);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.typeName);
    });
  });
  $.RULE("classBody", () => {
    $.CONSUME(t.LCurly);
    $.MANY(() => {
      $.SUBRULE($.classBodyDeclaration);
    });
    $.CONSUME(t.RCurly);
  });
  $.RULE("classBodyDeclaration", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.classMemberDeclaration) },
      { ALT: () => $.SUBRULE($.instanceInitializer) },
      { ALT: () => $.SUBRULE($.staticInitializer) },
      { ALT: () => $.SUBRULE($.constructorDeclaration) }
    ]);
  });
  $.RULE("classMemberDeclaration", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.fieldDeclaration) },
      { ALT: () => $.SUBRULE($.methodDeclaration) },
      { ALT: () => $.SUBRULE($.classDeclaration) },
      { ALT: () => $.SUBRULE($.interfaceDeclaration) },
      { ALT: () => $.CONSUME(t.Semicolon) }
    ]);
  });
  $.RULE("fieldDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.fieldModifier);
    });
    $.SUBRULE($.unannType);
    $.SUBRULE($.variableDeclaratorList);
    $.CONSUME(t.Semicolon);
  });
  $.RULE("fieldModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Protected) },
      { ALT: () => $.CONSUME(t.Private) },
      { ALT: () => $.CONSUME(t.Static) },
      { ALT: () => $.CONSUME(t.Final) },
      { ALT: () => $.CONSUME(t.Transient) },
      { ALT: () => $.CONSUME(t.Volatile) }
    ]);
  });
  $.RULE("variableDeclaratorList", () => {
    $.SUBRULE($.variableDeclarator);
    $.MANY({
      // required to distinguish from patternList
      GATE: () => this.BACKTRACK_LOOKAHEAD($.isFollowingVariableDeclarator),
      DEF: () => {
        $.CONSUME(t.Comma);
        $.SUBRULE2($.variableDeclarator);
      }
    });
  });
  $.RULE("variableDeclarator", () => {
    $.SUBRULE($.variableDeclaratorId);
    $.OPTION(() => {
      $.CONSUME(t.Equals);
      $.SUBRULE($.variableInitializer);
    });
  });
  $.RULE("variableDeclaratorId", () => {
    $.OR([
      {
        ALT: () => {
          $.CONSUME(t.Identifier);
          $.OPTION(() => {
            $.SUBRULE($.dims);
          });
        }
      },
      { ALT: () => $.CONSUME(t.Underscore) }
    ]);
  });
  $.RULE("variableInitializer", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.expression) },
      { ALT: () => $.SUBRULE($.arrayInitializer) }
    ]);
  });
  $.RULE("unannType", () => {
    $.OR([
      // Spec Deviation: The array type "dims" suffix was extracted to this rule
      // to avoid backtracking for performance reasons.
      { ALT: () => $.SUBRULE($.unannPrimitiveTypeWithOptionalDimsSuffix) },
      { ALT: () => $.SUBRULE($.unannReferenceType) }
    ]);
  });
  $.RULE("unannPrimitiveTypeWithOptionalDimsSuffix", () => {
    $.SUBRULE($.unannPrimitiveType);
    $.OPTION({
      GATE: () => this.BACKTRACK_LOOKAHEAD($.isDims),
      DEF: () => $.SUBRULE2($.dims)
    });
  });
  $.RULE("unannPrimitiveType", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.numericType) },
      { ALT: () => $.CONSUME(t.Boolean) }
    ]);
  });
  $.RULE("unannReferenceType", () => {
    $.SUBRULE($.unannClassOrInterfaceType);
    $.OPTION({
      GATE: () => this.BACKTRACK_LOOKAHEAD($.isDims),
      DEF: () => $.SUBRULE2($.dims)
    });
  });
  $.RULE("unannClassOrInterfaceType", () => {
    $.SUBRULE($.unannClassType);
  });
  $.RULE("unannClassType", () => {
    $.CONSUME(t.Identifier);
    $.OPTION(() => {
      $.SUBRULE($.typeArguments);
    });
    $.MANY2(() => {
      $.CONSUME(t.Dot);
      $.MANY3(() => {
        $.SUBRULE2($.annotation);
      });
      $.CONSUME2(t.Identifier);
      $.OPTION2(() => {
        $.SUBRULE2($.typeArguments);
      });
    });
  });
  $.RULE("unannInterfaceType", () => {
    $.SUBRULE($.unannClassType);
  });
  $.RULE("unannTypeVariable", () => {
    $.CONSUME(t.Identifier);
  });
  $.RULE("methodDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.methodModifier);
    });
    $.SUBRULE($.methodHeader);
    $.SUBRULE($.methodBody);
  });
  $.RULE("methodModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Protected) },
      { ALT: () => $.CONSUME(t.Private) },
      { ALT: () => $.CONSUME(t.Abstract) },
      { ALT: () => $.CONSUME(t.Static) },
      { ALT: () => $.CONSUME(t.Final) },
      { ALT: () => $.CONSUME(t.Synchronized) },
      { ALT: () => $.CONSUME(t.Native) },
      { ALT: () => $.CONSUME(t.Strictfp) }
    ]);
  });
  $.RULE("methodHeader", () => {
    $.OPTION(() => {
      $.SUBRULE($.typeParameters);
      $.MANY(() => {
        $.SUBRULE($.annotation);
      });
    });
    $.SUBRULE($.result);
    $.SUBRULE($.methodDeclarator);
    $.OPTION2(() => {
      $.SUBRULE($.throws);
    });
  });
  $.RULE("result", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.unannType) },
      { ALT: () => $.CONSUME(t.Void) }
    ]);
  });
  $.RULE("methodDeclarator", () => {
    $.CONSUME(t.Identifier);
    $.CONSUME(t.LBrace);
    $.OR([
      {
        ALT: () => {
          $.SUBRULE($.receiverParameter);
          $.OPTION(() => {
            $.CONSUME(t.Comma);
            $.SUBRULE($.formalParameterList);
          });
        }
      },
      { ALT: () => $.OPTION1(() => $.SUBRULE1($.formalParameterList)) }
    ]);
    $.CONSUME(t.RBrace);
    $.OPTION2(() => {
      $.SUBRULE($.dims);
    });
  });
  $.RULE("receiverParameter", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.SUBRULE($.unannType);
    $.OPTION(() => {
      $.CONSUME(t.Identifier);
      $.CONSUME(t.Dot);
    });
    $.CONSUME(t.This);
  });
  $.RULE("formalParameterList", () => {
    $.SUBRULE($.formalParameter);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.formalParameter);
    });
  });
  $.RULE("formalParameter", () => {
    $.OR([
      // Spec Deviation: extracted to "variableParaRegularParameter"
      { ALT: () => $.SUBRULE($.variableParaRegularParameter) },
      { ALT: () => $.SUBRULE($.variableArityParameter) }
    ]);
  });
  $.RULE("variableParaRegularParameter", () => {
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.unannType);
    $.SUBRULE($.variableDeclaratorId);
  });
  $.RULE("variableArityParameter", () => {
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.unannType);
    $.MANY2(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.DotDotDot);
    $.CONSUME(t.Identifier);
  });
  $.RULE("variableModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Final) }
    ]);
  });
  $.RULE("throws", () => {
    $.CONSUME(t.Throws);
    $.SUBRULE($.exceptionTypeList);
  });
  $.RULE("exceptionTypeList", () => {
    $.SUBRULE($.exceptionType);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.exceptionType);
    });
  });
  $.RULE("exceptionType", () => {
    $.SUBRULE($.classType);
  });
  $.RULE("methodBody", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.block) },
      { ALT: () => $.CONSUME(t.Semicolon) }
    ]);
  });
  $.RULE("instanceInitializer", () => {
    $.SUBRULE($.block);
  });
  $.RULE("staticInitializer", () => {
    $.CONSUME(t.Static);
    $.SUBRULE($.block);
  });
  $.RULE("constructorDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.constructorModifier);
    });
    $.SUBRULE($.constructorDeclarator);
    $.OPTION(() => {
      $.SUBRULE($.throws);
    });
    $.SUBRULE($.constructorBody);
  });
  $.RULE("constructorModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Protected) },
      { ALT: () => $.CONSUME(t.Private) }
    ]);
  });
  $.RULE("constructorDeclarator", () => {
    $.OPTION(() => {
      $.SUBRULE($.typeParameters);
    });
    $.SUBRULE($.simpleTypeName);
    $.CONSUME(t.LBrace);
    $.OR([
      {
        ALT: () => {
          $.SUBRULE($.receiverParameter);
          $.OPTION1(() => {
            $.CONSUME(t.Comma);
            $.SUBRULE($.formalParameterList);
          });
        }
      },
      { ALT: () => $.OPTION2(() => $.SUBRULE1($.formalParameterList)) }
    ]);
    $.CONSUME(t.RBrace);
  });
  $.RULE("simpleTypeName", () => {
    $.SUBRULE($.typeIdentifier);
  });
  $.RULE("constructorBody", () => {
    $.CONSUME(t.LCurly);
    $.OPTION(() => {
      $.SUBRULE($.explicitConstructorInvocation);
    });
    $.OPTION2(() => {
      $.SUBRULE($.blockStatements);
    });
    $.CONSUME(t.RCurly);
  });
  $.RULE("explicitConstructorInvocation", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.unqualifiedExplicitConstructorInvocation) },
      { ALT: () => $.SUBRULE($.qualifiedExplicitConstructorInvocation) }
    ]);
  });
  $.RULE("unqualifiedExplicitConstructorInvocation", () => {
    $.OPTION(() => {
      $.SUBRULE($.typeArguments);
    });
    $.OR([
      {
        ALT: () => $.CONSUME(t.This)
      },
      {
        ALT: () => $.CONSUME(t.Super)
      }
    ]);
    $.CONSUME(t.LBrace);
    $.OPTION2(() => {
      $.SUBRULE($.argumentList);
    });
    $.CONSUME(t.RBrace);
    $.CONSUME(t.Semicolon);
  });
  $.RULE("qualifiedExplicitConstructorInvocation", () => {
    $.SUBRULE($.expressionName);
    $.CONSUME(t.Dot);
    $.OPTION(() => {
      $.SUBRULE($.typeArguments);
    });
    $.CONSUME(t.Super);
    $.CONSUME(t.LBrace);
    $.OPTION2(() => {
      $.SUBRULE($.argumentList);
    });
    $.CONSUME(t.RBrace);
    $.CONSUME(t.Semicolon);
  });
  $.RULE("enumDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.classModifier);
    });
    $.CONSUME(t.Enum);
    $.SUBRULE($.typeIdentifier);
    $.OPTION(() => {
      $.SUBRULE($.classImplements);
    });
    $.SUBRULE($.enumBody);
  });
  $.RULE("enumBody", () => {
    $.CONSUME(t.LCurly);
    $.OPTION(() => {
      $.SUBRULE($.enumConstantList);
    });
    $.OPTION2(() => {
      $.CONSUME(t.Comma);
    });
    $.OPTION3(() => {
      $.SUBRULE($.enumBodyDeclarations);
    });
    $.CONSUME(t.RCurly);
  });
  $.RULE("enumConstantList", () => {
    $.SUBRULE($.enumConstant);
    $.MANY({
      GATE: () => {
        const nextToken = $.LA(2);
        return tokenMatcher(nextToken, t.Identifier) || tokenMatcher(nextToken, t.At);
      },
      DEF: () => {
        $.CONSUME(t.Comma);
        $.SUBRULE2($.enumConstant);
      }
    });
  });
  $.RULE("enumConstant", () => {
    $.MANY(() => {
      $.SUBRULE($.enumConstantModifier);
    });
    $.CONSUME(t.Identifier);
    $.OPTION(() => {
      $.CONSUME(t.LBrace);
      $.OPTION2(() => {
        $.SUBRULE($.argumentList);
      });
      $.CONSUME(t.RBrace);
    });
    $.OPTION3(() => {
      $.SUBRULE($.classBody);
    });
  });
  $.RULE("enumConstantModifier", () => {
    $.SUBRULE($.annotation);
  });
  $.RULE("enumBodyDeclarations", () => {
    $.CONSUME(t.Semicolon);
    $.MANY(() => {
      $.SUBRULE($.classBodyDeclaration);
    });
  });
  $.RULE("recordDeclaration", () => {
    $.CONSUME(t.Record);
    $.SUBRULE($.typeIdentifier);
    $.OPTION(() => {
      $.SUBRULE($.typeParameters);
    });
    $.SUBRULE($.recordHeader);
    $.OPTION2(() => {
      $.SUBRULE($.classImplements);
    });
    $.SUBRULE($.recordBody);
  });
  $.RULE("recordHeader", () => {
    $.CONSUME(t.LBrace);
    $.OPTION(() => {
      $.SUBRULE($.recordComponentList);
    });
    $.CONSUME(t.RBrace);
  });
  $.RULE("recordComponentList", () => {
    $.SUBRULE($.recordComponent);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.recordComponent);
    });
  });
  $.RULE("recordComponent", () => {
    $.MANY(() => {
      $.SUBRULE($.recordComponentModifier);
    });
    $.SUBRULE($.unannType);
    $.OR([
      { ALT: () => $.CONSUME(t.Identifier) },
      { ALT: () => $.SUBRULE($.variableArityRecordComponent) }
    ]);
  });
  $.RULE("variableArityRecordComponent", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.DotDotDot);
    $.CONSUME(t.Identifier);
  });
  $.RULE("recordComponentModifier", () => {
    $.SUBRULE($.annotation);
  });
  $.RULE("recordBody", () => {
    $.CONSUME(t.LCurly);
    $.MANY(() => {
      $.SUBRULE($.recordBodyDeclaration);
    });
    $.CONSUME(t.RCurly);
  });
  $.RULE("recordBodyDeclaration", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.compactConstructorDeclaration) },
      { ALT: () => $.SUBRULE($.classBodyDeclaration) }
    ]);
  });
  $.RULE("compactConstructorDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.constructorModifier);
    });
    $.SUBRULE($.simpleTypeName);
    $.SUBRULE($.constructorBody);
  });
  $.RULE("isDims", () => {
    $.MANY($.annotation);
    return tokenMatcher(this.LA(1), t.LSquare) && tokenMatcher(this.LA(2), t.RSquare);
  });
  $.RULE("isFollowingVariableDeclarator", () => {
    const hasDims = tokenMatcher(this.LA(3), t.LSquare) && tokenMatcher(this.LA(4), t.RSquare);
    const offset = hasDims ? 2 : 0;
    if (tokenMatcher(this.LA(offset + 3), t.Identifier) || tokenMatcher(this.LA(offset + 3), t.Underscore)) {
      return false;
    }
    return !tokenMatcher(this.LA(3), t.LBrace);
  });
}

// node_modules/java-parser/src/productions/interfaces.js
function defineRules6($, t) {
  $.RULE("interfaceDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.interfaceModifier);
    });
    $.OR([
      { ALT: () => $.SUBRULE($.normalInterfaceDeclaration) },
      { ALT: () => $.SUBRULE($.annotationInterfaceDeclaration) }
    ]);
  });
  $.RULE("normalInterfaceDeclaration", () => {
    $.CONSUME(t.Interface);
    $.SUBRULE($.typeIdentifier);
    $.OPTION(() => {
      $.SUBRULE($.typeParameters);
    });
    $.OPTION2(() => {
      $.SUBRULE($.interfaceExtends);
    });
    $.OPTION3(() => {
      $.SUBRULE($.interfacePermits);
    });
    $.SUBRULE($.interfaceBody);
  });
  $.RULE("interfaceModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Protected) },
      { ALT: () => $.CONSUME(t.Private) },
      { ALT: () => $.CONSUME(t.Abstract) },
      { ALT: () => $.CONSUME(t.Static) },
      { ALT: () => $.CONSUME(t.Sealed) },
      { ALT: () => $.CONSUME(t.NonSealed) },
      { ALT: () => $.CONSUME(t.Strictfp) }
    ]);
  });
  $.RULE("interfaceExtends", () => {
    $.CONSUME(t.Extends);
    $.SUBRULE($.interfaceTypeList);
  });
  $.RULE("interfacePermits", () => {
    $.CONSUME(t.Permits);
    $.SUBRULE($.typeName);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.typeName);
    });
  });
  $.RULE("interfaceBody", () => {
    $.CONSUME(t.LCurly);
    $.MANY(() => {
      $.SUBRULE($.interfaceMemberDeclaration);
    });
    $.CONSUME(t.RCurly);
  });
  $.RULE("interfaceMemberDeclaration", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.constantDeclaration) },
      { ALT: () => $.SUBRULE($.interfaceMethodDeclaration) },
      { ALT: () => $.SUBRULE($.classDeclaration) },
      { ALT: () => $.SUBRULE($.interfaceDeclaration) },
      { ALT: () => $.CONSUME(t.Semicolon) }
    ]);
  });
  $.RULE("constantDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.constantModifier);
    });
    $.SUBRULE($.unannType);
    $.SUBRULE($.variableDeclaratorList);
    $.CONSUME(t.Semicolon);
  });
  $.RULE("constantModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Static) },
      { ALT: () => $.CONSUME(t.Final) }
    ]);
  });
  $.RULE("interfaceMethodDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.interfaceMethodModifier);
    });
    $.SUBRULE($.methodHeader);
    $.SUBRULE($.methodBody);
  });
  $.RULE("interfaceMethodModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Private) },
      { ALT: () => $.CONSUME(t.Abstract) },
      { ALT: () => $.CONSUME(t.Default) },
      { ALT: () => $.CONSUME(t.Static) },
      { ALT: () => $.CONSUME(t.Strictfp) }
    ]);
  });
  $.RULE("annotationInterfaceDeclaration", () => {
    $.CONSUME(t.At);
    $.CONSUME(t.Interface);
    $.SUBRULE($.typeIdentifier);
    $.SUBRULE($.annotationInterfaceBody);
  });
  $.RULE("annotationInterfaceBody", () => {
    $.CONSUME(t.LCurly);
    $.MANY(() => {
      $.SUBRULE($.annotationInterfaceMemberDeclaration);
    });
    $.CONSUME(t.RCurly);
  });
  $.RULE("annotationInterfaceMemberDeclaration", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotationInterfaceElementDeclaration) },
      { ALT: () => $.SUBRULE($.constantDeclaration) },
      { ALT: () => $.SUBRULE($.classDeclaration) },
      { ALT: () => $.SUBRULE($.interfaceDeclaration) },
      { ALT: () => $.CONSUME(t.Semicolon) }
    ]);
  });
  $.RULE("annotationInterfaceElementDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.annotationInterfaceElementModifier);
    });
    $.SUBRULE($.unannType);
    $.CONSUME(t.Identifier);
    $.CONSUME(t.LBrace);
    $.CONSUME(t.RBrace);
    $.OPTION(() => {
      $.SUBRULE($.dims);
    });
    $.OPTION2(() => {
      $.SUBRULE($.defaultValue);
    });
    $.CONSUME(t.Semicolon);
  });
  $.RULE("annotationInterfaceElementModifier", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.annotation) },
      { ALT: () => $.CONSUME(t.Public) },
      { ALT: () => $.CONSUME(t.Abstract) }
    ]);
  });
  $.RULE("defaultValue", () => {
    $.CONSUME(t.Default);
    $.SUBRULE($.elementValue);
  });
  $.RULE("annotation", () => {
    $.CONSUME(t.At);
    $.SUBRULE($.typeName);
    $.OPTION(() => {
      $.CONSUME(t.LBrace);
      $.OR({
        DEF: [
          // https://docs.oracle.com/javase/specs/jls/se22/html/jls-9.html#jls-NormalAnnotation
          { ALT: () => $.SUBRULE($.elementValuePairList) },
          // https://docs.oracle.com/javase/specs/jls/se22/html/jls-9.html#jls-SingleElementAnnotation
          { ALT: () => $.SUBRULE($.elementValue) },
          {
            ALT: () => {
            }
          }
        ],
        IGNORE_AMBIGUITIES: true
      });
      $.CONSUME(t.RBrace);
    });
  });
  $.RULE("elementValuePairList", () => {
    $.SUBRULE($.elementValuePair);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.elementValuePair);
    });
  });
  $.RULE("elementValuePair", () => {
    $.CONSUME(t.Identifier);
    $.CONSUME(t.Equals);
    $.SUBRULE($.elementValue);
  });
  $.RULE("elementValue", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.conditionalExpression) },
      { ALT: () => $.SUBRULE($.elementValueArrayInitializer) },
      { ALT: () => $.SUBRULE($.annotation) }
    ]);
  });
  $.RULE("elementValueArrayInitializer", () => {
    $.CONSUME(t.LCurly);
    $.OPTION(() => {
      $.SUBRULE($.elementValueList);
    });
    $.OPTION2(() => {
      $.CONSUME(t.Comma);
    });
    $.CONSUME(t.RCurly);
  });
  $.RULE("elementValueList", () => {
    $.SUBRULE($.elementValue);
    $.MANY({
      GATE: () => tokenMatcher($.LA(2).tokenType, t.RCurly) === false,
      DEF: () => {
        $.CONSUME(t.Comma);
        $.SUBRULE2($.elementValue);
      }
    });
  });
}

// node_modules/java-parser/src/productions/arrays.js
function defineRules7($, t) {
  $.RULE("arrayInitializer", () => {
    $.CONSUME(t.LCurly);
    $.OPTION(() => {
      $.SUBRULE($.variableInitializerList);
    });
    $.OPTION2(() => {
      $.CONSUME(t.Comma);
    });
    $.CONSUME(t.RCurly);
  });
  $.RULE("variableInitializerList", () => {
    $.SUBRULE($.variableInitializer);
    $.MANY({
      // The optional last "Comma" of an "arrayInitializer"
      GATE: () => tokenMatcher(this.LA(2).tokenType, t.RCurly) === false,
      DEF: () => {
        $.CONSUME(t.Comma);
        $.SUBRULE2($.variableInitializer);
      }
    });
  });
}

// node_modules/java-parser/src/productions/blocks-and-statements.js
function defineRules8($, t) {
  $.RULE("block", () => {
    $.CONSUME(t.LCurly);
    $.OPTION(() => {
      $.SUBRULE($.blockStatements);
    });
    $.CONSUME(t.RCurly);
  });
  $.RULE("blockStatements", () => {
    $.SUBRULE($.blockStatement);
    $.MANY(() => {
      $.SUBRULE2($.blockStatement);
    });
  });
  $.RULE("blockStatement", () => {
    $.OR({
      DEF: [
        { ALT: () => $.SUBRULE($.localVariableDeclarationStatement) },
        { ALT: () => $.SUBRULE($.classDeclaration) },
        { ALT: () => $.SUBRULE($.interfaceDeclaration) },
        { ALT: () => $.SUBRULE($.statement) }
      ],
      IGNORE_AMBIGUITIES: true
    });
  });
  $.RULE("localVariableDeclarationStatement", () => {
    $.SUBRULE($.localVariableDeclaration);
    $.CONSUME(t.Semicolon);
  });
  $.RULE("localVariableDeclaration", () => {
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.localVariableType);
    $.SUBRULE($.variableDeclaratorList);
  });
  $.RULE("localVariableType", () => {
    $.OR({
      DEF: [
        { ALT: () => $.SUBRULE($.unannType) },
        { ALT: () => $.CONSUME(t.Var) }
      ],
      IGNORE_AMBIGUITIES: true
    });
  });
  $.RULE("statement", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.statementWithoutTrailingSubstatement) },
      { ALT: () => $.SUBRULE($.labeledStatement) },
      // Spec deviation: combined "IfThenStatement" and "IfThenElseStatement"
      { ALT: () => $.SUBRULE($.ifStatement) },
      { ALT: () => $.SUBRULE($.whileStatement) },
      { ALT: () => $.SUBRULE($.forStatement) }
    ]);
  });
  $.RULE("statementWithoutTrailingSubstatement", () => {
    $.OR({
      DEF: [
        { ALT: () => $.SUBRULE($.block) },
        { ALT: () => $.SUBRULE($.yieldStatement) },
        { ALT: () => $.SUBRULE($.emptyStatement) },
        {
          GATE: () => !tokenMatcher(this.LA(1).tokenType, t.Switch),
          ALT: () => $.SUBRULE($.expressionStatement)
        },
        { ALT: () => $.SUBRULE($.assertStatement) },
        { ALT: () => $.SUBRULE($.switchStatement) },
        { ALT: () => $.SUBRULE($.doStatement) },
        { ALT: () => $.SUBRULE($.breakStatement) },
        { ALT: () => $.SUBRULE($.continueStatement) },
        { ALT: () => $.SUBRULE($.returnStatement) },
        { ALT: () => $.SUBRULE($.synchronizedStatement) },
        { ALT: () => $.SUBRULE($.throwStatement) },
        { ALT: () => $.SUBRULE($.tryStatement) }
      ],
      IGNORE_AMBIGUITIES: true
    });
  });
  $.RULE("emptyStatement", () => {
    $.CONSUME(t.Semicolon);
  });
  $.RULE("labeledStatement", () => {
    $.CONSUME(t.Identifier);
    $.CONSUME(t.Colon);
    $.SUBRULE($.statement);
  });
  $.RULE("expressionStatement", () => {
    $.SUBRULE($.statementExpression);
    $.CONSUME(t.Semicolon);
  });
  $.RULE("statementExpression", () => {
    $.SUBRULE($.expression);
  });
  $.RULE("ifStatement", () => {
    $.CONSUME(t.If);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.statement);
    $.OPTION(() => {
      $.CONSUME(t.Else);
      $.SUBRULE2($.statement);
    });
  });
  $.RULE("assertStatement", () => {
    $.CONSUME(t.Assert);
    $.SUBRULE($.expression);
    $.OPTION(() => {
      $.CONSUME(t.Colon);
      $.SUBRULE2($.expression);
    });
    $.CONSUME(t.Semicolon);
  });
  $.RULE("switchStatement", () => {
    $.CONSUME(t.Switch);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.switchBlock);
  });
  $.RULE("switchBlock", () => {
    $.CONSUME(t.LCurly);
    $.OR([
      {
        ALT: () => {
          $.SUBRULE($.switchRule);
          $.MANY(() => $.SUBRULE2($.switchRule));
        }
      },
      { ALT: () => $.MANY2(() => $.SUBRULE($.switchBlockStatementGroup)) }
    ]);
    $.CONSUME(t.RCurly);
  });
  $.RULE("switchBlockStatementGroup", () => {
    $.SUBRULE($.switchLabel);
    $.CONSUME(t.Colon);
    $.OPTION(() => {
      $.SUBRULE($.blockStatements);
    });
  });
  $.RULE("switchLabel", () => {
    $.OR([
      {
        ALT: () => {
          $.CONSUME(t.Case);
          $.OR2([
            {
              ALT: () => {
                $.CONSUME(t.Null);
                $.OPTION2(() => {
                  $.CONSUME3(t.Comma);
                  $.CONSUME(t.Default);
                });
              }
            },
            {
              ALT: () => {
                $.SUBRULE($.casePattern);
                $.MANY(() => {
                  $.CONSUME(t.Comma);
                  $.SUBRULE2($.casePattern);
                });
                $.OPTION(() => {
                  $.SUBRULE($.guard);
                });
              }
            },
            {
              GATE: () => !tokenMatcher($.LA(1).tokenType, t.Null),
              ALT: () => {
                $.SUBRULE($.caseConstant);
                $.MANY2(() => {
                  $.CONSUME2(t.Comma);
                  $.SUBRULE2($.caseConstant);
                });
              }
            }
          ]);
        }
      },
      { ALT: () => $.CONSUME2(t.Default) }
    ]);
  });
  $.RULE("switchRule", () => {
    $.SUBRULE($.switchLabel);
    $.CONSUME(t.Arrow);
    $.OR([
      { ALT: () => $.SUBRULE($.throwStatement) },
      { ALT: () => $.SUBRULE($.block) },
      {
        ALT: () => {
          $.SUBRULE($.expression);
          $.CONSUME(t.Semicolon);
        }
      }
    ]);
  });
  $.RULE("caseConstant", () => {
    $.SUBRULE($.conditionalExpression);
  });
  $.RULE("casePattern", () => {
    $.SUBRULE($.pattern);
  });
  $.RULE("whileStatement", () => {
    $.CONSUME(t.While);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.statement);
  });
  $.RULE("doStatement", () => {
    $.CONSUME(t.Do);
    $.SUBRULE($.statement);
    $.CONSUME(t.While);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
    $.CONSUME(t.Semicolon);
  });
  $.RULE("forStatement", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.basicForStatement) },
      { ALT: () => $.SUBRULE($.enhancedForStatement) }
    ]);
  });
  $.RULE("basicForStatement", () => {
    $.CONSUME(t.For);
    $.CONSUME(t.LBrace);
    $.OPTION(() => {
      $.SUBRULE($.forInit);
    });
    $.CONSUME(t.Semicolon);
    $.OPTION2(() => {
      $.SUBRULE($.expression);
    });
    $.CONSUME2(t.Semicolon);
    $.OPTION3(() => {
      $.SUBRULE($.forUpdate);
    });
    $.CONSUME(t.RBrace);
    $.SUBRULE($.statement);
  });
  $.RULE("forInit", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.localVariableDeclaration) },
      { ALT: () => $.SUBRULE($.statementExpressionList) }
    ]);
  });
  $.RULE("forUpdate", () => {
    $.SUBRULE($.statementExpressionList);
  });
  $.RULE("statementExpressionList", () => {
    $.SUBRULE($.statementExpression);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.statementExpression);
    });
  });
  $.RULE("enhancedForStatement", () => {
    $.CONSUME(t.For);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.localVariableDeclaration);
    $.CONSUME(t.Colon);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.statement);
  });
  $.RULE("breakStatement", () => {
    $.CONSUME(t.Break);
    $.OPTION(() => {
      $.CONSUME(t.Identifier);
    });
    $.CONSUME(t.Semicolon);
  });
  $.RULE("continueStatement", () => {
    $.CONSUME(t.Continue);
    $.OPTION(() => {
      $.CONSUME(t.Identifier);
    });
    $.CONSUME(t.Semicolon);
  });
  $.RULE("returnStatement", () => {
    $.CONSUME(t.Return);
    $.OPTION(() => {
      $.SUBRULE($.expression);
    });
    $.CONSUME(t.Semicolon);
  });
  $.RULE("throwStatement", () => {
    $.CONSUME(t.Throw);
    $.SUBRULE($.expression);
    $.CONSUME(t.Semicolon);
  });
  $.RULE("synchronizedStatement", () => {
    $.CONSUME(t.Synchronized);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.block);
  });
  $.RULE("tryStatement", () => {
    $.OR([
      {
        ALT: () => {
          $.CONSUME(t.Try);
          $.SUBRULE($.block);
          $.OR2([
            {
              ALT: () => {
                $.SUBRULE($.catches);
                $.OPTION(() => {
                  $.SUBRULE($.finally);
                });
              }
            },
            { ALT: () => $.SUBRULE2($.finally) }
          ]);
        }
      },
      { ALT: () => $.SUBRULE($.tryWithResourcesStatement) }
    ]);
  });
  $.RULE("catches", () => {
    $.SUBRULE($.catchClause);
    $.MANY(() => {
      $.SUBRULE2($.catchClause);
    });
  });
  $.RULE("catchClause", () => {
    $.CONSUME(t.Catch);
    $.CONSUME(t.LBrace);
    $.SUBRULE($.catchFormalParameter);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.block);
  });
  $.RULE("catchFormalParameter", () => {
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.catchType);
    $.SUBRULE($.variableDeclaratorId);
  });
  $.RULE("catchType", () => {
    $.SUBRULE($.unannClassType);
    $.MANY(() => {
      $.CONSUME(t.Or);
      $.SUBRULE2($.classType);
    });
  });
  $.RULE("finally", () => {
    $.CONSUME(t.Finally);
    $.SUBRULE($.block);
  });
  $.RULE("tryWithResourcesStatement", () => {
    $.CONSUME(t.Try);
    $.SUBRULE($.resourceSpecification);
    $.SUBRULE($.block);
    $.OPTION(() => {
      $.SUBRULE($.catches);
    });
    $.OPTION2(() => {
      $.SUBRULE($.finally);
    });
  });
  $.RULE("resourceSpecification", () => {
    $.CONSUME(t.LBrace);
    $.SUBRULE($.resourceList);
    $.OPTION(() => {
      $.CONSUME(t.Semicolon);
    });
    $.CONSUME(t.RBrace);
  });
  $.RULE("resourceList", () => {
    $.SUBRULE($.resource);
    $.MANY({
      GATE: () => tokenMatcher($.LA(2).tokenType, t.RBrace) === false,
      DEF: () => {
        $.CONSUME(t.Semicolon);
        $.SUBRULE2($.resource);
      }
    });
  });
  $.RULE("resource", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.localVariableDeclaration) },
      { ALT: () => $.SUBRULE($.variableAccess) }
    ]);
  });
  $.RULE("yieldStatement", () => {
    $.CONSUME(t.Yield);
    $.SUBRULE($.expression);
    $.CONSUME(t.Semicolon);
  });
  $.RULE("variableAccess", () => {
    $.SUBRULE($.primary);
  });
}

// node_modules/java-parser/src/productions/expressions.js
function defineRules9($, t) {
  $.RULE("expression", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.lambdaExpression) },
      { ALT: () => $.SUBRULE($.conditionalExpression) }
    ]);
  });
  $.RULE("lambdaExpression", () => {
    $.SUBRULE($.lambdaParameters);
    $.CONSUME(t.Arrow);
    $.SUBRULE($.lambdaBody);
  });
  $.RULE("lambdaParameters", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.lambdaParametersWithBraces) },
      { ALT: () => $.CONSUME(t.Identifier) },
      { ALT: () => $.CONSUME(t.Underscore) }
    ]);
  });
  $.RULE("lambdaParametersWithBraces", () => {
    $.CONSUME(t.LBrace);
    $.OPTION(() => {
      $.SUBRULE($.lambdaParameterList);
    });
    $.CONSUME(t.RBrace);
  });
  $.RULE("lambdaParameterList", () => {
    $.OR([
      {
        GATE: () => {
          const nextTokType = this.LA(1).tokenType;
          const nextNextTokType = this.LA(2).tokenType;
          return (tokenMatcher(nextTokType, t.Identifier) || tokenMatcher(nextTokType, t.Underscore)) && (tokenMatcher(nextNextTokType, t.RBrace) || tokenMatcher(nextNextTokType, t.Comma));
        },
        ALT: () => $.SUBRULE($.conciseLambdaParameterList)
      },
      { ALT: () => $.SUBRULE($.normalLambdaParameterList) }
    ]);
  });
  $.RULE("conciseLambdaParameterList", () => {
    $.SUBRULE($.conciseLambdaParameter);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.conciseLambdaParameter);
    });
  });
  $.RULE("normalLambdaParameterList", () => {
    $.SUBRULE($.normalLambdaParameter);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.normalLambdaParameter);
    });
  });
  $.RULE("normalLambdaParameter", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.regularLambdaParameter) },
      { ALT: () => $.SUBRULE($.variableArityParameter) }
    ]);
  });
  $.RULE("regularLambdaParameter", () => {
    $.MANY(() => {
      $.SUBRULE($.variableModifier);
    });
    $.SUBRULE($.lambdaParameterType);
    $.SUBRULE($.variableDeclaratorId);
  });
  $.RULE("lambdaParameterType", () => {
    $.OR({
      DEF: [
        { ALT: () => $.SUBRULE($.unannType) },
        { ALT: () => $.CONSUME(t.Var) }
      ],
      IGNORE_AMBIGUITIES: true
    });
  });
  $.RULE("conciseLambdaParameter", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.Identifier) },
      { ALT: () => $.CONSUME(t.Underscore) }
    ]);
  });
  $.RULE("lambdaBody", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.expression) },
      { ALT: () => $.SUBRULE($.block) }
    ]);
  });
  $.RULE("conditionalExpression", () => {
    $.SUBRULE($.binaryExpression);
    $.OPTION(() => {
      $.CONSUME(t.QuestionMark);
      $.SUBRULE($.expression);
      $.CONSUME(t.Colon);
      $.SUBRULE2($.expression);
    });
  });
  $.RULE("binaryExpression", () => {
    $.SUBRULE($.unaryExpression);
    $.MANY(() => {
      $.OR({
        DEF: [
          {
            ALT: () => {
              $.CONSUME(t.Instanceof);
              $.OR1([
                { ALT: () => $.SUBRULE($.pattern) },
                { ALT: () => $.SUBRULE($.referenceType) }
              ]);
            }
          },
          {
            ALT: () => {
              $.CONSUME(t.AssignmentOperator);
              $.SUBRULE2($.expression);
            }
          },
          // This is an example of why Java does not have a well designed grammar
          // See: https://manas.tech/blog/2008/10/12/why-java-generics-dont-have-problems-with-right-shift-operator.html
          // TODO: ensure the LT/GT sequences have no whitespace between each other.
          {
            // TODO: this is a bug in Chevrotain lookahead calculation. the "BinaryOperator" token can match "Less" or "Greater"
            //   as well, but because it is a **token Category** Chevrotain does not understand it need to looks two tokens ahead.
            GATE: () => tokenMatcher($.LA(2).tokenType, t.Less) || tokenMatcher($.LA(2).tokenType, t.Greater),
            ALT: () => {
              $.OR2([
                {
                  GATE: () => $.LA(1).startOffset + 1 === $.LA(2).startOffset,
                  ALT: () => {
                    $.CONSUME(t.Less);
                    $.CONSUME2(t.Less);
                  }
                },
                {
                  GATE: () => $.LA(1).startOffset + 1 === $.LA(2).startOffset,
                  ALT: () => {
                    $.CONSUME(t.Greater);
                    $.CONSUME2(t.Greater);
                    $.OPTION({
                      GATE: () => $.LA(0).startOffset + 1 === $.LA(1).startOffset,
                      DEF: () => $.CONSUME3(t.Greater)
                    });
                  }
                }
              ]);
              $.SUBRULE2($.unaryExpression);
            }
          },
          {
            ALT: () => {
              $.CONSUME(t.BinaryOperator);
              $.SUBRULE3($.unaryExpression);
            }
          }
        ],
        IGNORE_AMBIGUITIES: true
        // the ambiguity between 1 and 4 options is resolved by the order (instanceOf is first)
      });
    });
  });
  $.RULE("unaryExpression", () => {
    $.MANY(() => {
      $.CONSUME(t.UnaryPrefixOperator);
    });
    $.SUBRULE($.primary);
    $.MANY2(() => {
      $.CONSUME(t.UnarySuffixOperator);
    });
  });
  $.RULE("unaryExpressionNotPlusMinus", () => {
    $.MANY(() => {
      $.CONSUME(t.UnaryPrefixOperatorNotPlusMinus);
    });
    $.SUBRULE($.primary);
    $.MANY2(() => {
      $.CONSUME(t.UnarySuffixOperator);
    });
  });
  $.RULE("primary", () => {
    $.SUBRULE($.primaryPrefix);
    $.MANY(() => {
      $.SUBRULE($.primarySuffix);
    });
  });
  $.RULE("primaryPrefix", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.literal) },
      { ALT: () => $.CONSUME(t.This) },
      { ALT: () => $.CONSUME(t.Void) },
      { ALT: () => $.SUBRULE($.unannPrimitiveTypeWithOptionalDimsSuffix) },
      { ALT: () => $.SUBRULE($.fqnOrRefType) },
      { ALT: () => $.SUBRULE($.castExpression) },
      { ALT: () => $.SUBRULE($.parenthesisExpression) },
      { ALT: () => $.SUBRULE($.newExpression) },
      { ALT: () => $.SUBRULE($.switchStatement) }
    ]);
  });
  $.RULE("primarySuffix", () => {
    $.OR([
      {
        ALT: () => {
          $.CONSUME(t.Dot);
          $.OR2([
            { ALT: () => $.CONSUME(t.This) },
            {
              ALT: () => $.SUBRULE($.unqualifiedClassInstanceCreationExpression)
            },
            {
              ALT: () => {
                $.OPTION(() => {
                  $.SUBRULE($.typeArguments);
                });
                $.CONSUME(t.Identifier);
              }
            },
            { ALT: () => $.SUBRULE($.templateArgument) }
          ]);
        }
      },
      { ALT: () => $.SUBRULE($.methodInvocationSuffix) },
      { ALT: () => $.SUBRULE($.classLiteralSuffix) },
      { ALT: () => $.SUBRULE($.arrayAccessSuffix) },
      { ALT: () => $.SUBRULE($.methodReferenceSuffix) }
    ]);
  });
  $.RULE("fqnOrRefType", () => {
    $.SUBRULE($.fqnOrRefTypePartFirst);
    $.MANY({
      // avoids ambiguity with primary suffixes
      GATE: () => {
        const nextNextToken = $.LA(2);
        return !(tokenMatcher(nextNextToken, t.Class) || tokenMatcher(nextNextToken, t.This) || tokenMatcher(nextNextToken, t.New) || tokenMatcher(nextNextToken, t.StringLiteral) || tokenMatcher(nextNextToken, t.TextBlock) || tokenMatcher(nextNextToken, t.StringTemplateBegin) || tokenMatcher(nextNextToken, t.TextBlockTemplateBegin));
      },
      DEF: () => {
        $.CONSUME(t.Dot);
        $.SUBRULE2($.fqnOrRefTypePartRest);
      }
    });
    $.OPTION({
      // it is not enough to check only the opening "[", we must avoid conflict with
      // arrayAccessSuffix
      GATE: () => tokenMatcher($.LA(1).tokenType, t.At) || tokenMatcher($.LA(2).tokenType, t.RSquare),
      DEF: () => {
        $.SUBRULE($.dims);
      }
    });
  });
  $.RULE("fqnOrRefTypePartRest", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.OPTION(() => $.SUBRULE2($.typeArguments));
    $.SUBRULE($.fqnOrRefTypePartCommon);
  });
  $.RULE("fqnOrRefTypePartCommon", () => {
    $.OR([
      { ALT: () => $.CONSUME(t.Identifier) },
      { ALT: () => $.CONSUME(t.Super) }
    ]);
    let isRefTypeInMethodRef = false;
    if (tokenMatcher($.LA(1).tokenType, t.Less)) {
      isRefTypeInMethodRef = this.BACKTRACK_LOOKAHEAD($.isRefTypeInMethodRef);
    }
    $.OPTION2({
      // unrestricted typeArguments here would create an ambiguity with "LessThan" operator
      // e.g: "var x = a < b;"
      // The "<" would be parsed as the beginning of a "typeArguments"
      // and we will get an error: "expecting '>' but found: ';'"
      GATE: () => isRefTypeInMethodRef,
      DEF: () => {
        $.SUBRULE3($.typeArguments);
      }
    });
  });
  $.RULE("fqnOrRefTypePartFirst", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.SUBRULE($.fqnOrRefTypePartCommon);
  });
  $.RULE("parenthesisExpression", () => {
    $.CONSUME(t.LBrace);
    $.SUBRULE($.expression);
    $.CONSUME(t.RBrace);
  });
  $.RULE("castExpression", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.primitiveCastExpression) },
      { ALT: () => $.SUBRULE($.referenceTypeCastExpression) }
    ]);
  });
  $.RULE("primitiveCastExpression", () => {
    $.CONSUME(t.LBrace);
    $.SUBRULE($.primitiveType);
    $.CONSUME(t.RBrace);
    $.SUBRULE($.unaryExpression);
  });
  $.RULE("referenceTypeCastExpression", () => {
    $.CONSUME(t.LBrace);
    $.SUBRULE($.referenceType);
    $.MANY(() => {
      $.SUBRULE($.additionalBound);
    });
    $.CONSUME(t.RBrace);
    $.OR([
      { ALT: () => $.SUBRULE($.lambdaExpression) },
      { ALT: () => $.SUBRULE($.unaryExpressionNotPlusMinus) }
    ]);
  });
  $.RULE("newExpression", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.arrayCreationExpression) },
      { ALT: () => $.SUBRULE($.unqualifiedClassInstanceCreationExpression) }
    ]);
  });
  $.RULE("unqualifiedClassInstanceCreationExpression", () => {
    $.CONSUME(t.New);
    $.OPTION(() => {
      $.SUBRULE($.typeArguments);
    });
    $.SUBRULE($.classOrInterfaceTypeToInstantiate);
    $.CONSUME(t.LBrace);
    $.OPTION2(() => {
      $.SUBRULE($.argumentList);
    });
    $.CONSUME(t.RBrace);
    $.OPTION3(() => {
      $.SUBRULE($.classBody);
    });
  });
  $.RULE("classOrInterfaceTypeToInstantiate", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.Identifier);
    $.MANY2(() => {
      $.CONSUME(t.Dot);
      $.MANY3(() => {
        $.SUBRULE2($.annotation);
      });
      $.CONSUME2(t.Identifier);
    });
    $.OPTION(() => {
      $.SUBRULE($.typeArgumentsOrDiamond);
    });
  });
  $.RULE("typeArgumentsOrDiamond", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.diamond) },
      { ALT: () => $.SUBRULE($.typeArguments) }
    ]);
  });
  $.RULE("diamond", () => {
    $.CONSUME(t.Less);
    $.CONSUME(t.Greater);
  });
  $.RULE("methodInvocationSuffix", () => {
    $.CONSUME(t.LBrace);
    $.OPTION2(() => {
      $.SUBRULE($.argumentList);
    });
    $.CONSUME(t.RBrace);
  });
  $.RULE("argumentList", () => {
    $.SUBRULE($.expression);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.expression);
    });
  });
  $.RULE("arrayCreationExpression", () => {
    $.CONSUME(t.New);
    $.OR([
      { ALT: () => $.SUBRULE($.primitiveType) },
      { ALT: () => $.SUBRULE($.classOrInterfaceType) }
    ]);
    $.OR2([
      {
        ALT: () => $.SUBRULE($.arrayCreationExpressionWithoutInitializerSuffix)
      },
      { ALT: () => $.SUBRULE($.arrayCreationWithInitializerSuffix) }
    ]);
  });
  $.RULE("arrayCreationExpressionWithoutInitializerSuffix", () => {
    $.SUBRULE($.dimExprs);
    $.OPTION(() => {
      $.SUBRULE($.dims);
    });
  });
  $.RULE("arrayCreationWithInitializerSuffix", () => {
    $.SUBRULE($.dims);
    $.SUBRULE($.arrayInitializer);
  });
  $.RULE("dimExprs", () => {
    $.SUBRULE($.dimExpr);
    $.MANY({
      // The GATE is to distinguish DimExpr from Dims :
      // the only difference between these two is the presence of an expression in the DimExpr
      // Example: If the GATE is not present double[3][] won't be parsed as the parser will try to parse "[]"
      // as a dimExpr instead of a dims
      GATE: () => tokenMatcher($.LA(2).tokenType, t.RSquare) === false,
      DEF: () => $.SUBRULE2($.dimExpr)
    });
  });
  $.RULE("dimExpr", () => {
    $.MANY(() => {
      $.SUBRULE($.annotation);
    });
    $.CONSUME(t.LSquare);
    $.SUBRULE($.expression);
    $.CONSUME(t.RSquare);
  });
  $.RULE("classLiteralSuffix", () => {
    $.MANY(() => {
      $.CONSUME(t.LSquare);
      $.CONSUME(t.RSquare);
    });
    $.CONSUME(t.Dot);
    $.CONSUME(t.Class);
  });
  $.RULE("arrayAccessSuffix", () => {
    $.CONSUME(t.LSquare);
    $.SUBRULE($.expression);
    $.CONSUME(t.RSquare);
  });
  $.RULE("methodReferenceSuffix", () => {
    $.CONSUME(t.ColonColon);
    $.OPTION(() => {
      $.SUBRULE($.typeArguments);
    });
    $.OR([
      { ALT: () => $.CONSUME(t.Identifier) },
      // TODO: a constructor method reference ("new") can only be used
      //   in specific contexts, but perhaps this verification is best left
      //   for a semantic analysis phase
      { ALT: () => $.CONSUME(t.New) }
    ]);
  });
  $.RULE("templateArgument", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.template) },
      { ALT: () => $.CONSUME(t.StringLiteral) },
      { ALT: () => $.CONSUME(t.TextBlock) }
    ]);
  });
  $.RULE("template", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.stringTemplate) },
      { ALT: () => $.SUBRULE($.textBlockTemplate) }
    ]);
  });
  $.RULE("stringTemplate", () => {
    $.CONSUME(t.StringTemplateBegin);
    $.SUBRULE($.embeddedExpression);
    $.MANY(() => {
      $.CONSUME(t.StringTemplateMid);
      $.SUBRULE1($.embeddedExpression);
    });
    $.CONSUME(t.StringTemplateEnd);
  });
  $.RULE("textBlockTemplate", () => {
    $.CONSUME(t.TextBlockTemplateBegin);
    $.SUBRULE($.embeddedExpression);
    $.MANY(() => {
      $.CONSUME(t.TextBlockTemplateMid);
      $.SUBRULE1($.embeddedExpression);
    });
    $.CONSUME(t.TextBlockTemplateEnd);
  });
  $.RULE("embeddedExpression", () => {
    $.OPTION(() => {
      $.SUBRULE($.expression);
    });
  });
  $.RULE("pattern", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.typePattern) },
      { ALT: () => $.SUBRULE($.recordPattern) }
    ]);
  });
  $.RULE("typePattern", () => {
    $.SUBRULE($.localVariableDeclaration);
  });
  $.RULE("recordPattern", () => {
    $.SUBRULE($.referenceType);
    $.CONSUME(t.LBrace);
    $.OPTION(() => {
      $.SUBRULE($.componentPatternList);
    });
    $.CONSUME(t.RBrace);
  });
  $.RULE("componentPatternList", () => {
    $.SUBRULE($.componentPattern);
    $.MANY(() => {
      $.CONSUME(t.Comma);
      $.SUBRULE2($.componentPattern);
    });
  });
  $.RULE("componentPattern", () => {
    $.OR([
      { ALT: () => $.SUBRULE($.pattern) },
      { ALT: () => $.SUBRULE($.matchAllPattern) }
    ]);
  });
  $.RULE("matchAllPattern", () => {
    $.CONSUME(t.Underscore);
  });
  $.RULE("guard", () => {
    $.CONSUME(t.When);
    $.SUBRULE($.expression);
  });
  $.RULE("isRefTypeInMethodRef", () => {
    let result = void 0;
    $.SUBRULE($.typeArguments);
    const hasDims = $.OPTION(() => {
      $.SUBRULE($.dims);
    });
    const firstTokTypeAfterTypeArgs = this.LA(1).tokenType;
    if (tokenMatcher(firstTokTypeAfterTypeArgs, t.ColonColon)) {
      result = true;
    } else if (hasDims) {
      result = false;
    }
    $.OPTION2(() => {
      $.CONSUME(t.Dot);
      $.SUBRULE($.classOrInterfaceType);
    });
    if (result !== void 0) {
      return result;
    }
    const firstTokTypeAfterRefType = this.LA(1).tokenType;
    return tokenMatcher(firstTokTypeAfterRefType, t.ColonColon);
  });
}
function computeFirstForUnaryExpressionNotPlusMinus() {
  const firstUnaryExpressionNotPlusMinus = this.computeContentAssist(
    "unaryExpressionNotPlusMinus",
    []
  );
  const nextTokTypes = firstUnaryExpressionNotPlusMinus.map(
    (x) => x.nextTokenType
  );
  return nextTokTypes.filter((v, i, a) => a.indexOf(v) === i);
}

// node_modules/java-parser/src/comments.js
var import_findLast = __toESM(require_findLast(), 1);
function findUpperBoundToken(tokens, comment) {
  let diff;
  let i;
  let current;
  let len = tokens.length;
  i = 0;
  while (len) {
    diff = len >>> 1;
    current = i + diff;
    if (tokens[current].startOffset > comment.startOffset) {
      len = diff;
    } else {
      i = current + 1;
      len -= diff + 1;
    }
  }
  return i;
}
function isPrettierIgnoreComment(comment) {
  return comment.image.match(
    /(\/\/(\s*)prettier-ignore(\s*))|(\/\*(\s*)prettier-ignore(\s*)\*\/)/gm
  );
}
function isFormatterOffOnComment(comment) {
  return comment.image.match(
    /(\/\/(\s*)@formatter:(off|on)(\s*))|(\/\*(\s*)@formatter:(off|on)(\s*)\*\/)/gm
  );
}
function completeMostEnclosiveCSTNodeByOffset(tokens, mostEnclosiveCstNodeByStartOffset, mostEnclosiveCstNodeByEndOffset) {
  tokens.forEach((token) => {
    if (mostEnclosiveCstNodeByStartOffset[token.startOffset] === void 0) {
      mostEnclosiveCstNodeByStartOffset[token.startOffset] = token;
    }
    if (mostEnclosiveCstNodeByEndOffset[token.endOffset] === void 0) {
      mostEnclosiveCstNodeByEndOffset[token.endOffset] = token;
    }
  });
}
function extendRangeOffset(comments, tokens) {
  let position;
  comments.forEach((comment) => {
    position = findUpperBoundToken(tokens, comment);
    const extendedStartOffset = position - 1 < 0 ? comment.startOffset : tokens[position - 1].endOffset;
    const extendedEndOffset = position == tokens.length ? comment.endOffset : tokens[position].startOffset;
    comment.extendedOffset = {
      startOffset: extendedStartOffset,
      endOffset: extendedEndOffset
    };
  });
}
function mapCommentsByExtendedRange(comments) {
  const commentsByExtendedEndOffset = {};
  const commentsByExtendedStartOffset = {};
  comments.forEach((comment) => {
    const extendedStartOffset = comment.extendedOffset.startOffset;
    const extendedEndOffset = comment.extendedOffset.endOffset;
    if (commentsByExtendedEndOffset[extendedEndOffset] === void 0) {
      commentsByExtendedEndOffset[extendedEndOffset] = [comment];
    } else {
      commentsByExtendedEndOffset[extendedEndOffset].push(comment);
    }
    if (commentsByExtendedStartOffset[extendedStartOffset] === void 0) {
      commentsByExtendedStartOffset[extendedStartOffset] = [comment];
    } else {
      commentsByExtendedStartOffset[extendedStartOffset].push(comment);
    }
  });
  return { commentsByExtendedEndOffset, commentsByExtendedStartOffset };
}
function shouldAttachTrailingComments(comment, node, mostEnclosiveCstNodeByStartOffset) {
  if (isPrettierIgnoreComment(comment)) {
    return false;
  }
  const nextNode = mostEnclosiveCstNodeByStartOffset[comment.extendedOffset.endOffset];
  if (nextNode === void 0) {
    return true;
  }
  const nodeEndLine = node.location !== void 0 ? node.location.endLine : node.endLine;
  if (comment.startLine !== nodeEndLine) {
    return false;
  }
  const nextNodeStartLine = nextNode.location !== void 0 ? nextNode.location.startLine : nextNode.startLine;
  return comment.endLine !== nextNodeStartLine;
}
function attachComments(tokens, comments, mostEnclosiveCstNodeByStartOffset, mostEnclosiveCstNodeByEndOffset) {
  if (tokens.length === 0) {
    mostEnclosiveCstNodeByStartOffset[NaN].leadingComments = comments;
    return;
  }
  completeMostEnclosiveCSTNodeByOffset(
    tokens,
    mostEnclosiveCstNodeByStartOffset,
    mostEnclosiveCstNodeByEndOffset
  );
  extendRangeOffset(comments, tokens);
  const { commentsByExtendedStartOffset, commentsByExtendedEndOffset } = mapCommentsByExtendedRange(comments);
  const commentsToAttach = new Set(comments);
  Object.keys(mostEnclosiveCstNodeByEndOffset).forEach((endOffset) => {
    if (commentsByExtendedStartOffset[endOffset] !== void 0) {
      const nodeTrailingComments = commentsByExtendedStartOffset[endOffset].filter((comment) => {
        return shouldAttachTrailingComments(
          comment,
          mostEnclosiveCstNodeByEndOffset[endOffset],
          mostEnclosiveCstNodeByStartOffset
        ) && commentsToAttach.has(comment);
      });
      if (nodeTrailingComments.length > 0) {
        mostEnclosiveCstNodeByEndOffset[endOffset].trailingComments = nodeTrailingComments;
      }
      nodeTrailingComments.forEach((comment) => {
        commentsToAttach.delete(comment);
      });
    }
  });
  Object.keys(mostEnclosiveCstNodeByStartOffset).forEach((startOffset) => {
    if (commentsByExtendedEndOffset[startOffset] !== void 0) {
      const nodeLeadingComments = commentsByExtendedEndOffset[startOffset].filter((comment) => commentsToAttach.has(comment));
      if (nodeLeadingComments.length > 0) {
        mostEnclosiveCstNodeByStartOffset[startOffset].leadingComments = nodeLeadingComments;
      }
      for (let i = 0; i < nodeLeadingComments.length; i++) {
        if (isPrettierIgnoreComment(nodeLeadingComments[i])) {
          const node = mostEnclosiveCstNodeByStartOffset[startOffset];
          const ignoreNode = node.name === "blockStatements" ? node.children.blockStatement[0] : node;
          ignoreNode.ignore = true;
          break;
        }
      }
    }
  });
}
function matchFormatterOffOnPairs(comments) {
  const onOffComments = comments.filter(
    (comment) => isFormatterOffOnComment(comment)
  );
  let isPreviousCommentOff = false;
  let isCurrentCommentOff = true;
  const pairs = [];
  let paired = {};
  onOffComments.forEach((comment) => {
    isCurrentCommentOff = comment.image.slice(-3) === "off";
    if (!isPreviousCommentOff) {
      if (isCurrentCommentOff) {
        paired.off = comment;
      }
    } else {
      if (!isCurrentCommentOff) {
        paired.on = comment;
        pairs.push(paired);
        paired = {};
      }
    }
    isPreviousCommentOff = isCurrentCommentOff;
  });
  if (onOffComments.length > 0 && isCurrentCommentOff) {
    paired.on = void 0;
    pairs.push(paired);
  }
  return pairs;
}
function shouldNotFormat(node, commentPairs) {
  const matchingPair = (0, import_findLast.default)(
    commentPairs,
    (comment) => comment.off.endOffset < node.location.startOffset
  );
  if (matchingPair !== void 0 && (matchingPair.on === void 0 || matchingPair.on.startOffset > node.location.endOffset)) {
    node.ignore = true;
  }
}

// node_modules/java-parser/src/parser.js
var JavaParser = class extends CstParser {
  constructor() {
    super(allTokens, {
      lookaheadStrategy: new LLStarLookaheadStrategy({
        logging: getSkipValidations() ? () => {
        } : void 0
      }),
      nodeLocationTracking: "full",
      // traceInitPerf: 2,
      skipValidations: getSkipValidations()
    });
    const $ = this;
    this.mostEnclosiveCstNodeByStartOffset = {};
    this.mostEnclosiveCstNodeByEndOffset = {};
    $.RULE("typeIdentifier", () => {
      $.CONSUME(tokenDictionary.Identifier);
    });
    defineRules.call(this, $, tokenDictionary);
    defineRules2.call(this, $, tokenDictionary);
    defineRules3.call(this, $, tokenDictionary);
    defineRules5.call(this, $, tokenDictionary);
    defineRules4.call(this, $, tokenDictionary);
    defineRules6.call(this, $, tokenDictionary);
    defineRules7.call(this, $, tokenDictionary);
    defineRules8.call(this, $, tokenDictionary);
    defineRules9.call(this, $, tokenDictionary);
    this.firstForUnaryExpressionNotPlusMinus = [];
    this.performSelfAnalysis();
    this.firstForUnaryExpressionNotPlusMinus = computeFirstForUnaryExpressionNotPlusMinus.call(this);
  }
  cstPostNonTerminal(ruleCstResult, ruleName) {
    if (this.isBackTracking()) {
      return;
    }
    super.cstPostNonTerminal(ruleCstResult, ruleName);
    this.mostEnclosiveCstNodeByStartOffset[ruleCstResult.location.startOffset] = ruleCstResult;
    this.mostEnclosiveCstNodeByEndOffset[ruleCstResult.location.endOffset] = ruleCstResult;
    shouldNotFormat(ruleCstResult, this.onOffCommentPairs);
  }
  BACKTRACK_LOOKAHEAD(production, errValue = false) {
    return this.ACTION(() => {
      this.isBackTrackingStack.push(1);
      const orgState = this.saveRecogState();
      try {
        const { ruleName, originalGrammarAction } = production;
        try {
          this.ruleInvocationStateUpdate(
            this.fullRuleNameToShort[ruleName],
            ruleName,
            this.subruleIdx
          );
          return originalGrammarAction.call(this);
        } catch (e) {
          return this.invokeRuleCatch(e, true, () => void 0);
        } finally {
          this.ruleFinallyStateUpdate();
        }
      } catch (e) {
        if (isRecognitionException(e)) {
          return errValue;
        }
        throw e;
      } finally {
        this.reloadRecogState(orgState);
        this.isBackTrackingStack.pop();
      }
    });
  }
  setOnOffCommentPairs(onOffCommentPairs) {
    this.onOffCommentPairs = onOffCommentPairs;
  }
};

// node_modules/java-parser/src/index.js
var parser = new JavaParser();
var BaseJavaCstVisitor = parser.getBaseCstVisitorConstructor();
var BaseJavaCstVisitorWithDefaults = parser.getBaseCstVisitorConstructorWithDefaults();
function lexAndParse(inputText, entryPoint = "compilationUnit") {
  const lexResult = lexer_default.tokenize(inputText);
  if (lexResult.errors.length > 0) {
    const firstError = lexResult.errors[0];
    throw Error(
      "Sad sad panda, lexing errors detected in line: " + firstError.line + ", column: " + firstError.column + "!\n" + firstError.message
    );
  }
  const tokens = lexResult.tokens;
  parser.input = tokens;
  parser.mostEnclosiveCstNodeByStartOffset = {};
  parser.mostEnclosiveCstNodeByEndOffset = {};
  parser.setOnOffCommentPairs(
    matchFormatterOffOnPairs(lexResult.groups.comments)
  );
  const cst = parser[entryPoint]();
  if (parser.errors.length > 0) {
    const error = parser.errors[0];
    throw Error(
      "Sad sad panda, parsing errors detected in line: " + error.token.startLine + ", column: " + error.token.startColumn + "!\n" + error.message + "!\n	->" + error.context.ruleStack.join("\n	->")
    );
  }
  attachComments(
    tokens,
    lexResult.groups.comments,
    parser.mostEnclosiveCstNodeByStartOffset,
    parser.mostEnclosiveCstNodeByEndOffset
  );
  return { cst, tokens };
}
function parse(inputText, entryPoint = "compilationUnit") {
  return lexAndParse(inputText, entryPoint).cst;
}
var src_default = {
  lexAndParse,
  parse,
  BaseJavaCstVisitor,
  BaseJavaCstVisitorWithDefaults
};
export {
  BaseJavaCstVisitor,
  BaseJavaCstVisitorWithDefaults,
  src_default as default,
  lexAndParse,
  parse
};
//# sourceMappingURL=java-parser.js.map
