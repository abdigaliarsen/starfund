import { IsDate, IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class FighterStatsDto {
    @IsNumber()
    fighterId: number;

    @IsNumber()
    wins: number;

    @IsNumber()
    losses: number;

    @IsNumber()
    knockouts: number;

    @IsNumber()
    submissions: number;

    @IsDate()
    lastFightDate: Date;

    @IsNumber()
    careerDisclosedEarnings: number;
}

export class CreateFighterStatsDto extends FighterStatsDto { }
export class UpdateFighterStatsDto extends PartialType(FighterStatsDto) { }