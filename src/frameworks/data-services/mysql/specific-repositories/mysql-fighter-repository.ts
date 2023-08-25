import { IFighterRepository } from "@/core/abstracts/specific-repositories";
import { Fighter, FightersFights } from "../model";
import { MySQLGenericRepository } from "../mysql-generic-repository";
import { Repository } from "typeorm";

export class MySQLFighterRepository extends MySQLGenericRepository<Fighter> implements IFighterRepository {
    constructor(repository: Repository<Fighter>, populateOnFind: string[] = []) {
        super(repository, populateOnFind);
    }
}