import { ApiProperty } from "@nestjs/swagger/dist/decorators";
import { CommentDto } from "./comment.dto";

export class CommentIdDto extends CommentDto{
     @ApiProperty({ required: true })
        id: number;
}