import {
    Event,
    Fight,
    Fighter,
    FighterPersonalData,
    FighterStats,
    FightersFights
} from "src/frameworks/data-services/mysql/model";

import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IDataServices {
    abstract events: IGenericRepository<Event>;

    abstract fights: IGenericRepository<Fight>;
    
    abstract fighters: IGenericRepository<Fighter>;

    abstract fighterPersonalData: IGenericRepository<FighterPersonalData>;

    abstract fighterStats: IGenericRepository<FighterStats>;

    abstract fightersFights: IGenericRepository<FightersFights>;
};