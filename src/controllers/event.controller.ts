import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { EventDto } from 'src/core';
import { EventUseCases } from 'src/use-cases/event/event-use-cases';

@Controller('event')
export class EventController {
    constructor(private readonly eventUseCases: EventUseCases) {}

    @Get()
    async getEvents() {
        return await this.eventUseCases.getAllEvent();
    }

    @Get(':id')
    async getEventById(@Param('id') id: number) {
        return await this.eventUseCases.getEventById(id);
    }

    @Post()
    async createEvent(@Body() event: EventDto) {
        return await this.eventUseCases.createEvent(event);
    }

    @Put(':id')
    async updateEvent(@Param('id') id: number, @Body() event: EventDto) {
        return await this.eventUseCases.updateEvent(id, event);
    }
}