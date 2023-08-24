import { Injectable } from "@nestjs/common";
import { EventDto, CreateEventDto, UpdateEventDto } from "../../core/dtos/event.dto";

@Injectable()
export class EventFactoryService {
    createNewEvent(createEventDto: CreateEventDto) {
        const event = new EventDto();

        event.title = createEventDto.title;
        event.location = createEventDto.location;
        event.dateAndTime = createEventDto.dateAndTime;

        return event;
    }

    updateEvent(updateEventDto: UpdateEventDto) {
        const event = new EventDto();

        event.title = updateEventDto.title;
        event.location = updateEventDto.location;
        event.dateAndTime = updateEventDto.dateAndTime;

        return event;
    }
}