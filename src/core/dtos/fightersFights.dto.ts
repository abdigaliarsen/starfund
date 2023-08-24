import { PartialType } from "@nestjs/mapped-types";
import { IsNumber } from "class-validator";

export class FightersFightsDto {
    @IsNumber()
    fighterId: number;

    @IsNumber()
    fightId: number;
}

export class CreateFightersFightsDto extends FightersFightsDto { };
export class UpdateFightersFightsDto extends PartialType(FightersFightsDto) { };