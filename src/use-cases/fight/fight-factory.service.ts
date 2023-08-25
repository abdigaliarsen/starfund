import { Injectable } from "@nestjs/common";
import { FightDto, CreateFightDto, UpdateFightDto } from "../../core/dtos/fight.dto";

@Injectable()
export class FightFactoryService {
    createNewFight(createFightDto: CreateFightDto) {
        const fight: FightDto = {
            eventId: createFightDto.eventId,
        };
        
        return fight;
    }

    updateFight(updateFightDto: UpdateFightDto) {
        return { ...new FightDto(), ...updateFightDto };
    }
}