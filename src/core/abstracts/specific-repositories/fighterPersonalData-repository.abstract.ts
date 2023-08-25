import { FighterPersonalData } from "@/frameworks/data-services/mysql/model";
import { IGenericRepository } from "../generic-repository.abstract";

export abstract class IFighterPersonalDataRepository extends IGenericRepository<FighterPersonalData> {}