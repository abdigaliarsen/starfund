import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import { Fighter } from "./fighter.model";
import { Event } from "./event.model";
import { BaseEntity } from "./base.model";

@Entity()
export class Fight extends BaseEntity {
    @ManyToMany(() => Fighter)
    fighter1: Fighter;

    @ManyToMany(() => Fighter)
    fighter2: Fighter;

    @ManyToOne(() => Event, event => event.fights)
    event: Event;
}