import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.model";
import { Fighter } from "./fighter.model";
import { Fight } from "./fight.model";

@Entity()
export class FightersFights extends BaseEntity {
    @Column()
    fighterId: number;

    @ManyToOne(() => Fight, fight => fight.fightersFights)
    fight: Fight;

    @Column()
    fightId: number;

    @ManyToOne(() => Fighter, fighter => fighter.fightersFights)
    fighter: Fighter;
};