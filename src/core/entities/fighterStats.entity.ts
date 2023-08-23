import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Fighter } from "./fighter.entity";

@Entity()
export class FighterStats {
    @PrimaryGeneratedColumn()
    id: number;

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