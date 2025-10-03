import { HttpException, Inject, Injectable  } from '@nestjs/common';

import { Post } from 'src/database/models/post.model';
import { CreatePostDto } from './dto/create.post.dto';
import { UpdateDto } from './dto/update.post.dto';
import { PostDto } from './dto/post.dto';


@Injectable()
export class PostsService {

  constructor (
    @Inject ('POST_PROVIDER')
    
    private postRepository: typeof Post

  ) {}

async CreatePost(post:PostDto) {

  try {
    await this.postRepository.create({
      title: post.title,
      description: post.description


    } as Post)
    
  } catch (error) {

    throw new HttpException ("Post Criado Com Sucesso!", 201)
  }
  
}




  async update(post: UpdateDto, id: number ){ 
    try {
      await this.postRepository.update({
        title: post.title,
        description: post.description
      }, {where: {id}}  )
      
    } catch (error) {
      throw new HttpException ("Não Foi Possivel deletar ou Alterar Usuário", 500)
    }
  }

}
