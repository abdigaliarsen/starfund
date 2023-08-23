import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Fighter } from "./fighter.model";
import { BaseEntity } from "./base.model";

@Entity()
export class FighterStats extends BaseEntity {
    @Column()
    wins: number;

    @Column()
    losses: number;

    @Column()
    knockouts: number;

    @Column()
    submissions: number;

    @Column({ type: 'date' })
    lastFightDate: string;

    @Column()
    careerDisclosedEarnings: number;

    @OneToOne(_ => Fighter, fighter => fighter.fighterStats)
    fighter: Fighter;
}