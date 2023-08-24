import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { FighterStatsDto } from 'src/core';
import { FighterStatsUseCases } from 'src/use-cases/fighterStats/fighterStats-use-cases';

@Controller('fighterStats')
export class FighterStatsController {
    constructor(private readonly fighterStatsUseCases: FighterStatsUseCases) {}

    @Get()
    async getFighterStatss(): Promise<FighterStatsDto[]> {
        return await this.fighterStatsUseCases.getAllFighterStats();
    }

    @Get(':id')
    async getFighterStatsById(@Param('id') id: number): Promise<FighterStatsDto> {
        return await this.fighterStatsUseCases.getFighterStatsById(id);
    }

    @Post()
    async createFighterStats(@Body() fighterStats: FighterStatsDto): Promise<FighterStatsDto> {
        return await this.fighterStatsUseCases.createFighterStats(fighterStats);
    }

    @Put(':id')
    async updateFighterStats(@Param('id') id: number, @Body() fighterStats: FighterStatsDto): Promise<FighterStatsDto> {
        return await this.fighterStatsUseCases.updateFighterStats(id, fighterStats);
    }
}