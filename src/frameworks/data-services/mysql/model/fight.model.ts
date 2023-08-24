import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm";
import { Fighter } from "./fighter.model";
import { Event } from "./event.model";

@Entity()
export class Fight {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @ManyToMany(() => Fighter)
    fighter1: Fighter;

    @ManyToMany(() => Fighter)
    fighter2: Fighter;

    @ManyToOne(() => Event, event => event.fights)
    event: Event;
}