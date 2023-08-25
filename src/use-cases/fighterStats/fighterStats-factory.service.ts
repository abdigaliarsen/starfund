import { Injectable } from "@nestjs/common";
import { CreateFighterStatsDto, FighterStatsDto, UpdateFighterStatsDto } from "src/core";

@Injectable()
export class FighterStatsFactoryService {
    createNewFighterStats(createFighterStatsDto: CreateFighterStatsDto) {
        const fighterStats: FighterStatsDto = {
            wins: createFighterStatsDto.wins,
            losses: createFighterStatsDto.losses,
            careerDisclosedEarnings: createFighterStatsDto.careerDisclosedEarnings,
            knockouts: createFighterStatsDto.knockouts,
            submissions: createFighterStatsDto.submissions,
            lastFightDate: createFighterStatsDto.lastFightDate,
        };

        return fighterStats;
    }

    updateFighterStats(updateFighterStatsDto: UpdateFighterStatsDto) {
        return { ...new FighterStatsDto(), ...updateFighterStatsDto };
    }
}