import { Injectable } from "@nestjs/common";
import { CreateFightersFightsDto, FightersFightsDto, UpdateFightersFightsDto } from "../../core/dtos/fightersFights.dto";
import { IDataServices } from "../../core/abstracts";
import { FightersFights } from "src/frameworks/data-services/mysql/model";
import { plainToClass } from "class-transformer";
import { FightersFightsFactoryService } from "./fightersFight-factory.service";

@Injectable()
export class FightersFightsUseCases {
    constructor(
        private readonly dataServices: IDataServices,
        private readonly fightersFightsFactoryService: FightersFightsFactoryService
    ) {}

    async getAllFightersFights(): Promise<FightersFightsDto[]> {
        const fightersFights = await this.dataServices.fightersFights.getAll();
        return fightersFights.map((fightersFights_1: FightersFights) => {
            return plainToClass(FightersFightsDto, fightersFights_1);
        });
    }

    async getFightersFightsById(id: number): Promise<FightersFightsDto> {
        return plainToClass(FightersFightsDto, this.dataServices.fightersFights.get(id));
    }

    async createFightersFights(createFightersFights: CreateFightersFightsDto): Promise<FightersFightsDto> {
        const fightersFights = this.fightersFightsFactoryService.createNewFightersFight(createFightersFights);
        return this.dataServices.fightersFights.create(plainToClass(FightersFights, fightersFights)).then((fightersFights_1: FightersFights) => {
            return plainToClass(FightersFightsDto, fightersFights_1);
        });
    }

    async updateFightersFights(
        fightersFightsId: number,
        updateFightersFights: UpdateFightersFightsDto
    ): Promise<FightersFightsDto> {
        const fightersFights = this.fightersFightsFactoryService.updateFightersFight(updateFightersFights);
        return this.dataServices.fightersFights.update(fightersFightsId, plainToClass(FightersFights, fightersFights)).then((fightersFights_1: FightersFights) => {
            return plainToClass(FightersFightsDto, fightersFights_1);
        });
    }
};