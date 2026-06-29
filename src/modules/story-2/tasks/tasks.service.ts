import { Injectable } from '@nestjs/common';
import { CreateTaskDto, TaskResponseDto } from './dto';

@Injectable()
export class TasksService {
  private tasks: TaskResponseDto[] = [{ id: '1', title: 'Task 1' }];

  findAll(): TaskResponseDto[] {
    return this.tasks;
  }

  create(dto: CreateTaskDto): TaskResponseDto {
    const newTask = { id: Math.random().toString(36), ...dto };
    this.tasks.push(newTask);
    return newTask;
  }
}
