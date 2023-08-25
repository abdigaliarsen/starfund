import { CreateFightersFightsDto, FightersFightsDto, UpdateFightersFightsDto } from '@/core/dtos/fightersFights.dto';
import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { FightersFightsUseCases } from 'src/use-cases/fightersFight/fightersFight-use-cases';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('fighterFights')
@Controller('fighterFights')
export class FightersFightsController {
    constructor(private readonly fightersFights: FightersFightsUseCases) {}

    @Get()
    @ApiResponse({ type: Array<FightersFightsDto>, status: 200, description: 'Get all fighterFights' })
    async getFightersFightss(): Promise<FightersFightsDto[]> {
        return await this.fightersFights.getAllFightersFights();
    }

    @Get(':id')
    @ApiResponse({ type: FightersFightsDto, status: 200, description: 'Get fighterFights by id' })
    async getFightersFightsById(@Param('id') id: number): Promise<FightersFightsDto> {
        return await this.fightersFights.getFightersFightsById(id);
    }

    @Post()
    @ApiResponse({ type: FightersFightsDto, status: 200, description: 'Create fighterFights' })
    async createFightersFights(@Body() fightersFights: CreateFightersFightsDto): Promise<FightersFightsDto> {
        return await this.fightersFights.createFightersFights(fightersFights);
    }

    @Put(':id')
    @ApiResponse({ type: FightersFightsDto, status: 200, description: 'Update fighterFights' })
    async updateFightersFights(@Param('id') id: number, @Body() fightersFights: UpdateFightersFightsDto): Promise<FightersFightsDto> {
        return await this.fightersFights.updateFightersFights(id, fightersFights);
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'Delete fighterFights' })
    async deleteFightersFights(@Param('id') id: number): Promise<void> {
        return await this.fightersFights.deleteFightersFights(id);
    }
}