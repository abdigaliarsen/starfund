import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinColumn, OneToMany } from "typeorm";
import { FighterStats } from "./fighterStats.model";
import { FighterPersonalData } from "./fighterPersonalData.model";
import { Event } from "./event.model";
import { BaseEntity } from "./base.model";
import { FightersFights } from "./fightersFights.model";

@Entity()
export class Fighter extends BaseEntity {
    @OneToOne(_ => FighterStats, stats => stats.fighter)
    @JoinColumn()
    fighterStats: FighterStats;

    @OneToOne(_ => FighterPersonalData, personalData => personalData.fighter)
    @JoinColumn()
    fighterPersonalData: FighterPersonalData;

    @OneToMany(() => FightersFights, fightersFights => fightersFights.fighter)
    fightersFights: FightersFights[];

    @ManyToMany(() => Event, event => event.participatingFighters)
    events: Event[];

    @Column()
    ranking: number;
}