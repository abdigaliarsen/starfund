import { IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";

export class FighterDto {
    @IsNumber()
    @ApiProperty({ description: 'The fighterStatsId of the fighter' })
    fighterStatsId: number;

    @IsNumber()
    @ApiProperty({ description: 'The fighterPersonalDataId of the fighter' })
    fighterPersonalDataId: number;

    @IsNumber()
    @ApiProperty({ description: 'The ranking of the fighter' })
    ranking: number;
}

export class CreateFighterDto extends FighterDto { }
export class UpdateFighterDto extends PartialType(FighterDto) { }