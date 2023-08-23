import { Injectable } from "@nestjs/common";
import { CreateFighterStatsDto, FighterStatsDto, UpdateFighterStatsDto } from "src/core";

@Injectable()
export class FighterStatsFactoryService {
    createNewFighterStats(createFighterStatsDto: CreateFighterStatsDto) {
        const fighterStats = new FighterStatsDto();

        fighterStats.fighterId = createFighterStatsDto.fighterId;
        fighterStats.wins = createFighterStatsDto.wins;
        fighterStats.losses = createFighterStatsDto.losses;
        fighterStats.careerDisclosedEarnings = createFighterStatsDto.careerDisclosedEarnings;
        fighterStats.knockouts = createFighterStatsDto.knockouts;
        fighterStats.submissions = createFighterStatsDto.submissions;
        fighterStats.lastFightDate = createFighterStatsDto.lastFightDate;

        return fighterStats;
    }

    updateFighterStats(updateFighterStatsDto: UpdateFighterStatsDto) {
        const fighterStats = new FighterStatsDto();

        fighterStats.fighterId = updateFighterStatsDto.fighterId;
        fighterStats.wins = updateFighterStatsDto.wins;
        fighterStats.losses = updateFighterStatsDto.losses;
        fighterStats.careerDisclosedEarnings = updateFighterStatsDto.careerDisclosedEarnings;
        fighterStats.knockouts = updateFighterStatsDto.knockouts;
        fighterStats.submissions = updateFighterStatsDto.submissions;
        fighterStats.lastFightDate = updateFighterStatsDto.lastFightDate;

        return fighterStats;
    }
}