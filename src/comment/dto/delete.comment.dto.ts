import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class DeletePostDto {
    @ApiProperty({ required: true })
    @IsString()
    id: number;
}