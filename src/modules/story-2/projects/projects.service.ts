import { Injectable, NotFoundException } from '@nestjs/common';
import { ProjectResponseDto } from './dto';

@Injectable()
export class ProjectsService {
  private projects: ProjectResponseDto[] = [{ id: 'p1', name: 'Main Project' }];

  findAll(): ProjectResponseDto[] {
    return this.projects;
  }

  delete(id: string): void {
    const index = this.projects.findIndex(p => p.id === id);
    if (index === -1) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    this.projects.splice(index, 1);
  }
}
