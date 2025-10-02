import { Injectable } from '@nestjs/common';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {

private comments: CommentDto[] = [];

    createComment(comment: CommentDto)  {
        this.comments.push(comment);

}
    deleteComment(comment: CommentDto)  {
        this.comments.push(comment);

}
}
