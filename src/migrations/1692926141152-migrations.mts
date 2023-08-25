import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1692926141152 implements MigrationInterface {
    name = 'Migrations1692926141152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`fighter_stats\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`wins\` int NOT NULL, \`losses\` int NOT NULL, \`knockouts\` int NOT NULL, \`submissions\` int NOT NULL, \`lastFightDate\` date NOT NULL, \`careerDisclosedEarnings\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fighter_personal_data\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`fullname\` varchar(255) NOT NULL, \`nickname\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`dateOfBirth\` date NOT NULL, \`weightClass\` varchar(255) NOT NULL, \`weight\` int NOT NULL, \`height\` int NOT NULL, \`reach\` int NOT NULL, \`born\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fighter\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`fighterStatsId\` int NOT NULL, \`fighterPersonalDataId\` int NOT NULL, \`ranking\` int NOT NULL, UNIQUE INDEX \`REL_fightStats\` (\`fighterStatsId\`), UNIQUE INDEX \`REL_fightPersonalDataId\` (\`fighterPersonalDataId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fighters_fights\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`fighterId\` int NOT NULL, \`fightId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fight\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`eventId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`title\` varchar(255) NOT NULL, \`dateAndTime\` date NOT NULL, \`location\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`fighter\` ADD CONSTRAINT \`FK_fighter_fighterStats\` FOREIGN KEY (\`fighterStatsId\`) REFERENCES \`fighter_stats\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fighter\` ADD CONSTRAINT \`FK_fighter_fighterPersonalData\` FOREIGN KEY (\`fighterPersonalDataId\`) REFERENCES \`fighter_personal_data\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` ADD CONSTRAINT \`FK_fighter_fights_fight\` FOREIGN KEY (\`fightId\`) REFERENCES \`fight\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` ADD CONSTRAINT \`FK_fighter_fights_fighter\` FOREIGN KEY (\`fighterId\`) REFERENCES \`fighter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fight\` ADD CONSTRAINT \`FK_fight_event\` FOREIGN KEY (\`eventId\`) REFERENCES \`event\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fight\` DROP FOREIGN KEY \`FK_fight_event\``);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` DROP FOREIGN KEY \`FK_fighter_fights_fighter\``);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` DROP FOREIGN KEY \`FK_fighter_fights_fight\``);
        await queryRunner.query(`ALTER TABLE \`fighter\` DROP FOREIGN KEY \`FK_fighter_fighterPersonalData\``);
        await queryRunner.query(`ALTER TABLE \`fighter\` DROP FOREIGN KEY \`FK_fighter_fighterStats\``);
        await queryRunner.query(`DROP TABLE \`event\``);
        await queryRunner.query(`DROP TABLE \`fight\``);
        await queryRunner.query(`DROP TABLE \`fighters_fights\``);
        await queryRunner.query(`DROP INDEX \`REL_fightStats\` ON \`fighter\``);
        await queryRunner.query(`DROP INDEX \`REL_fightPersonalDataId\` ON \`fighter\``);
        await queryRunner.query(`DROP TABLE \`fighter\``);
        await queryRunner.query(`DROP TABLE \`fighter_personal_data\``);
        await queryRunner.query(`DROP TABLE \`fighter_stats\``);
    }

}
