import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostDto } from './dto/create.post.dto';
import { UpdatePostDto } from './dto/update.post.dto';
import { DeletePostDto } from './dto/delete.post.dto';

@Controller('posts')
export class PostsController {
  updatePost: any;
  deletePost: any;

  constructor(
    private readonly createPost: CreatePostDto,
    updatePost: UpdatePostDto,
    deletePost: DeletePostDto,
  ) {}

  @Post('create')
  create(@Body() post: CreatePostDto) {
    this.createPost.create(post);
  }

  @Post('update')
  update(@Body() post: UpdatePostDto) {
    this.updatePost.update(post);
  }

  @Post('delete')
  delete(@Body() post: DeletePostDto) {
    this.deletePost.delete(post);
  }
}
