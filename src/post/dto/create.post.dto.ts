import { ApiProperty } from "@nestjs/swagger";
import { IsString, } from "class-validator";


export class CreatePostDto {
    create(post: CreatePostDto) {
        throw new Error('Method not implemented.');
    }

    @ApiProperty({ required: true })
    @IsString()
    id: number;

    @ApiProperty({ required: true })
    @IsString()
    title: string;


    @ApiProperty({ required: true })
    @IsString()
    description: string;
    is_active: boolean;


    
}
