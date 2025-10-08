import { HttpException, Inject, Injectable } from '@nestjs/common';

import { User } from '../database/models/user.model';
import { CreateUserDto } from './dto/create.user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_PROVIDER')
    private userRepository: typeof User
  ) {}
  async CreateUser(user: CreateUserDto) {
    try {
      await this.userRepository.create({
      username: user.username,
      password: user.password
    } as User)
    } catch (error) {
      throw new HttpException("Não foi Possivel Criar o Usuário", 500)
    }
  }

  async findAll(): Promise<User[]> {

    return this.findAll();

  }
  


}

