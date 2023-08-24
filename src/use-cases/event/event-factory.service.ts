import { Injectable } from "@nestjs/common";
import { EventDto, CreateEventDto, UpdateEventDto } from "../../core/dtos/event.dto";

@Injectable()
export class EventFactoryService {
    createNewEvent(createEventDto: CreateEventDto) {
        const event: EventDto = {
            title: createEventDto.title,
            location: createEventDto.location,
            dateAndTime: createEventDto.dateAndTime,
            fights: createEventDto.fights ?? [],
            participatingFighters: createEventDto.participatingFighters ?? [],
        };

        return event;
    }

    updateEvent(updateEventDto: UpdateEventDto) {
        return { ...new EventDto(), ...updateEventDto };
    }
}