import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { FightDto } from 'src/core';
import { FightUseCases } from 'src/use-cases/fight/fight-use-cases';

@Controller('fight')
export class FightController {
    constructor(private readonly fightUseCases: FightUseCases) {}

    @Get()
    async getFights(): Promise<FightDto[]> {
        return await this.fightUseCases.getAllFight();
    }

    @Get(':id')
    async getFightById(@Param('id') id: number): Promise<FightDto> {
        return await this.fightUseCases.getFightById(id);
    }

    @Post()
    async createFight(@Body() fight: FightDto): Promise<FightDto> {
        return await this.fightUseCases.createFight(fight);
    }

    @Put(':id')
    async updateFight(@Param('id') id: number, @Body() fight: FightDto): Promise<FightDto> {
        return await this.fightUseCases.updateFight(id, fight);
    }
}