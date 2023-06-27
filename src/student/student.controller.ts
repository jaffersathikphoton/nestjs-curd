import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDTO } from './dto/student.dto';
import { Student } from './interface/studentInterface';

@Controller('student')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}
  @Post()
  async createStudent(@Body() data: StudentDTO): Promise<Student> {
    return await this.StudentService.createStudent(data);
  }

  @Get()
  async getAllStudent(): Promise<Student[]> {
    return await this.StudentService.getStudent();
  }

  @Get(':id')
  async getOneStudent(@Param('id') id: string): Promise<Student> {
    return await this.StudentService.getOneStudent(id);
  }
  @Put(':id')
  async updateOneStudent(
    @Param('id') id: string,
    @Body() data: StudentDTO,
  ): Promise<Student> {
    return await this.StudentService.updateOneStudent(id, data);
  }
  @Delete(':id')
  async deleteOneStudent(@Param('id') id: string): Promise<Student> {
    return this.StudentService.deleteOneStudent(id);
  }
}
