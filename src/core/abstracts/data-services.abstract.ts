import {
    Event,
    Fight,
    Fighter,
    FighterPersonalData,
    FighterStats
} from "src/frameworks/data-services/postgres/model";
import { IGenericRepository } from "./generic-repository.abstract";

export abstract class IDataServices {
    abstract events: IGenericRepository<Event>;

    abstract fights: IGenericRepository<Fight>;
    
    abstract fighters: IGenericRepository<Fighter>;

    abstract fighterPersonalData: IGenericRepository<FighterPersonalData>;

    abstract fighterStats: IGenericRepository<FighterStats>;
};