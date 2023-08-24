import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IDataServices } from "../../../core";
import { Repository } from "typeorm";
import { Event, Fight, Fighter, FighterPersonalData, FighterStats, FightersFights } from "./model";
import { MySQLGenericRepository } from "./mysql-generic-repository";

@Injectable()
export class MySQLDataServices implements IDataServices, OnApplicationBootstrap {
    events: MySQLGenericRepository<Event>;
    fights: MySQLGenericRepository<Fight>;
    fighters: MySQLGenericRepository<Fighter>;
    fighterPersonalData: MySQLGenericRepository<FighterPersonalData>;
    fighterStats: MySQLGenericRepository<FighterStats>;
    fightersFights: MySQLGenericRepository<FightersFights>;
    
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
        this.events = new MySQLGenericRepository<Event>(this._eventRepository);
        this.fights = new MySQLGenericRepository<Fight>(this._fightRepository);
        this.fighters = new MySQLGenericRepository<Fighter>(this._fighterRepository);
        this.fighterPersonalData = new MySQLGenericRepository<FighterPersonalData>(this._fighterPersonalDataRepository);
        this.fighterStats = new MySQLGenericRepository<FighterStats>(this._fighterStatsRepository);
        this.fightersFights = new MySQLGenericRepository<FightersFights>(this._fightersFightsRepository);
    };
}