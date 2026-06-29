'use client';

import React from 'react';
import { ProjectListProps } from './ProjectList.types';

export const ProjectList: React.FC<ProjectListProps> = ({ 
  projects, 
  isLoading = false, 
  error = null,
  onDelete 
}) => {
  if (isLoading) {
    return <div className="p-8 text-center text-[var(--color-text-secondary)]">Loading projects...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-[var(--color-error)]">Error: {error}</div>;
  }

  if (!projects || projects.length === 0) {
    return <div className="p-8 text-center text-[var(--color-text-secondary)]">No projects found. Create one to get started!</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <div 
          key={project.id} 
          className="border border-[var(--color-border)] rounded-lg p-6 bg-[var(--color-surface)] shadow-sm hover:shadow-md transition-shadow"
        >
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">{project.name}</h3>
          <p className="text-[var(--color-text-secondary)] mb-4 text-sm line-clamp-2">{project.description}</p>
          <div className="flex justify-between items-center text-xs text-[var(--color-text-tertiary)]">
            <span>{project.memberCount} members</span>
            <span>Updated: {new Date(project.lastUpdated).toLocaleDateString()}</span>
          </div>
          {onDelete && (
            <button 
              onClick={() => onDelete(project.id)}
              className="mt-4 text-[var(--color-error)] text-sm font-medium hover:underline"
            >
              Delete Project
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
