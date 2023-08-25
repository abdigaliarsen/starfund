import { FighterStats } from "@/frameworks/data-services/mysql/model";
import { IGenericRepository } from "../generic-repository.abstract";

export abstract class IFighterStatsRepository extends IGenericRepository<FighterStats> { }