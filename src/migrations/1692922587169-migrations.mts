import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1692922587169 implements MigrationInterface {
    name = 'Migrations1692922587169'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`fighter_stats\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`wins\` int NOT NULL, \`losses\` int NOT NULL, \`knockouts\` int NOT NULL, \`submissions\` int NOT NULL, \`lastFightDate\` date NOT NULL, \`careerDisclosedEarnings\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fighter_personal_data\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`fullname\` varchar(255) NOT NULL, \`nickname\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`dateOfBirth\` date NOT NULL, \`weightClass\` varchar(255) NOT NULL, \`weight\` int NOT NULL, \`height\` int NOT NULL, \`reach\` int NOT NULL, \`born\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fighter\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`fighterStatsId\` int NOT NULL, \`fighterPersonalDataId\` int NOT NULL, \`ranking\` int NOT NULL, UNIQUE INDEX \`REL_fighter_stats_id\` (\`fighterStatsId\`), UNIQUE INDEX \`REL_fighter_personal_data_id\` (\`fighterPersonalDataId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fighters_fights\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`fighterId\` int NOT NULL, \`fightId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fight\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`eventId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`title\` varchar(255) NOT NULL, \`dateAndTime\` date NOT NULL, \`location\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`fighter\` ADD CONSTRAINT \`FK_fighter_fighter_stats\` FOREIGN KEY (\`fighterStatsId\`) REFERENCES \`fighter_stats\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fighter\` ADD CONSTRAINT \`FK_fighter_fighter_personal_data\` FOREIGN KEY (\`fighterPersonalDataId\`) REFERENCES \`fighter_personal_data\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` ADD CONSTRAINT \`FK_fighters_fights_fight\` FOREIGN KEY (\`fightId\`) REFERENCES \`fight\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` ADD CONSTRAINT \`FK_fighters_fights_fighter\` FOREIGN KEY (\`fighterId\`) REFERENCES \`fighter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fight\` ADD CONSTRAINT \`FK_fight_event\` FOREIGN KEY (\`eventId\`) REFERENCES \`event\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fight\` DROP FOREIGN KEY \`FK_fight_event\``);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` DROP FOREIGN KEY \`FK_fighters_fights_fighter\``);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` DROP FOREIGN KEY \`FK_fighters_fights_fight\``);
        await queryRunner.query(`ALTER TABLE \`fighter\` DROP FOREIGN KEY \`FK_fighter_fighter_personal_data\``);
        await queryRunner.query(`ALTER TABLE \`fighter\` DROP FOREIGN KEY \`FK_fighter_fighter_stats\``);
        await queryRunner.query(`DROP TABLE \`event\``);
        await queryRunner.query(`DROP TABLE \`fight\``);
        await queryRunner.query(`DROP TABLE \`fighters_fights\``);
        await queryRunner.query(`DROP INDEX \`REL_9cb29876fbc59bfb23db95ab2b\` ON \`fighter\``);
        await queryRunner.query(`DROP INDEX \`REL_5a0e36a153e18834f4acb76ec2\` ON \`fighter\``);
        await queryRunner.query(`DROP TABLE \`fighter\``);
        await queryRunner.query(`DROP TABLE \`fighter_personal_data\``);
        await queryRunner.query(`DROP TABLE \`fighter_stats\``);
    }

}
