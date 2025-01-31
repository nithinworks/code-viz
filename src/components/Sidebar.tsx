import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Flower as Flow, MessageSquare, Code2, BrainCircuit, Search, Layout } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const currentPath = window.location.pathname;
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const isMobileView = window.innerWidth < 1024;
      setIsMobile(isMobileView);
      setIsExpanded(!isMobileView);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle click outside for mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobile && isExpanded && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, isExpanded]);

  const navItems = [
    {
      title: 'Dashboard',
      href: '/',
      icon: Layout,
      isDisabled: false,
      badge: {
        text: 'New',
        variant: 'default' as const
      }
    },
    {
      title: 'Code Visualizer',
      href: '/visualizer',
      icon: BrainCircuit,
      isDisabled: false,
      badge: {
        text: 'Beta',
        variant: 'default' as const
      }
    },
    {
      title: 'JS Visualizer',
      href: '/js-visualizer',
      icon: Code2,
      isDisabled: false,
      badge: {
        text: 'Free',
        variant: 'success' as const
      }
    },
    {
      title: 'Code Analysis',
      href: '/analysis',
      icon: Search,
      isDisabled: false,
      badge: {
        text: 'Free',
        variant: 'success' as const
      }
    },
    {
      title: 'Diagram Creator',
      href: '/flow',
      icon: Flow,
      isDisabled: false,
      badge: {
        text: 'Hot',
        variant: 'destructive' as const
      }
    },
    {
      title: 'Task Board',
      href: '/tasks',
      icon: Layout,
      isDisabled: false,
      badge: {
        text: 'New',
        variant: 'destructive' as const
      }
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: MessageSquare,
      isDisabled: false,
      badge: {
        text: 'Get in touch',
        variant: 'secondary' as const
      }
    }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isExpanded && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-20"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Mobile Toggle Button */}
      {isMobile && !isExpanded && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsExpanded(true)}
          className="fixed top-4 left-4 z-30 h-8 w-8 bg-background/50 backdrop-blur-sm border shadow-sm"
        >
          <Menu className="h-5 w-5" />
        </Button>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={cn(
          'fixed top-0 bottom-0 left-0 z-30 flex flex-col border-r bg-background/95 backdrop-blur-md transition-all duration-300',
          isExpanded ? 'w-64' : 'w-16',
          isMobile && !isExpanded && '-translate-x-full',
          className
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between border-b px-4">
          {isExpanded && (
            <>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0070f3] to-[#00a2ff] flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-white">CV</span>
                </div>
                <span className="text-base font-semibold">Code Flow</span>
              </div>
              {isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsExpanded(false)}
                  className="h-8 w-8"
                >
                  <X className="h-5 w-5" />
                </Button>
              )}
            </>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-3">
          {navItems.map((item) => (
            <Button
              key={item.title}
              variant="ghost"
              className={cn(
                'group w-full justify-start gap-3 transition-colors relative h-11',
                !item.isDisabled && 'hover:bg-[#0070f3]/5 hover:text-foreground',
                currentPath === item.href && !item.isDisabled && 'bg-[#0070f3]/10 text-[#0070f3]'
              )}
              asChild={!item.isDisabled}
              disabled={item.isDisabled}
            >
              <a 
                href={item.href} 
                className={cn(
                  "flex items-center w-full",
                  item.isDisabled && "opacity-50"
                )}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {isExpanded && (
                  <>
                    <span className="text-sm font-medium truncate">{item.title}</span>
                    {item.badge && (
                      <Badge 
                        variant={item.badge.variant} 
                        className={cn(
                          "ml-auto shrink-0",
                          item.isDisabled && "opacity-100"
                        )}
                      >
                        {item.badge.text}
                      </Badge>
                    )}
                  </>
                )}
              </a>
            </Button>
          ))}
        </nav>

        {/* Footer */}
        {isExpanded && (
          <div className="border-t p-3">
            <div className="flex items-center gap-3 px-2 py-1.5">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#0070f3] to-[#00a2ff] flex items-center justify-center shrink-0">
                <span className="text-xs font-semibold text-white">CV</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-medium truncate">Code Flow</span>
                <span className="text-xs text-muted-foreground">v1.0.0</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
