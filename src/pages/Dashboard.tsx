import React from 'react';
import { BrainCircuit, Code2, Search, Flower as Flow, Layout, Lightbulb } from 'lucide-react';
import { Spotlight } from '@/components/ui/spotlight';

const tools = [
  {
    title: 'Code Visualizer',
    description: 'Transform your code into beautiful, interactive diagrams',
    icon: BrainCircuit,
    href: '/visualizer',
    gradient: 'from-[#0070f3] to-[#00a2ff]'
  },
  {
    title: 'JS Visualizer',
    description: 'Visualize JavaScript code execution and flow',
    icon: Code2,
    href: '/js-visualizer',
    gradient: 'from-emerald-500 to-emerald-400'
  },
  {
    title: 'Code Analysis',
    description: 'Get insights and suggestions for your code',
    icon: Search,
    href: '/analysis',
    gradient: 'from-purple-500 to-purple-400'
  },
  {
    title: 'Diagram Creator',
    description: 'Create custom diagrams and flowcharts',
    icon: Flow,
    href: '/flow',
    gradient: 'from-pink-500 to-pink-400'
  },
  {
    title: 'Task Board',
    description: 'Organize and track your development tasks',
    icon: Layout,
    href: '/tasks',
    gradient: 'from-amber-500 to-amber-400'
  }
];

const codingTips = [
  "Use meaningful variable names to improve code readability",
  "Comment your code, but make the comments meaningful",
  "Keep your functions small and focused on a single task",
  "Learn keyboard shortcuts for your IDE to boost productivity",
  "Write tests before implementing features (TDD)",
  "Use version control even for small projects",
  "Regularly refactor your code to maintain quality",
  "Handle errors gracefully with try-catch blocks",
  "Keep your dependencies up to date",
  "Document your code and APIs",
  "Use consistent code formatting",
  "Cache expensive operations when possible",
  "Optimize your database queries",
  "Follow the DRY (Don't Repeat Yourself) principle",
  "Use meaningful commit messages"
];

export function Dashboard() {
  const today = new Date();
  const tipIndex = (today.getFullYear() * 100 + today.getMonth() * 31 + today.getDate()) % codingTips.length;
  const todaysTip = codingTips[tipIndex];

  return (
    <div className="max-w-[1200px] mx-auto space-y-8">
      {/* Hero Section */}
      <Spotlight className="px-8 py-16">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#0070f3] to-[#00a2ff] flex items-center justify-center mb-8">
            <BrainCircuit className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a2ff] mb-4 relative">
            Visualize Your Code
            {/* Spotlight effect on text */}
            <div className="absolute -inset-x-20 -inset-y-4 hidden sm:block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0070f3]/20 to-[#00a2ff]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </h1>
          
          <p className="max-w-2xl text-lg text-muted-foreground mb-8">
            Transform your code into beautiful, interactive diagrams. Understand complex codebases, 
            create documentation, and share your ideas visually.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/visualizer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0070f3] text-white font-medium hover:bg-[#0070f3]/90 transition-colors"
            >
              Get Started
              <BrainCircuit className="w-4 h-4" />
            </a>
            <a
              href="/js-visualizer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border font-medium hover:bg-white/20 transition-colors"
            >
              Try JS Visualizer
              <Code2 className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Spotlight>

      {/* Daily Tip Bar */}
      <div className="w-full flex items-center justify-center py-3 bg-gradient-to-r from-[#0070f3]/5 via-[#00a2ff]/5 to-[#0070f3]/5 border-y backdrop-blur-sm">
        <div className="flex items-center gap-2 px-4">
          <Lightbulb className="w-4 h-4 text-[#0070f3] shrink-0" />
          <span className="font-medium text-[#0070f3] whitespace-nowrap">Daily Tip:</span>
          <span className="text-muted-foreground truncate max-w-[600px]">{todaysTip}</span>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {tools.map((tool) => (
          <a
            key={tool.title}
            href={tool.href}
            className="group relative overflow-hidden rounded-xl p-6 bg-white/5 backdrop-blur-md border hover:bg-white/10 transition-colors"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity" style={{
              backgroundImage: `linear-gradient(to bottom right, ${tool.gradient})`
            }} />

            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br opacity-90 group-hover:opacity-100 transition-opacity text-white" style={{
                backgroundImage: `linear-gradient(to bottom right, ${tool.gradient})`
              }}>
                <tool.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-semibold mb-2 text-foreground">{tool.title}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}