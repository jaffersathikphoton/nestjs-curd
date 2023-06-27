import { Injectable } from '@nestjs/common';
import { Student } from './interface/studentInterface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { StudentDTO } from './dto/student.dto';

@Injectable()
export class StudentService {
  constructor(@InjectModel('Student') private studentModel: Model<Student>) {}
  async getStudent(): Promise<Student[]> {
    return await this.studentModel.find().exec();
  }
  async getOneStudent(id: string): Promise<Student> {
    return await this.studentModel.findById(id).exec();
  }
  async createStudent(data: StudentDTO): Promise<Student> {
    const student = new this.studentModel(data);
    return await student.save();
  }
  async updateOneStudent(id: string, data: StudentDTO): Promise<Student> {
    return await this.studentModel
      .findByIdAndUpdate({ _id: id }, data, { new: true })
      .exec();
  }

  async deleteOneStudent(id: string): Promise<Student> {
    return await this.studentModel.findOneAndDelete({ _id: id }).exec();
  }
}
