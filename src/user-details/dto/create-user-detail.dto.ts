import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, Length } from "class-validator";
export class CreateUserDetailDto {
    @ApiProperty()
    @IsOptional()
    @Length(3, 100, { message: 'The field must be between 3 and 100 characters.' })
    name:string;

    @ApiProperty()
    @IsOptional()
    @Length(3, 10, { message: 'The field must be between 3 and 50 characters.' })
    mobile:string;

    @ApiProperty()
    @IsOptional()
    gender:number;
}
