import { IFightsRepository } from "@/core/abstracts/specific-repositories";
import { Fight } from "../model";
import { MySQLGenericRepository } from "../mysql-generic-repository";
import { Repository } from "typeorm";

export class MySQLFightRepository extends MySQLGenericRepository<Fight> implements IFightsRepository {
    constructor(repository: Repository<Fight>, populateOnFind: string[] = []) {
        super(repository, populateOnFind);
    }
}