import { Fight } from "@/frameworks/data-services/mysql/model";
import { IGenericRepository } from "../generic-repository.abstract";

export abstract class IFightsRepository extends IGenericRepository<Fight> {}