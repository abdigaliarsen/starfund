import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinColumn } from "typeorm";
import { FighterStats } from "./fighterStats.model";
import { FighterPersonalData } from "./fighterPersonalData.model";
import { Event } from "./event.model";

@Entity()
export class Fighter {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

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