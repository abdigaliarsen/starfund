import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Fighter } from "./fighter.model";
import { BaseEntity } from "./base.model";

@Entity()
export class FighterPersonalData extends BaseEntity {
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