import { IFighterRepository } from "@/core/abstracts/specific-repositories";
import { Fighter } from "../model";
import { MySQLGenericRepository } from "../mysql-generic-repository";
import { Repository } from "typeorm";

export class MySQLFighterRepository extends MySQLGenericRepository<Fighter> implements IFighterRepository {
    constructor(repository: Repository<Fighter>, populateOnFind: string[] = []) {
        super(repository, populateOnFind);
    }

    /// @description
    /// Win gives 1 point, loss takes 1 point, knockout gieves 2 points, submission takes 2 points
    /// Ranking sorts fighters by total points, ordering them by weightClass,
    /// several fighters may have the same ranking
    async updateRankings(): Promise<void> {
        const rankingFormula = 'fighterStats.wins - fighterStats.losses + 2 * fighterStats.knockouts + 2 * fighterStats.submissions';

        const fighters = await this._repository
            .createQueryBuilder()
            .leftJoinAndSelect('fighter.fighterPersonalData', 'fighterPersonalData')
            .leftJoinAndSelect('fighter.fighterStats', 'fighterStatis')
            .select([
                'fighter.id',
                'fighterPersonalData.weightClass',
                'fighterStats.wins',
                'fighterStats.losses',
                'fighterStats.knockouts',
                'fighterStats.submissions',
            ])
            .orderBy('fighterPersonalData.weightClass', 'ASC')
            .addOrderBy(
                rankingFormula,
                'DESC'
            )
            .getMany();

        let currentWeightClass = '';
        let currentRanking = 0;
        for (const fighter of fighters) {
            if (currentWeightClass !== fighter.fighterPersonalData.weightClass) {
                currentWeightClass = fighter.fighterPersonalData.weightClass;
                currentRanking = 1;
            }
            else {
                currentRanking += 1;
            }

            await this._repository.update(fighter.id, { ranking: currentRanking });
        }
    };
}