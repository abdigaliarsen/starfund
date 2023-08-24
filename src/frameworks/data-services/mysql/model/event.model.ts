import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm";
import { Fight } from "./fight.model";
import { Fighter } from "./fighter.model";
import { BaseEntity } from "./base.model";

@Entity()
export class Event extends BaseEntity {
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