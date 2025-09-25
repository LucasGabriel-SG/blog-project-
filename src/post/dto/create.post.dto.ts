import { ApiProperty } from "@nestjs/swagger";
import { IsString, } from "class-validator";


export class CreatePostDto {

    @ApiProperty({ required: true })
    @IsString()
    title: string;


    @ApiProperty({ required: true })
    @IsString()
    description: string;
    is_active: boolean;


    
}
