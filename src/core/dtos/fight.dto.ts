import { IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";

export class FightDto {
    @IsNumber()
    @ApiProperty({ description: 'The fighter1Id of the fight' })
    fighter1Id: number;

    @IsNumber()
    @ApiProperty({ description: 'The fighter2Id of the fight' })
    fighter2Id: number;

    @IsNumber()
    @ApiProperty({ description: 'The eventId of the fight' })
    eventId: number;
}

export class CreateFightDto extends FightDto {}
export class UpdateFightDto extends PartialType(FightDto) {}