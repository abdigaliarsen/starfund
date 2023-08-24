import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { FighterPersonalDataDto } from 'src/core';
import { FighterPersonalDataUseCases } from 'src/use-cases/fighterPersonalData/fighterPersonalData-use-cases';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('fighterPersonalData')
@Controller('fighterPersonalData')
export class FighterPersonalDataController {
    constructor(private readonly fighterPersonalDataUseCases: FighterPersonalDataUseCases) {}

    @Get()
    @ApiResponse({ type: Array<FighterPersonalDataDto>, status: 200, description: 'Get all fighterPersonalDatas' })
    async getFighterPersonalDatas(): Promise<FighterPersonalDataDto[]> {
        return await this.fighterPersonalDataUseCases.getAllFighterPersonalData();
    }

    @Get(':id')
    @ApiResponse({ type: FighterPersonalDataDto, status: 200, description: 'Get fighterPersonalData by id' })
    async getFighterPersonalDataById(@Param('id') id: number): Promise<FighterPersonalDataDto> {
        return await this.fighterPersonalDataUseCases.getFighterPersonalDataById(id);
    }

    @Post()
    @ApiResponse({ type: FighterPersonalDataDto, status: 200, description: 'Create fighterPersonalData' })
    async createFighterPersonalData(@Body() fighterPersonalData: FighterPersonalDataDto): Promise<FighterPersonalDataDto> {
        return await this.fighterPersonalDataUseCases.createFighterPersonalData(fighterPersonalData);
    }

    @Put(':id')
    @ApiResponse({ type: FighterPersonalDataDto, status: 200, description: 'Update fighterPersonalData' })
    async updateFighterPersonalData(@Param('id') id: number, @Body() fighterPersonalData: FighterPersonalDataDto): Promise<FighterPersonalDataDto> {
        return await this.fighterPersonalDataUseCases.updateFighterPersonalData(id, fighterPersonalData);
    }
}