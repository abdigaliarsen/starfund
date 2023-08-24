import { Injectable } from "@nestjs/common";
import { CreateFightDto, FightDto, UpdateFightDto } from "../../core/dtos/fight.dto";
import { IDataServices } from "../../core/abstracts";
import { Fight } from "src/frameworks/data-services/mysql/model";
import { plainToClass } from "class-transformer";
import { FightFactoryService } from "./fight-factory.service";

@Injectable()
export class FightUseCases {
    constructor(
        private readonly dataServices: IDataServices,
        private readonly fightFactoryService: FightFactoryService
    ) {}

    async getAllFight(): Promise<FightDto[]> {
        const fight = await this.dataServices.fights.getAll();
        return fight.map((fight_1: Fight) => {
            return plainToClass(FightDto, fight_1);
        });
    }

    async getFightById(id: number): Promise<FightDto> {
        return plainToClass(FightDto, this.dataServices.fights.get(id));
    }

    async createFight(createFight: CreateFightDto): Promise<FightDto> {
        const fight = this.fightFactoryService.createNewFight(createFight);
        return this.dataServices.fights.create(plainToClass(Fight, fight)).then((fight_1: Fight) => {
            return plainToClass(FightDto, fight_1);
        });
    }

    async updateFight(
        fightId: number,
        updateFight: UpdateFightDto
    ): Promise<FightDto> {
        const fight = this.fightFactoryService.updateFight(updateFight);
        return this.dataServices.fights.update(fightId, plainToClass(Fight, fight)).then((fight_1: Fight) => {
            return plainToClass(FightDto, fight_1);
        });
    }

    async deleteFight(fightId: number): Promise<void> {
        return this.dataServices.fights.delete(fightId);
    }
};