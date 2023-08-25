import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinColumn, OneToMany } from "typeorm";
import { FighterStats } from "./fighterStats.model";
import { FighterPersonalData } from "./fighterPersonalData.model";
import { Event } from "./event.model";
import { BaseEntity } from "./base.model";
import { FightersFights } from "./fightersFights.model";

@Entity()
export class Fighter extends BaseEntity {
    @Column()
    fighterStatsId: number;

    @OneToOne(_ => FighterStats, stats => stats.fighter)
    @JoinColumn()
    fighterStats: FighterStats;

    @Column()
    fighterPersonalDataId: number;

    @OneToOne(_ => FighterPersonalData, personalData => personalData.fighter)
    @JoinColumn()
    fighterPersonalData: FighterPersonalData;

    @OneToMany(() => FightersFights, fightersFights => fightersFights.fighter)
    fightersFights: FightersFights[];

    @Column()
    ranking: number;
}