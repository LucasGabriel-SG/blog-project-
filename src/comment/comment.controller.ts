import { Body, Controller, Post } from '@nestjs/common';
import { CreateCommentDto } from './dto/create.comment.dto';

@Controller('comment')
export class CommentController {
    deleteComment: any;

    constructor(private readonly createComment: CreateCommentDto, deleteComment: CreateCommentDto) { }


    @Post('create')
        create(@Body() comment: CreateCommentDto) {
            this.createComment.create(comment);
        }

        @Post('delete')
        delete(@Body() comment: CreateCommentDto) {
            this.deleteComment.delete(comment);
        }


}
