import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Fighter } from "./fighter.model";
import { Event } from "./event.model";
import { BaseEntity } from "./base.model";
import { FightersFights } from "./fightersFights.model";

@Entity()
export class Fight extends BaseEntity {
    @Column()
    eventId: number;

    @ManyToOne(() => Event, event => event.fights)
    event: Event;

    @OneToMany(() => FightersFights, fightersFights => fightersFights.fight)
    fightersFights: FightersFights[];
}