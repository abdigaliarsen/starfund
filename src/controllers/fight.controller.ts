import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { FightDto } from 'src/core';
import { FightUseCases } from 'src/use-cases/fight/fight-use-cases';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('fight')
@Controller('fight')
export class FightController {
    constructor(private readonly fightUseCases: FightUseCases) {}

    @Get()
    @ApiResponse({ type: Array<FightDto>, status: 200, description: 'Get all fights' })
    async getFights(): Promise<FightDto[]> {
        return await this.fightUseCases.getAllFight();
    }

    @Get(':id')
    @ApiResponse({ type: FightDto, status: 200, description: 'Get fight by id' })
    async getFightById(@Param('id') id: number): Promise<FightDto> {
        return await this.fightUseCases.getFightById(id);
    }

    @Post()
    @ApiResponse({ type: FightDto, status: 200, description: 'Create fight' })
    async createFight(@Body() fight: FightDto): Promise<FightDto> {
        return await this.fightUseCases.createFight(fight);
    }

    @Put(':id')
    @ApiResponse({ type: FightDto, status: 200, description: 'Update fight' })
    async updateFight(@Param('id') id: number, @Body() fight: FightDto): Promise<FightDto> {
        return await this.fightUseCases.updateFight(id, fight);
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'Delete fight' })
    async deleteFight(@Param('id') id: number): Promise<void> {
        return await this.fightUseCases.deleteFight(id);
    }
}