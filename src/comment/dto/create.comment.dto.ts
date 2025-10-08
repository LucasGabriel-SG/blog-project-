
import { ApiProperty } from "@nestjs/swagger";
import { IsString, } from "class-validator";
import { CommentDto } from "./comment.dto";


export class CreateCommentDto extends CommentDto {
   

    @ApiProperty({ required: true })
    @IsString()
    id: number;


    
}
