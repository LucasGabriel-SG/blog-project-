import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import type {Response} from 'express'


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
 async  create(@Res() response: Response, @Body() user: CreateUserDto, ) {
    await this.userService.CreateUser(user);
    response.status(200).json({
      mensagem: "Usuario criado com sucesso!"
    })
  }
}
