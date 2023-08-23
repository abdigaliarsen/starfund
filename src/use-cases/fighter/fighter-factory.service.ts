import { Injectable } from "@nestjs/common";
import { CreateFighterDto, FighterDto, UpdateFighterDto } from "src/core";

@Injectable()
export class FighterFactoryService {
    createNewFighter(createFighterDto: CreateFighterDto) {
        const fighter = new FighterDto();
        
        fighter.fighterPersonalDataId = createFighterDto.fighterPersonalDataId;
        fighter.fighterStatsId = createFighterDto.fighterStatsId;
        fighter.ranking = createFighterDto.ranking;

        return fighter;
    }

    updateFighter(updateFighterDto: UpdateFighterDto) {
        const fighter = new FighterDto();
        
        fighter.fighterPersonalDataId = updateFighterDto.fighterPersonalDataId;
        fighter.fighterStatsId = updateFighterDto.fighterStatsId;
        fighter.ranking = updateFighterDto.ranking;

        return fighter;
    }
}