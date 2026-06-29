import { Controller, Get, Delete, Param, HttpCode } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectDto } from '../tasks/dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @ApiOperation({ summary: 'List projects' })
  @ApiResponse({ status: 200, type: [ProjectDto] })
  findAll(): ProjectDto[] {
    return this.projectsService.findAll();
  }

  @Delete(':id')
  @HttpCode(204)
  @ApiOperation({ summary: 'Delete project' })
  @ApiResponse({ status: 204, description: 'Deleted' })
  delete(@Param('id') id: string): void {
    return this.projectsService.delete(id);
  }
}
