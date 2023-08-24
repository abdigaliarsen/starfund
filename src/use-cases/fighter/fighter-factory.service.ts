import { Injectable } from "@nestjs/common";
import { CreateFighterDto, FighterDto, UpdateFighterDto } from "src/core";

@Injectable()
export class FighterFactoryService {
    createNewFighter(createFighterDto: CreateFighterDto) {
        const fighter: FighterDto = {
            fighterPersonalDataId: createFighterDto.fighterPersonalDataId,
            fighterStatsId: createFighterDto.fighterStatsId,
            ranking: createFighterDto.ranking,
        };

        return fighter;
    }

    updateFighter(updateFighterDto: UpdateFighterDto) {
        return { ...new FighterDto(), ...updateFighterDto };
    }
}