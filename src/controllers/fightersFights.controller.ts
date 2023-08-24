import { CreateFightersFightsDto, FightersFightsDto, UpdateFightersFightsDto } from '@/core/dtos/fightersFights.dto';
import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { FightersFightsUseCases } from 'src/use-cases/fightersFight/fightersFight-use-cases';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('fighterPersonalData')
@Controller('fighterPersonalData')
export class FightersFightsController {
    constructor(private readonly fightersFights: FightersFightsUseCases) {}

    @Get()
    @ApiResponse({ type: Array<FightersFightsDto>, status: 200, description: 'Get all fighterPersonalDatas' })
    async getFighterPersonalDatas(): Promise<FightersFightsDto[]> {
        return await this.fightersFights.getAllFightersFights();
    }

    @Get(':id')
    @ApiResponse({ type: FightersFightsDto, status: 200, description: 'Get fighterPersonalData by id' })
    async getFighterPersonalDataById(@Param('id') id: number): Promise<FightersFightsDto> {
        return await this.fightersFights.getFightersFightsById(id);
    }

    @Post()
    @ApiResponse({ type: FightersFightsDto, status: 200, description: 'Create fighterPersonalData' })
    async createFighterPersonalData(@Body() fightersFights: CreateFightersFightsDto): Promise<FightersFightsDto> {
        return await this.fightersFights.createFightersFights(fightersFights);
    }

    @Put(':id')
    @ApiResponse({ type: FightersFightsDto, status: 200, description: 'Update fighterPersonalData' })
    async updateFighterPersonalData(@Param('id') id: number, @Body() fightersFights: UpdateFightersFightsDto): Promise<FightersFightsDto> {
        return await this.fightersFights.updateFightersFights(id, fightersFights);
    }
}