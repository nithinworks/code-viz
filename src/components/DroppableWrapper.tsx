import React, { useState, useEffect } from 'react';
import { Droppable, DroppableProps } from 'react-beautiful-dnd';

// Extend DroppableProps to include children render prop
interface StrictModeDroppableProps extends Omit<DroppableProps, 'children'> {
  children: (provided: any, snapshot: any) => React.ReactNode;
}

export function StrictModeDroppable({ 
  children,
  direction = 'vertical', // Default parameter instead of defaultProps
  type = 'DEFAULT',      // Default parameter instead of defaultProps
  ...props 
}: StrictModeDroppableProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Using Promise to handle the animation frame
    const animation = new Promise<void>(resolve => {
      requestAnimationFrame(() => {
        resolve();
      });
    });

    animation.then(() => {
      setEnabled(true);
    });

    return () => {
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <Droppable
      direction={direction}
      type={type}
      {...props}
    >
      {children}
    </Droppable>
  );
}