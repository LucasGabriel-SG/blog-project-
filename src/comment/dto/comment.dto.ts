import { IsString } from "class-validator";


export class CommentDto {

    @IsString()
    content: string;
    
    @IsString()
    text: string;
   
}   
