import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import { Fighter } from "./fighter.entity";
import { Event } from "./event.entity";

@Entity()
export class Fight {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Fighter)
    fighter1: Fighter;

    @ManyToMany(() => Fighter)
    fighter2: Fighter;

    @ManyToOne(() => Event, event => event.fights)
    event: Event;
}