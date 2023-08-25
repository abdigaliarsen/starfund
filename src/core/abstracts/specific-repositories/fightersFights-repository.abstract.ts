import { FightersFights } from "@/frameworks/data-services/mysql/model";
import { IGenericRepository } from "../generic-repository.abstract";

export abstract class IFightersFightsRepository extends IGenericRepository<FightersFights> { }