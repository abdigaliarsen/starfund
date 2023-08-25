import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { EventDto, FighterDto } from 'src/core';
import { EventUseCases } from 'src/use-cases/event/event-use-cases';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('event')
@Controller('event')
export class EventController {
    constructor(private readonly eventUseCases: EventUseCases) {}

    @Get()
    @ApiResponse({ type: Array<EventDto>, status: 200, description: 'Get all events' })
    async getEvents(): Promise<EventDto[]> {
        return await this.eventUseCases.getAllEvent();
    }

    @Get(':id')
    @ApiResponse({ type: EventDto, status: 200, description: 'Get event by id' })
    async getEventById(@Param('id') id: number): Promise<EventDto> {
        return await this.eventUseCases.getEventById(id);
    }

    @Post()
    @ApiResponse({ type: EventDto, status: 200, description: 'Create event' })
    async createEvent(@Body() event: EventDto): Promise<EventDto> {
        return await this.eventUseCases.createEvent(event);
    }

    @Put(':id')
    @ApiResponse({ type: EventDto, status: 200, description: 'Update event' })
    async updateEvent(@Param('id') id: number, @Body() event: EventDto): Promise<EventDto> {
        return await this.eventUseCases.updateEvent(id, event);
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'Delete event' })
    async deleteEvent(@Param('id') id: number): Promise<void> {
        return await this.eventUseCases.deleteEvent(id);
    }

    @Get(':id/fighters')
    @ApiResponse({ type: Array<EventDto>, status: 200, description: 'Get event fighters' })
    async getEventFighters(@Param('id') id: number): Promise<FighterDto[]> {
        return await this.eventUseCases.getEventFighters(id);
    }
}