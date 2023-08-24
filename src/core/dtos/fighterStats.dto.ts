import { IsDate, IsNotEmpty, IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";

export class FighterStatsDto {
    @IsNumber()
    @ApiProperty({ description: 'The fighterId of the fighter' })
    fighterId: number;

    @IsNumber()
    @ApiProperty({ description: 'The ranking of the fighter' })
    wins: number;

    @IsNumber()
    @ApiProperty({ description: 'The ranking of the fighter' })
    losses: number;

    @IsNumber()
    @ApiProperty({ description: 'The ranking of the fighter' })
    knockouts: number;

    @IsNumber()
    @ApiProperty({ description: 'The ranking of the fighter' })
    submissions: number;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({ description: 'The ranking of the fighter' })
    lastFightDate: Date;

    @IsNumber()
    @ApiProperty({ description: 'The ranking of the fighter' })
    careerDisclosedEarnings: number;
}

export class CreateFighterStatsDto extends FighterStatsDto { }
export class UpdateFighterStatsDto extends PartialType(FighterStatsDto) { }