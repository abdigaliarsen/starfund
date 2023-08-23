import { IsNumber } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";

export class FightDto {
    @IsNumber()
    fighter1Id: number;

    @IsNumber()
    fighter2Id: number;

    @IsNumber()
    eventId: number;
}

export class CreateFightDto extends FightDto {}
export class UpdateFightDto extends PartialType(FightDto) {}