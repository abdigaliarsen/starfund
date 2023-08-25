import { IFightersFightsRepository } from "@/core/abstracts/specific-repositories";
import { FightersFights } from "../model";
import { Repository } from "typeorm";
import { MySQLGenericRepository } from "../mysql-generic-repository";

export class MySQLFightersFightsRepository extends MySQLGenericRepository<FightersFights> implements IFightersFightsRepository {
    constructor(repository: Repository<FightersFights>, populateOnFind: string[] = []) {
        super(repository, populateOnFind);
    }   
}