import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IDataServices } from "../../../core";
import { Repository } from "typeorm";
import { Event, Fight, Fighter, FighterPersonalData, FighterStats, FightersFights } from "./model";
import { MySQLGenericRepository } from "./mysql-generic-repository";
import { MySQLEventsRepository } from "./specific-repositories/mysql-events-repository";
import { MySQLFightRepository } from "./specific-repositories/mysql-fight-repository";
import { MySQLFighterRepository } from "./specific-repositories/mysql-fighter-repository";
import { MySQLFighterPersonalDataRepository } from "./specific-repositories/mysql-fighterPersonalData-repository";
import { MySQLFighterStatsRepository } from "./specific-repositories/mysql-fighterStats-repository";
import { MySQLFightersFightsRepository } from "./specific-repositories/mysql-fightersFight-repository";

@Injectable()
export class MySQLDataServices implements IDataServices, OnApplicationBootstrap {
    events: MySQLEventsRepository;
    fights: MySQLFightRepository;
    fighters: MySQLFighterRepository;
    fighterPersonalData: MySQLFighterPersonalDataRepository;
    fighterStats: MySQLFighterStatsRepository;
    fightersFights: MySQLFightersFightsRepository;
    
    constructor(
        @InjectRepository(Event)
        private readonly _eventRepository: Repository<Event>,
        @InjectRepository(Fight)
        private readonly _fightRepository: Repository<Fight>,
        @InjectRepository(Fighter)
        private readonly _fighterRepository: Repository<Fighter>,
        @InjectRepository(FighterPersonalData)
        private readonly _fighterPersonalDataRepository: Repository<FighterPersonalData>,
        @InjectRepository(FighterStats)
        private readonly _fighterStatsRepository: Repository<FighterStats>,
        @InjectRepository(FightersFights)
        private readonly _fightersFightsRepository: Repository<FightersFights>
    ) {}

    async onApplicationBootstrap() {
        this.events = new MySQLEventsRepository(this._eventRepository);
        this.fights = new MySQLFightRepository(this._fightRepository);
        this.fighters = new MySQLFighterRepository(this._fighterRepository);
        this.fighterPersonalData = new MySQLFighterPersonalDataRepository(this._fighterPersonalDataRepository);
        this.fighterStats = new MySQLFighterStatsRepository(this._fighterStatsRepository);
        this.fightersFights = new MySQLFightersFightsRepository(this._fightersFightsRepository);
    };
}