import { Injectable } from "@nestjs/common";
import { CreateEventDto, EventDto, UpdateEventDto } from "../../core/dtos/event.dto";
import { IDataServices } from "../../core/abstracts";
import { Event } from "src/frameworks/data-services/mysql/model";
import { plainToClass } from "class-transformer";
import { EventFactoryService } from "./event-factory.service";

@Injectable()
export class EventUseCases {
    constructor(
        private readonly dataServices: IDataServices,
        private readonly eventFactoryService: EventFactoryService
    ) {}

    async getAllEvent(): Promise<EventDto[]> {
        const event = await this.dataServices.events.getAll();
        return event.map((event_1: Event) => {
            return plainToClass(EventDto, event_1);
        });
    }

    async getEventById(id: number): Promise<EventDto> {
        return plainToClass(EventDto, this.dataServices.events.get(id));
    }

    async createEvent(createEvent: CreateEventDto): Promise<EventDto> {
        const event = this.eventFactoryService.createNewEvent(createEvent);
        return this.dataServices.events.create(plainToClass(Event, event)).then((event_1: Event) => {
            return plainToClass(EventDto, event_1);
        });
    }

    async updateEvent(
        eventId: number,
        updateEvent: UpdateEventDto
    ): Promise<EventDto> {
        const event = this.eventFactoryService.updateEvent(updateEvent);
        return this.dataServices.events.update(eventId, plainToClass(Event, event)).then((event_1: Event) => {
            return plainToClass(EventDto, event_1);
        });
    }

    async deleteEvent(eventId: number): Promise<void> {
        return this.dataServices.events.delete(eventId);
    }
};