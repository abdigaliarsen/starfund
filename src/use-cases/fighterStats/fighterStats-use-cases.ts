import { Injectable } from "@nestjs/common";
import { CreateFighterStatsDto, FighterStatsDto, UpdateFighterStatsDto } from "../../core/dtos/fighterStats.dto";
import { IDataServices } from "../../core/abstracts";
import { FighterStats } from "src/frameworks/data-services/postgres/model";
import { plainToClass } from "class-transformer";
import { FighterStatsFactoryService } from "./fighterStats-factory.service";

@Injectable()
export class FighterStatsUseCases {
    constructor(
        private readonly dataServices: IDataServices,
        private readonly fighterStatsFactoryService: FighterStatsFactoryService
    ) {}

    async getAllFighterStats(): Promise<FighterStatsDto[]> {
        const fighterStats = await this.dataServices.fighterStats.getAll();
        return fighterStats.map((fighterStats_1: FighterStats) => {
            return plainToClass(FighterStatsDto, fighterStats_1);
        });
    }

    async getFighterStatsById(id: number): Promise<FighterStatsDto> {
        return plainToClass(FighterStatsDto, this.dataServices.fighterStats.get(id));
    }

    async createFighterStats(createFighterStats: CreateFighterStatsDto): Promise<FighterStatsDto> {
        const fighterStats = this.fighterStatsFactoryService.createNewFighterStats(createFighterStats);
        return this.dataServices.fighterStats.create(plainToClass(FighterStats, fighterStats)).then((fighterStats_1: FighterStats) => {
            return plainToClass(FighterStatsDto, fighterStats_1);
        });
    }

    async updateFighterStats(
        fighterStatsId: number,
        updateFighterStats: UpdateFighterStatsDto
    ): Promise<FighterStatsDto> {
        const fighterStats = this.fighterStatsFactoryService.updateFighterStats(updateFighterStats);
        return this.dataServices.fighterStats.update(fighterStatsId, plainToClass(FighterStats, fighterStats)).then((fighterStats_1: FighterStats) => {
            return plainToClass(FighterStatsDto, fighterStats_1);
        });
    }
};