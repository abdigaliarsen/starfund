import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString, IsNumber, IsDate } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class FighterPersonalDataDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The fullname of the fighter' })
    fullname: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The nickname of the fighter' })
    nickname: string;

    @IsNumber()
    @ApiProperty({ description: 'The age of the fighter' })
    age: number;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({ description: 'The dateOfBirth of the fighter' })
    dateOfBirth: Date;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The birthplace of the fighter' })
    weightClass: string;

    @IsNumber()
    @ApiProperty({ description: 'The weight of the fighter' })
    weight: number;

    @IsNumber()
    @ApiProperty({ description: 'The height of the fighter' })
    height: number;

    @IsNumber()
    @ApiProperty({ description: 'The reach of the fighter' })
    reach: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty({ description: 'The born city&country of the fighter' })
    born: string;
}

export class CreateFighterPersonalDataDto extends FighterPersonalDataDto { }
export class UpdateFighterPersonalDataDto extends PartialType(FighterPersonalDataDto) { }