import React, { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import { Button } from '../ui/button';

interface EditTaskModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (task: {
    content: string;
    priority: 'low' | 'medium' | 'high';
    assignedTo: string;
    bgColor: string;
  }) => void;
  task: {
    content: string;
    priority: 'low' | 'medium' | 'high';
    assignedTo: string;
    bgColor: string;
  };
}

const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Low', class: 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20' },
  { value: 'medium', label: 'Medium', class: 'bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20' },
  { value: 'high', label: 'High', class: 'bg-red-500/10 text-red-500 hover:bg-red-500/20' }
] as const;

const BG_COLORS = [
  { value: 'bg-white/50 dark:bg-white/5 backdrop-blur-md backdrop-saturate-150', label: 'Default', class: 'bg-white/50 dark:bg-white/5 border-2 border-gray-200/20 dark:border-white/10' },
  { value: 'bg-blue-500/5 backdrop-blur-md backdrop-saturate-150', label: 'Blue', class: 'bg-blue-500/5 border border-blue-500/20' },
  { value: 'bg-purple-500/5 backdrop-blur-md backdrop-saturate-150', label: 'Purple', class: 'bg-purple-500/5 border border-purple-500/20' },
  { value: 'bg-pink-500/5 backdrop-blur-md backdrop-saturate-150', label: 'Pink', class: 'bg-pink-500/5 border border-pink-500/20' },
  { value: 'bg-green-500/5 backdrop-blur-md backdrop-saturate-150', label: 'Green', class: 'bg-green-500/5 border border-green-500/20' },
  { value: 'bg-yellow-500/5 backdrop-blur-md backdrop-saturate-150', label: 'Yellow', class: 'bg-yellow-500/5 border border-yellow-500/20' }
];

export function EditTaskModal({ open, onClose, onSave, task }: EditTaskModalProps) {
  const [taskName, setTaskName] = useState(task.content);
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>(task.priority);
  const [assignmentType, setAssignmentType] = useState<'me' | 'other'>(task.assignedTo === 'Myself' ? 'me' : 'other');
  const [assignedTo, setAssignedTo] = useState(task.assignedTo === 'Myself' ? '' : task.assignedTo);
  const [bgColor, setBgColor] = useState(task.bgColor);

  // Update form when task changes
  useEffect(() => {
    setTaskName(task.content);
    setPriority(task.priority);
    setAssignmentType(task.assignedTo === 'Myself' ? 'me' : 'other');
    setAssignedTo(task.assignedTo === 'Myself' ? '' : task.assignedTo);
    setBgColor(task.bgColor);
  }, [task]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!taskName.trim()) return;

    onSave({
      content: taskName.trim(),
      priority,
      assignedTo: assignmentType === 'me' ? 'Myself' : assignedTo.trim(),
      bgColor
    });

    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Task</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Task Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Task Name</label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-full h-9 px-3 rounded-md border bg-background text-foreground border-input focus:outline-none focus:ring-2 focus:ring-[#0070f3]"
              placeholder="Enter task name"
              required
            />
          </div>

          {/* Priority */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Priority</label>
            <div className="flex gap-2">
              {PRIORITY_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setPriority(option.value)}
                  className={`
                    px-3 py-1 rounded-full text-sm font-medium transition-colors
                    ${option.class}
                    ${priority === option.value ? 'ring-2 ring-offset-2 ring-offset-background' : ''}
                  `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Assignment */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Assigned To</label>
            <div className="space-y-3">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setAssignmentType('me')}
                  className={`
                    px-3 py-1 rounded-full text-sm font-medium transition-colors
                    ${assignmentType === 'me' 
                      ? 'bg-[#0070f3] text-white' 
                      : 'bg-muted hover:bg-muted/80'}
                  `}
                >
                  Myself
                </button>
                <button
                  type="button"
                  onClick={() => setAssignmentType('other')}
                  className={`
                    px-3 py-1 rounded-full text-sm font-medium transition-colors
                    ${assignmentType === 'other' 
                      ? 'bg-[#0070f3] text-white' 
                      : 'bg-muted hover:bg-muted/80'}
                  `}
                >
                  Other
                </button>
              </div>
              {assignmentType === 'other' && (
                <input
                  type="text"
                  value={assignedTo}
                  onChange={(e) => setAssignedTo(e.target.value)}
                  className="w-full h-9 px-3 rounded-md border bg-background text-foreground border-input focus:outline-none focus:ring-2 focus:ring-[#0070f3]"
                  placeholder="Enter assignee name"
                  required
                />
              )}
            </div>
          </div>

          {/* Background Color */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Card Style</label>
            <div className="flex flex-wrap gap-2">
              {BG_COLORS.map((color) => (
                <button
                  key={color.value}
                  type="button"
                  onClick={() => setBgColor(color.value)}
                  className={`
                    w-8 h-8 rounded-full transition-transform border border-white/10
                    ${color.class}
                    ${bgColor === color.value ? 'ring-2 ring-[#0070f3] ring-offset-2 ring-offset-background scale-110' : ''}
                  `}
                  title={color.label}
                />
              ))}
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#0070f3] hover:bg-[#0070f3]/90 text-white gap-2"
            >
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}