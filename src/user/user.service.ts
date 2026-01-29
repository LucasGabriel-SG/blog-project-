import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../database/models/user.model';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    return this.userModel.create(dto as any);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
