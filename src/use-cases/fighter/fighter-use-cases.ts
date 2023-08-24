import { Injectable } from "@nestjs/common";
import { CreateFighterDto, FighterDto, UpdateFighterDto } from "../../core/dtos/fighter.dto";
import { IDataServices } from "../../core/abstracts";
import { Fighter } from "src/frameworks/data-services/mysql/model";
import { plainToClass } from "class-transformer";
import { FighterFactoryService } from "./fighter-factory.service";

@Injectable()
export class FighterUseCases {
    constructor(
        private readonly dataServices: IDataServices,
        private readonly fighterFactoryService: FighterFactoryService
    ) {}

    async getAllFighter(): Promise<FighterDto[]> {
        const fighter = await this.dataServices.fighters.getAll();
        return fighter.map((fighter_1: Fighter) => {
            return plainToClass(FighterDto, fighter_1);
        });
    }

    async getFighterById(id: number): Promise<FighterDto> {
        return plainToClass(FighterDto, this.dataServices.fighters.get(id));
    }

    async createFighter(createFighter: CreateFighterDto): Promise<FighterDto> {
        const fighter = this.fighterFactoryService.createNewFighter(createFighter);
        return this.dataServices.fighters.create(plainToClass(Fighter, fighter)).then((fighter_1: Fighter) => {
            return plainToClass(FighterDto, fighter_1);
        });
    }

    async updateFighter(
        fighterId: number,
        updateFighter: UpdateFighterDto
    ): Promise<FighterDto> {
        const fighter = this.fighterFactoryService.updateFighter(updateFighter);
        return this.dataServices.fighters.update(fighterId, plainToClass(Fighter, fighter)).then((fighter_1: Fighter) => {
            return plainToClass(FighterDto, fighter_1);
        });
    }
};