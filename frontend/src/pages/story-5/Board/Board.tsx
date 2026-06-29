'use client';

import React, { useState } from 'react';
import { Task, BoardColumn } from './Board.types';

const COLUMNS: BoardColumn[] = [
  { id: 'todo', title: 'To Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'done', title: 'Done' },
];

export const ProjectBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Setup project skeleton', status: 'done', priority: 'high' },
    { id: '2', title: 'Design system tokens', status: 'in-progress', priority: 'medium' },
    { id: '3', title: 'Implement Kanban UI', status: 'todo', priority: 'high' },
  ]);

  const moveTask = (taskId: string, newStatus: Task['status']) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  return (
    <div className="flex gap-6 p-6 h-full overflow-x-auto bg-gray-50 min-h-screen">
      {COLUMNS.map(column => (
        <div key={column.id} className="flex flex-col w-80 bg-gray-100 rounded-lg p-4 shrink-0">
          <h2 className="font-semibold text-gray-700 mb-4 uppercase text-sm tracking-wider">
            {column.title}
          </h2>
          <div className="flex flex-col gap-3">
            {tasks
              .filter(t => t.status === column.id)
              .map(task => (
                <div 
                  key={task.id}
                  className="bg-white p-4 rounded shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium text-gray-900">{task.title}</h3>
                  <div className="mt-2 text-xs font-medium text-gray-500 capitalize bg-gray-100 w-fit px-2 py-1 rounded">
                    {task.priority}
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
