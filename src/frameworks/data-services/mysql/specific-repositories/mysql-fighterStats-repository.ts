import { IFighterStatsRepository } from "@/core/abstracts/specific-repositories";
import { FighterStats } from "../model";
import { Repository } from "typeorm";
import { MySQLGenericRepository } from "../mysql-generic-repository";

export class MySQLFighterStatsRepository extends MySQLGenericRepository<FighterStats> implements IFighterStatsRepository {
    constructor(repository: Repository<FighterStats>, populateOnFind: string[] = []) {
        super(repository, populateOnFind);
    }   
}