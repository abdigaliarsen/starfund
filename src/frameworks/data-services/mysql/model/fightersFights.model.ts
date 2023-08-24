import { Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.model";
import { Fighter } from "./fighter.model";
import { Fight } from "./fight.model";

@Entity()
export class FightersFights extends BaseEntity {
    @ManyToOne(() => Fight, fight => fight.fightersFights)
    fight: Fight;

    @ManyToOne(() => Fighter, fighter => fighter.fightersFights)
    fighter: Fighter;
};