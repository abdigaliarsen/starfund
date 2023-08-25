import { Fighter } from "@/frameworks/data-services/mysql/model";
import { IGenericRepository } from "../generic-repository.abstract";

export abstract class IFighterRepository extends IGenericRepository<Fighter> { }