import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Fighter } from "./fighter.model";

@Entity()
export class FighterPersonalData {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;

    @Column()
    fullname: string;

    @Column()
    nickname: string;

    @Column()
    age: number;

    @Column({ type: 'date' })
    dateOfBirth: string;

    @Column()
    weightClass: string;

    @Column()
    weight: number;

    @Column()
    height: number;

    @Column()
    reach: number;

    @Column()
    born: string;

    @OneToOne(_ => Fighter, fighter => fighter.fighterPersonalData)
    fighter: Fighter;
}