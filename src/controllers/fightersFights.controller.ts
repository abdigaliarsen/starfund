import { CreateFightersFightsDto, FightersFightsDto, UpdateFightersFightsDto } from '@/core/dtos/fightersFights.dto';
import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { FightersFightsUseCases } from 'src/use-cases/fightersFight/fightersFight-use-cases';

@Controller('fighterPersonalData')
export class FightersFightsController {
    constructor(private readonly fightersFights: FightersFightsUseCases) {}

    @Get()
    async getFighterPersonalDatas(): Promise<FightersFightsDto[]> {
        return await this.fightersFights.getAllFightersFights();
    }

    @Get(':id')
    async getFighterPersonalDataById(@Param('id') id: number): Promise<FightersFightsDto> {
        return await this.fightersFights.getFightersFightsById(id);
    }

    @Post()
    async createFighterPersonalData(@Body() fightersFights: CreateFightersFightsDto): Promise<FightersFightsDto> {
        return await this.fightersFights.createFightersFights(fightersFights);
    }

    @Put(':id')
    async updateFighterPersonalData(@Param('id') id: number, @Body() fightersFights: UpdateFightersFightsDto): Promise<FightersFightsDto> {
        return await this.fightersFights.updateFightersFights(id, fightersFights);
    }
}