import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { FighterPersonalDataDto } from 'src/core';
import { FighterPersonalDataUseCases } from 'src/use-cases/fighterPersonalData/fighterPersonalData-use-cases';

@Controller('fighterPersonalData')
export class FighterPersonalDataController {
    constructor(private readonly fighterPersonalDataUseCases: FighterPersonalDataUseCases) {}

    @Get()
    async getFighterPersonalDatas(): Promise<FighterPersonalDataDto[]> {
        return await this.fighterPersonalDataUseCases.getAllFighterPersonalData();
    }

    @Get(':id')
    async getFighterPersonalDataById(@Param('id') id: number): Promise<FighterPersonalDataDto> {
        return await this.fighterPersonalDataUseCases.getFighterPersonalDataById(id);
    }

    @Post()
    async createFighterPersonalData(@Body() fighterPersonalData: FighterPersonalDataDto): Promise<FighterPersonalDataDto> {
        return await this.fighterPersonalDataUseCases.createFighterPersonalData(fighterPersonalData);
    }

    @Put(':id')
    async updateFighterPersonalData(@Param('id') id: number, @Body() fighterPersonalData: FighterPersonalDataDto): Promise<FighterPersonalDataDto> {
        return await this.fighterPersonalDataUseCases.updateFighterPersonalData(id, fighterPersonalData);
    }
}