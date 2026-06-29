import { Injectable } from '@nestjs/common';
import { Project } from './dto';

@Injectable()
export class ProjectsService {
  private projects: Project[] = [
    { id: '1', name: 'Alpha Project' },
    { id: '2', name: 'Beta Project' },
  ];

  async findAll(): Promise<Project[]> {
    return this.projects;
  }

  async delete(id: string): Promise<void> {
    this.projects = this.projects.filter((p) => p.id !== id);
  }
}
