import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { FighterDto } from 'src/core';
import { FighterUseCases } from 'src/use-cases/fighter/fighter-use-cases';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('fighter')
@Controller('fighter')
export class FighterController {
    constructor(private readonly fighterUseCases: FighterUseCases) {}

    @Get()
    @ApiResponse({ type: Array<FighterDto>, status: 200, description: 'Get all fighters' })
    async getFighters(): Promise<FighterDto[]> {
        return await this.fighterUseCases.getAllFighter();
    }

    @Get(':id')
    @ApiResponse({ type: FighterDto, status: 200, description: 'Get fighter by id' })
    async getFighterById(@Param('id') id: number): Promise<FighterDto> {
        return await this.fighterUseCases.getFighterById(id);
    }

    @Post()
    @ApiResponse({ type: FighterDto, status: 200, description: 'Create fighter' })
    async createFighter(@Body() fighter: FighterDto): Promise<FighterDto> {
        return await this.fighterUseCases.createFighter(fighter);
    }

    @Put(':id')
    @ApiResponse({ type: FighterDto, status: 200, description: 'Update fighter' })
    async updateFighter(@Param('id') id: number, @Body() fighter: FighterDto): Promise<FighterDto> {
        return await this.fighterUseCases.updateFighter(id, fighter);
    }
}