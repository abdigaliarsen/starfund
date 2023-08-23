import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IDataServices } from "../../../core";
import { Repository } from "typeorm";
import { Event, Fight, Fighter, FighterPersonalData, FighterStats } from "./model";
import { PostgresGenericRepository } from "./postgres-generic-repository";

@Injectable()
export class PostgresDataServices implements IDataServices, OnApplicationBootstrap {
    events: PostgresGenericRepository<Event>;
    fights: PostgresGenericRepository<Fight>;
    fighters: PostgresGenericRepository<Fighter>;
    fighterPersonalData: PostgresGenericRepository<FighterPersonalData>;
    fighterStats: PostgresGenericRepository<FighterStats>;
    
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
        private readonly _fighterStatsRepository: Repository<FighterStats>
    ) {}

    async onApplicationBootstrap() {
        this.events = new PostgresGenericRepository<Event>(this._eventRepository);
        this.fights = new PostgresGenericRepository<Fight>(this._fightRepository);
        this.fighters = new PostgresGenericRepository<Fighter>(this._fighterRepository);
        this.fighterPersonalData = new PostgresGenericRepository<FighterPersonalData>(this._fighterPersonalDataRepository);
        this.fighterStats = new PostgresGenericRepository<FighterStats>(this._fighterStatsRepository);
    };
}