import { FighterStats } from "@/frameworks/data-services/mysql/model";
import { IGenericRepository } from "../generic-repository.abstract";

export abstract class IFighterStatsRepository extends IGenericRepository<FighterStats> {
    abstract finishFight(winnerId: number, loserId: number): Promise<void>;
}