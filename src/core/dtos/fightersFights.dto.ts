import { PartialType } from "@nestjs/mapped-types";
import { IsNumber } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class FightersFightsDto {
    @IsNumber()
    @ApiProperty({ description: 'The fighterId of the fighter' })
    fighterId: number;

    @IsNumber()
    @ApiProperty({ description: 'The fightId of the fighter' })
    fightId: number;
}

export class CreateFightersFightsDto extends FightersFightsDto { };
export class UpdateFightersFightsDto extends PartialType(FightersFightsDto) { };