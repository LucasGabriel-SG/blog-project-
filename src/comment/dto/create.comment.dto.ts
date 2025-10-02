
import { ApiProperty } from "@nestjs/swagger";
import { IsString, } from "class-validator";


export class CreateCommentDto {
    create(comment: CreateCommentDto) {
        throw new Error('Method not implemented.');
    }

    @ApiProperty({ required: true })
    @IsString()
    id: number;

    @ApiProperty({ required: true })
    @IsString()
    content: string;


    @ApiProperty({ required: true })
    @IsString()
    text: string;
    is_active: boolean;


    
}
