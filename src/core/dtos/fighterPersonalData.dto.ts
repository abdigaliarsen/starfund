import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString, IsNumber, IsDate } from "class-validator";

export class FighterPersonalDataDto {
    @IsNumber()
    fighterId: number;

    @IsNotEmpty()
    @IsString()
    fullname: string;

    @IsNotEmpty()
    @IsString()
    nickname: string;

    @IsNumber()
    age: number;

    @IsDate()
    dateOfBirth: Date;

    @IsNotEmpty()
    @IsString()
    weightClass: string;

    @IsNumber()
    weight: number;

    @IsNumber()
    height: number;

    @IsNumber()
    reach: number;

    @IsDate()
    born: Date;
}

export class CreateFighterPersonalDataDto extends FighterPersonalDataDto { }
export class UpdateFighterPersonalDataDto extends PartialType(FighterPersonalDataDto) { }