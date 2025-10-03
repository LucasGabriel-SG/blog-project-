import { Body, Controller, Param, Patch, Post, Res } from '@nestjs/common';
import { CreatePostDto } from './dto/create.post.dto';
import { PostsService} from './posts.service';
import type { Response } from 'express';
import { PostIdDto } from './dto/post.id.dto.';
import { UpdateDto } from './dto/update.post.dto';
import { PostDto } from './dto/post.dto';

@Controller('posts')
export class PostsController {
  
  constructor( private readonly postsService: PostsService) {}

  @Post()
  async create( @Res() response: Response,@Body() post: PostDto) {
  await this.postsService.CreatePost(post);

  response.status(201).json({
    mensagem: "Post Criado Com Sucesso!"
  })
  }

  @Patch(":id")
   async update(@Param("id") { id }:PostIdDto, @Res() response: Response, @Body() post: UpdateDto ) {

    await this.postsService.update(post, id)
    response.status(200).json({
      mensagem: "Post Editado Com Sucesso!"
    })
   }
  
}
