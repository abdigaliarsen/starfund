import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm";
import { Fight } from "./fight.model";
import { Fighter } from "./fighter.model";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column()
    title: string;

    @Column({ type: 'date' })
    dateAndTime: string;

    @Column()
    location: string;

    @OneToMany(() => Fight, fight => fight.event, { cascade: true })
    fights: Fight[];

    @ManyToMany(() => Fighter, fighter => fighter.events)
    participatingFighters: Fighter[];
}