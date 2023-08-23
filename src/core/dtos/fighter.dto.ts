import { IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class FighterDto {
    @IsNumber()
    fighterStatsId: number;

    @IsNumber()
    fighterPersonalDataId: number;

    @IsNumber()
    ranking: number;
}

export class CreateFighterDto extends FighterDto { }
export class UpdateFighterDto extends PartialType(FighterDto) { }