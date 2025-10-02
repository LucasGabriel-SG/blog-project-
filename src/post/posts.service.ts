import { Injectable, Post } from '@nestjs/common';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostsService {
  private posts: PostDto[] = [];

  createPost(post: PostDto) {
    this.posts.push(post);
  }
  deletePost(post: PostDto) {
    this.posts.push(post);
  }

  updatePost(post: PostDto) {
    this.posts.push(post);
  }
}
