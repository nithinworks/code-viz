import React from 'react';
import { cn } from '@/lib/utils';

interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Spotlight({ children, className, ...props }: SpotlightProps) {
  const [position, setPosition] = React.useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const divRef = React.useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative overflow-hidden rounded-xl border bg-background',
        className
      )}
      {...props}
    >
      {/* Spotlight gradient */}
      <div
        className="pointer-events-none absolute inset-0 transition duration-300"
        style={{
          background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(0,112,243,0.06), transparent 40%)`,
          opacity
        }}
      />
      
      {/* Moving spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300"
        style={{
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(0,112,243,0.1), transparent 40%)`,
          opacity
        }}
      />
      
      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}