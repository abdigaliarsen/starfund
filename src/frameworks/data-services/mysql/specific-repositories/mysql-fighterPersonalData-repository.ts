import { IFighterPersonalDataRepository } from "@/core/abstracts/specific-repositories";
import { FighterPersonalData } from "../model";
import { Repository } from "typeorm";
import { MySQLGenericRepository } from "../mysql-generic-repository";

export class MySQLFighterPersonalDataRepository extends MySQLGenericRepository<FighterPersonalData> implements IFighterPersonalDataRepository {
    constructor(repository: Repository<FighterPersonalData>, populateOnFind: string[] = []) {
        super(repository, populateOnFind);
    }   
}