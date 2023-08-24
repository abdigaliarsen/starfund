import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { FighterDto } from 'src/core';
import { FighterUseCases } from 'src/use-cases/fighter/fighter-use-cases';

@Controller('fighter')
export class FighterController {
    constructor(private readonly fighterUseCases: FighterUseCases) {}

    @Get()
    async getFighters(): Promise<FighterDto[]> {
        return await this.fighterUseCases.getAllFighter();
    }

    @Get(':id')
    async getFighterById(@Param('id') id: number): Promise<FighterDto> {
        return await this.fighterUseCases.getFighterById(id);
    }

    @Post()
    async createFighter(@Body() fighter: FighterDto): Promise<FighterDto> {
        return await this.fighterUseCases.createFighter(fighter);
    }

    @Put(':id')
    async updateFighter(@Param('id') id: number, @Body() fighter: FighterDto): Promise<FighterDto> {
        return await this.fighterUseCases.updateFighter(id, fighter);
    }
}