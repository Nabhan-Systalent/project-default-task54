import { Injectable } from '@nestjs/common';
import { TaskDto, CreateTaskDto } from './dto';

@Injectable()
export class TasksService {
  private tasks: TaskDto[] = [{ id: '1', title: 'Default Task' }];

  findAll(): TaskDto[] {
    return this.tasks;
  }

  create(createTaskDto: CreateTaskDto): TaskDto {
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      ...createTaskDto,
    };
    this.tasks.push(newTask);
    return newTask;
  }
}
