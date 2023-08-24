import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Fighter } from "./fighter.model";

@Entity()
export class FighterStats {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

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