import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { FighterStatsDto } from 'src/core';
import { FighterStatsUseCases } from 'src/use-cases/fighterStats/fighterStats-use-cases';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('fighterStats')
@Controller('fighterStats')
export class FighterStatsController {
    constructor(private readonly fighterStatsUseCases: FighterStatsUseCases) {}

    @Get()
    @ApiResponse({ type: Array<FighterStatsDto>, status: 200, description: 'Get all fighterStatss' })
    async getFighterStatss(): Promise<FighterStatsDto[]> {
        return await this.fighterStatsUseCases.getAllFighterStats();
    }

    @Get(':id')
    @ApiResponse({ type: FighterStatsDto, status: 200, description: 'Get fighterStats by id' })
    async getFighterStatsById(@Param('id') id: number): Promise<FighterStatsDto> {
        return await this.fighterStatsUseCases.getFighterStatsById(id);
    }

    @Post()
    @ApiResponse({ type: FighterStatsDto, status: 200, description: 'Create fighterStats' })
    async createFighterStats(@Body() fighterStats: FighterStatsDto): Promise<FighterStatsDto> {
        return await this.fighterStatsUseCases.createFighterStats(fighterStats);
    }

    @Put(':id')
    @ApiResponse({ type: FighterStatsDto, status: 200, description: 'Update fighterStats' })
    async updateFighterStats(@Param('id') id: number, @Body() fighterStats: FighterStatsDto): Promise<FighterStatsDto> {
        return await this.fighterStatsUseCases.updateFighterStats(id, fighterStats);
    }
}