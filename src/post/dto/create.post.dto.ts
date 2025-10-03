import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, } from "class-validator";

import { PostDto } from "./post.dto";


export class CreatePostDto extends PostDto   {

    @IsOptional()  
    @ApiProperty({ required: true })
    @IsString()
    id: number;








    
}
