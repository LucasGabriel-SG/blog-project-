import { ApiProperty } from "@nestjs/swagger";

export class UpdatePostDto {

    @ApiProperty({ required: true })
    id: number;

    @ApiProperty({ required: false })
    title?: string;

    @ApiProperty({ required: false })
    description?: string;
    is_active?: boolean;

}