import { IFighterStatsRepository } from "@/core/abstracts/specific-repositories";
import { FighterStats } from "../model";
import { Repository } from "typeorm";
import { MySQLGenericRepository } from "../mysql-generic-repository";

export class MySQLFighterStatsRepository extends MySQLGenericRepository<FighterStats> implements IFighterStatsRepository {
    constructor(repository: Repository<FighterStats>, populateOnFind: string[] = []) {
        super(repository, populateOnFind);
    }
    
    async finishFight(winnerStatsId: number, loserStatsId: number): Promise<void> {
        const winnerStats = await this._repository.findOne({ where: { id: winnerStatsId } });
        const loserStats = await this._repository.findOne({ where: { id: loserStatsId } });

        if (!winnerStats || !loserStats) throw new Error("Fighter stats not found");

        await this._repository.update(winnerStatsId, { wins: winnerStats.wins + 1 });
        await this._repository.update(loserStatsId, { losses: loserStats.losses + 1 });
    }
}