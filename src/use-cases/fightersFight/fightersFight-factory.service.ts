import { CreateFightersFightsDto, FightersFightsDto, UpdateFightersFightsDto } from "@/core/dtos/fightersFights.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FightersFightsFactoryService {
    createNewFightersFight(createFightersFightsDto: CreateFightersFightsDto) {
        const fightersFight: FightersFightsDto = {
            fighterId: createFightersFightsDto.fighterId,
            fightId: createFightersFightsDto.fightId,
        };
        return fightersFight;
    }

    updateFightersFight(updatedFightersFightsDto: UpdateFightersFightsDto) {
        return { ...new FightersFightsDto(), ...updatedFightersFightsDto };
    }
};