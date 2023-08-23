import { Injectable } from "@nestjs/common";
import { FightDto, CreateFightDto, UpdateFightDto } from "../../core/dtos/fight.dto";

@Injectable()
export class FightFactoryService {
    createNewFight(createFightDto: CreateFightDto) {
        const fight = new FightDto();

        fight.eventId = createFightDto.eventId;
        fight.fighter1Id = createFightDto.fighter1Id;
        fight.fighter2Id = createFightDto.fighter2Id;

        return fight;
    }

    updateFight(updateFightDto: UpdateFightDto) {
        const fight = new FightDto();

        fight.eventId = updateFightDto.eventId;
        fight.fighter1Id = updateFightDto.fighter1Id;
        fight.fighter2Id = updateFightDto.fighter2Id;

        return fight;
    }
}