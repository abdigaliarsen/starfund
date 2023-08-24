import { Injectable } from "@nestjs/common";
import { FightDto, CreateFightDto, UpdateFightDto } from "../../core/dtos/fight.dto";

@Injectable()
export class FightFactoryService {
    createNewFight(createFightDto: CreateFightDto) {
        const fight: FightDto = {
            eventId: createFightDto.eventId,
            fighter1Id: createFightDto.fighter1Id,
            fighter2Id: createFightDto.fighter2Id,
        };
        
        return fight;
    }

    updateFight(updateFightDto: UpdateFightDto) {
        return { ...new FightDto(), ...updateFightDto };
    }
}