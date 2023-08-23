import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinColumn } from "typeorm";
import { FighterStats } from "./fighterStats.entity";
import { FighterPersonalData } from "./fighterPersonalData.entity";
import { Event } from "./event.entity";

@Entity()
export class Fighter {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(_ => FighterStats, stats => stats.fighter)
    @JoinColumn()
    fighterStats: FighterStats;

    @OneToOne(_ => FighterPersonalData, personalData => personalData.fighter)
    @JoinColumn()
    fighterPersonalData: FighterPersonalData;

    @ManyToMany(() => Event, event => event.participatingFighters)
    events: Event[];

    @Column()
    ranking: number;
}