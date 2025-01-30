import React, { useState, useEffect } from 'react';
import { Layout, Plus, Info } from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';
import { AddTaskModal } from '@/components/tasks/AddTaskModal';
import { EditTaskModal } from '@/components/tasks/EditTaskModal';
import { StrictModeDroppable } from '@/components/DroppableWrapper';

interface Task {
  id: string;
  content: string;
  priority: 'low' | 'medium' | 'high';
  assignedTo: string;
  bgColor: string;
  createdAt: number;
  expiresAt: number;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

interface Board {
  columns: {
    [key: string]: Column;
  };
  columnOrder: string[];
}

const STORAGE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

const initialBoard: Board = {
  columns: {
    todo: {
      id: 'todo',
      title: 'To Do',
      tasks: []
    },
    inProgress: {
      id: 'inProgress',
      title: 'In Progress',
      tasks: []
    },
    done: {
      id: 'done',
      title: 'Done',
      tasks: []
    }
  },
  columnOrder: ['todo', 'inProgress', 'done']
};

const priorityColors = {
  low: 'bg-emerald-500/10 text-emerald-500',
  medium: 'bg-yellow-500/10 text-yellow-500',
  high: 'bg-red-500/10 text-red-500'
};

export function TaskBoard() {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  // Load board from localStorage on mount with expiration check
  useEffect(() => {
    const savedBoard = localStorage.getItem('taskBoard');
    if (savedBoard) {
      try {
        const parsedBoard = JSON.parse(savedBoard);
        
        // Filter out expired tasks
        const now = Date.now();
        const cleanedBoard = {
          ...parsedBoard,
          columns: Object.fromEntries(
            Object.entries(parsedBoard.columns).map(([key, column]: [string, any]) => [
              key,
              {
                ...column,
                tasks: column.tasks.filter((task: Task) => task.expiresAt > now)
              }
            ])
          )
        };

        setBoard(cleanedBoard);
        
        // Save the cleaned board if any tasks were removed
        if (JSON.stringify(cleanedBoard) !== savedBoard) {
          localStorage.setItem('taskBoard', JSON.stringify(cleanedBoard));
        }
      } catch (error) {
        console.error('Error loading board:', error);
        toast.error('Failed to load saved tasks');
      }
    }
  }, []);

  // Save board to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('taskBoard', JSON.stringify(board));
  }, [board]);

  const handleDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceColumn = board.columns[source.droppableId];
    const destColumn = board.columns[destination.droppableId];
    const task = sourceColumn.tasks[source.index];

    // Create new arrays
    const newSourceTasks = Array.from(sourceColumn.tasks);
    newSourceTasks.splice(source.index, 1);

    const newDestTasks = Array.from(destColumn.tasks);
    newDestTasks.splice(destination.index, 0, task);

    // Update board
    const newBoard = {
      ...board,
      columns: {
        ...board.columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: newSourceTasks
        },
        [destination.droppableId]: {
          ...destColumn,
          tasks: newDestTasks
        }
      }
    };

    setBoard(newBoard);
  };

  const handleAddTask = (columnId: string) => {
    setSelectedColumn(columnId);
    setShowAddModal(true);
  };

  const handleEditTask = (columnId: string, task: Task) => {
    setSelectedColumn(columnId);
    setSelectedTask(task);
    setShowEditModal(true);
  };

  const handleSaveTask = (taskData: Omit<Task, 'id' | 'createdAt' | 'expiresAt'>) => {
    if (!selectedColumn) return;

    const now = Date.now();
    const newTask: Task = {
      id: now.toString(),
      ...taskData,
      createdAt: now,
      expiresAt: now + STORAGE_DURATION
    };

    const column = board.columns[selectedColumn];
    setBoard({
      ...board,
      columns: {
        ...board.columns,
        [selectedColumn]: {
          ...column,
          tasks: [...column.tasks, newTask]
        }
      }
    });

    toast.success('Task added');
  };

  const handleUpdateTask = (taskData: Omit<Task, 'id' | 'createdAt' | 'expiresAt'>) => {
    if (!selectedColumn || !selectedTask) return;

    const column = board.columns[selectedColumn];
    const taskIndex = column.tasks.findIndex(t => t.id === selectedTask.id);
    
    if (taskIndex === -1) return;

    const updatedTask: Task = {
      ...selectedTask,
      ...taskData
    };

    const newTasks = [...column.tasks];
    newTasks[taskIndex] = updatedTask;

    setBoard({
      ...board,
      columns: {
        ...board.columns,
        [selectedColumn]: {
          ...column,
          tasks: newTasks
        }
      }
    });

    toast.success('Task updated');
  };

  const handleDeleteTask = (columnId: string, taskId: string) => {
    const column = board.columns[columnId];
    const newTasks = column.tasks.filter(task => task.id !== taskId);

    setBoard({
      ...board,
      columns: {
        ...board.columns,
        [columnId]: {
          ...column,
          tasks: newTasks
        }
      }
    });

    toast.success('Task deleted');
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Layout className="w-6 h-6 text-[#0070f3]" />
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#0070f3] to-[#00a2ff]">
              Task Board
            </h1>
            <Badge variant="destructive">Hot</Badge>
          </div>
        </div>

        {/* Storage Info */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20">
          <Info className="w-4 h-4 text-yellow-500" />
          <p className="text-sm text-yellow-500">
            Tasks are stored locally and expire after 7 days
          </p>
        </div>
      </div>

      {/* Board */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {board.columnOrder.map(columnId => {
            const column = board.columns[columnId];

            return (
              <div
                key={column.id}
                className="flex flex-col h-[600px] rounded-xl bg-card border shadow-lg"
              >
                {/* Column Header */}
                <div className="p-4 border-b">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">{column.title}</h2>
                    <Badge variant="secondary">
                      {column.tasks.length}
                    </Badge>
                  </div>
                </div>

                {/* Tasks */}
                <StrictModeDroppable droppableId={column.id}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`flex-1 p-4 overflow-y-auto space-y-3 transition-colors ${
                        snapshot.isDraggingOver ? 'bg-accent' : ''
                      }`}
                    >
                      {column.tasks.map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`
                                p-4 rounded-lg border shadow-sm transition-shadow
                                ${task.bgColor}
                                ${snapshot.isDragging ? 'shadow-lg ring-2 ring-[#0070f3]' : ''}
                              `}
                              onClick={() => handleEditTask(column.id, task)}
                            >
                              <div className="space-y-2">
                                <p className="text-sm">{task.content}</p>
                                <div className="flex items-center justify-between gap-2">
                                  <Badge
                                    className={priorityColors[task.priority]}
                                  >
                                    {task.priority}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">
                                    {task.assignedTo}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </StrictModeDroppable>

                {/* Add Task */}
                <div className="p-4 border-t">
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={() => handleAddTask(column.id)}
                  >
                    <Plus className="w-4 h-4" />
                    Add Task
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </DragDropContext>

      {/* Add Task Modal */}
      {showAddModal && (
        <AddTaskModal
          open={showAddModal}
          onClose={() => {
            setShowAddModal(false);
            setSelectedColumn(null);
          }}
          onSave={handleSaveTask}
        />
      )}

      {/* Edit Task Modal */}
      {showEditModal && selectedTask && (
        <EditTaskModal
          open={showEditModal}
          onClose={() => {
            setShowEditModal(false);
            setSelectedColumn(null);
            setSelectedTask(null);
          }}
          onSave={handleUpdateTask}
          task={selectedTask}
        />
      )}
    </div>
  );
}