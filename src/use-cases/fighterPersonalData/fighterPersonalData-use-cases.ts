import { Injectable } from "@nestjs/common";
import { CreateFighterPersonalDataDto, FighterPersonalDataDto, UpdateFighterPersonalDataDto } from "../../core/dtos/fighterPersonalData.dto";
import { IDataServices } from "../../core/abstracts";
import { FighterPersonalData } from "src/frameworks/data-services/mysql/model";
import { plainToClass } from "class-transformer";
import { FighterPersonalDataFactoryService } from "./fighterPersonalData-factory.service";

@Injectable()
export class FighterPersonalDataUseCases {
    constructor(
        private readonly dataServices: IDataServices,
        private readonly fighterPersonalDataFactoryService: FighterPersonalDataFactoryService
    ) {}

    async getAllFighterPersonalData(): Promise<FighterPersonalDataDto[]> {
        const fighterPersonalData = await this.dataServices.fighterPersonalData.getAll();
        return fighterPersonalData.map((fighterPersonalData_1: FighterPersonalData) => {
            return plainToClass(FighterPersonalDataDto, fighterPersonalData_1);
        });
    }

    async getFighterPersonalDataById(id: number): Promise<FighterPersonalDataDto> {
        return plainToClass(FighterPersonalDataDto, this.dataServices.fighterPersonalData.get(id));
    }

    async createFighterPersonalData(createFighterPersonalData: CreateFighterPersonalDataDto): Promise<FighterPersonalDataDto> {
        const fighterPersonalData = this.fighterPersonalDataFactoryService.createNewFighterPersonalData(createFighterPersonalData);
        return this.dataServices.fighterPersonalData.create(plainToClass(FighterPersonalData, fighterPersonalData)).then((fighterPersonalData_1: FighterPersonalData) => {
            return plainToClass(FighterPersonalDataDto, fighterPersonalData_1);
        });
    }

    async updateFighterPersonalData(
        fighterPersonalDataId: number,
        updateFighterPersonalData: UpdateFighterPersonalDataDto
    ): Promise<FighterPersonalDataDto> {
        const fighterPersonalData = this.fighterPersonalDataFactoryService.updateFighterPersonalData(updateFighterPersonalData);
        return this.dataServices.fighterPersonalData.update(fighterPersonalDataId, plainToClass(FighterPersonalData, fighterPersonalData)).then((fighterPersonalData_1: FighterPersonalData) => {
            return plainToClass(FighterPersonalDataDto, fighterPersonalData_1);
        });
    }
};