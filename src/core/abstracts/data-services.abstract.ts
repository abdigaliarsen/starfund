import {
    IEventRepository,
    IFightsRepository,
    IFighterPersonalDataRepository,
    IFighterRepository,
    IFighterStatsRepository,
    IFightersFightsRepository
} from "./specific-repositories";

export abstract class IDataServices {
    abstract events: IEventRepository;

    abstract fights: IFightsRepository;
    
    abstract fighters: IFighterRepository;

    abstract fighterPersonalData: IFighterPersonalDataRepository;

    abstract fighterStats: IFighterStatsRepository;

    abstract fightersFights: IFightersFightsRepository;
};