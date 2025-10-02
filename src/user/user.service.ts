import { Injectable } from '@nestjs/common';

import { User } from '../database/models/user.model';

@Injectable()
export class UserService {
  constructor(private userModel: typeof User) {}

  async CreateUser(user: User) {
    return this.userModel.create(user);
  }

  async findAll(): Promise<User[]> {

    return this.userModel.findAll();

  }
  


}

