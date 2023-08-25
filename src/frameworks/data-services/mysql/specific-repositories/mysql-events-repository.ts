import { Repository } from "typeorm";
import { Event, Fighter } from "../model";
import { MySQLGenericRepository } from "../mysql-generic-repository";
import { IEventRepository } from "@/core/abstracts/specific-repositories/event-repository.abstract";

export class MySQLEventsRepository extends MySQLGenericRepository<Event> implements IEventRepository {
    constructor(repository: Repository<Event>, populateOnFind: string[] = []) {
        super(repository, populateOnFind);
    }

    async getFightersByEventId(eventId: number): Promise<Fighter[]> {
        const event = await this._repository.findOne({
            where: { id: eventId },
            relations: ["fights", "fights.fightersFights", "fights.fightersFights.fighter"]
        });

        if (!event) throw new Error("Event not found");

        return event.fights.map((fight) =>
            fight.fightersFights.map((fighterFight) =>
                fighterFight.fighter
            )
        ).flat();
    }
}