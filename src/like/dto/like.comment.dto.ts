import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";



export class  LikeCommentDto{

    @ApiProperty({required: true})
    isLike: boolean;

    @IsInt()
    commentId: number;
}