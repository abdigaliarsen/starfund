import { Event, Fighter } from "@/frameworks/data-services/mysql/model";
import { IGenericRepository } from "../generic-repository.abstract";

export abstract class IEventRepository extends IGenericRepository<Event> {
    abstract getFightersByEventId(eventId: number): Promise<Fighter[]>;
}