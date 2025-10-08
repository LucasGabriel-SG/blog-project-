import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CommentDto } from './dto/comment.dto';
import { DeleteCommentDto } from './dto/delete.comment.dto';

@Injectable()
export class CommentService {
constructor (
    @Inject ('COMMENT_PROVIDER')
    
    private commentRepository: typeof Comment

  ) {}

async CreateComment(comment:CommentDto) {

  try {
    await this.commentRepository.create({
        content: comment.content,
        text: comment.text
        
    })
    
  } catch (error) {

    throw new HttpException ("Post Criado Com Sucesso!", 201)
  }


}

async delete(comment: DeleteCommentDto, id: number ){ 
       try {
         await this.commentRepository.delete({
           content: comment.content,
           text: comment.text
         }, {where: {id}}  )
         
       } catch (error) {
         throw new HttpException ("Não Foi Possivel deletar ou Alterar Usuário", 500)
       }
     }





}
