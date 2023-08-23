import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm";
import { Fight } from "./fight.entity";
import { Fighter } from "./fighter.entity";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

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