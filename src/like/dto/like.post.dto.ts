import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";



export class LikePostDto{

    @ApiProperty( {required: true})
    isLike: boolean;
    

    @IsInt()
    postId: number;
    
}