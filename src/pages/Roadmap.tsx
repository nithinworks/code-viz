import React from 'react';
import { Milestone, CheckCircle2, Clock, Rocket } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface RoadmapItem {
  title: string;
  description: string;
  status: 'completed' | 'upcoming' | 'future';
  badge?: {
    text: string;
    variant: 'default' | 'success' | 'destructive' | 'secondary';
  };
}

const roadmapItems: RoadmapItem[] = [
  // Completed Features
  {
    title: 'Code to Diagram Generation',
    description: 'Convert code into visual diagrams using AI',
    status: 'completed',
    badge: { text: 'Released', variant: 'success' }
  },
  {
    title: 'Authentication System',
    description: 'Secure user authentication and profile management',
    status: 'completed',
    badge: { text: 'Released', variant: 'success' }
  },
  {
    title: 'Interactive Diagram Editor',
    description: 'Create and edit diagrams with a user-friendly interface',
    status: 'completed',
    badge: { text: 'Released', variant: 'success' }
  },
  {
    title: 'Code Analysis',
    description: 'Analyze code structure and provide insights',
    status: 'completed',
    badge: { text: 'Released', variant: 'success' }
  },

  // Upcoming Features
  {
    title: 'Algorithm Visualizer',
    description: 'Visualize common algorithms with step-by-step animations',
    status: 'upcoming',
    badge: { text: 'In Progress', variant: 'default' }
  },
  {
    title: 'Code Beautifier',
    description: 'Format and beautify code with customizable rules',
    status: 'upcoming',
    badge: { text: 'In Progress', variant: 'default' }
  },
  {
    title: 'Code Minifier',
    description: 'Minify code for production deployment',
    status: 'upcoming',
    badge: { text: 'Planned', variant: 'secondary' }
  },

  // Future Work
  {
    title: 'Collaborative Editing',
    description: 'Real-time collaboration on diagrams',
    status: 'future'
  },
  {
    title: 'Version Control',
    description: 'Track changes and maintain diagram history',
    status: 'future'
  },
  {
    title: 'AI Code Generation',
    description: 'Generate code from diagrams using AI',
    status: 'future'
  },
  {
    title: 'Custom Themes',
    description: 'Personalize the appearance of diagrams',
    status: 'future'
  },
  {
    title: 'Export to Multiple Formats',
    description: 'Export diagrams to various file formats',
    status: 'future'
  }
];

export function Roadmap() {
  const completed = roadmapItems.filter(item => item.status === 'completed');
  const upcoming = roadmapItems.filter(item => item.status === 'upcoming');
  const future = roadmapItems.filter(item => item.status === 'future');

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Milestone className="w-6 h-6 text-[#0070f3]" />
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a2ff]">
            Roadmap
          </h1>
          <Badge variant="default">New</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Completed Features */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            <h2 className="text-lg font-semibold">Completed</h2>
          </div>
          <div className="space-y-3">
            {completed.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/10 relative overflow-hidden group transition-all hover:bg-emerald-500/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-medium text-emerald-600 dark:text-emerald-400">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                  {item.badge && (
                    <Badge variant={item.badge.variant}>{item.badge.text}</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Features */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-5 h-5 text-[#0070f3]" />
            <h2 className="text-lg font-semibold">Upcoming</h2>
          </div>
          <div className="space-y-3">
            {upcoming.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-[#0070f3]/5 border border-[#0070f3]/10 relative overflow-hidden group transition-all hover:bg-[#0070f3]/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-medium text-[#0070f3]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                  {item.badge && (
                    <Badge variant={item.badge.variant}>{item.badge.text}</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Work */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-6">
            <Rocket className="w-5 h-5 text-purple-500" />
            <h2 className="text-lg font-semibold">Future</h2>
          </div>
          <div className="space-y-3">
            {future.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-purple-500/5 border border-purple-500/10 relative overflow-hidden group transition-all hover:bg-purple-500/10"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-medium text-purple-600 dark:text-purple-400">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                  {item.badge && (
                    <Badge variant={item.badge.variant}>{item.badge.text}</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}