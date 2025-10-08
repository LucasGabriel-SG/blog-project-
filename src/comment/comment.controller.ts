import { Body, Controller, Delete, HttpException, Param, Post, Res } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import type { Response } from 'express';
import { DeleteCommentDto } from './dto/delete.comment.dto';
import { Comment, CommentIdDto } from 'sequelize-typescript';


@Controller('comment')
export class CommentController {
    

    constructor(private readonly commentService: CommentService) { }


  @Post()
    async create( @Res() response: Response,@Body() comment: CommentDto) {
    await this.commentService.CreateComment(comment);

    response.status(201).json({
    mensagem: "Comentario Criado com Sucesso!"
  })

}

@Delete(":id")
   async update(@Param("id") { id }:CommentIdDto, @Res() response: Response, @Body() post: DeleteCommentDto ) {

    await this.commentService.delete(comment, id)
    response.status(200).json({
      mensagem: "Comentario Deletado Com Sucesso!"
    })
   }


   
   

}
