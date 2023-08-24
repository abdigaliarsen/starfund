import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1692877290963 implements MigrationInterface {
    name = 'Migrations1692877290963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`fighter_stats\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`wins\` int NOT NULL, \`losses\` int NOT NULL, \`knockouts\` int NOT NULL, \`submissions\` int NOT NULL, \`lastFightDate\` date NOT NULL, \`careerDisclosedEarnings\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fighter_personal_data\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`fullname\` varchar(255) NOT NULL, \`nickname\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`dateOfBirth\` date NOT NULL, \`weightClass\` varchar(255) NOT NULL, \`weight\` int NOT NULL, \`height\` int NOT NULL, \`reach\` int NOT NULL, \`born\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fighter\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`ranking\` int NOT NULL, \`fighterStatsId\` int NULL, \`fighterPersonalDataId\` int NULL, UNIQUE INDEX \`REL_5a0e36a153e18834f4acb76ec2\` (\`fighterStatsId\`), UNIQUE INDEX \`REL_9cb29876fbc59bfb23db95ab2b\` (\`fighterPersonalDataId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`fight\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`eventId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`event\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`title\` varchar(255) NOT NULL, \`dateAndTime\` date NOT NULL, \`location\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`fighter\` ADD CONSTRAINT \`FK_5a0e36a153e18834f4acb76ec22\` FOREIGN KEY (\`fighterStatsId\`) REFERENCES \`fighter_stats\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fighter\` ADD CONSTRAINT \`FK_9cb29876fbc59bfb23db95ab2be\` FOREIGN KEY (\`fighterPersonalDataId\`) REFERENCES \`fighter_personal_data\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fight\` ADD CONSTRAINT \`FK_5b977841fa5df7809fede4adb2b\` FOREIGN KEY (\`eventId\`) REFERENCES \`event\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fight\` DROP FOREIGN KEY \`FK_5b977841fa5df7809fede4adb2b\``);
        await queryRunner.query(`ALTER TABLE \`fighter\` DROP FOREIGN KEY \`FK_9cb29876fbc59bfb23db95ab2be\``);
        await queryRunner.query(`ALTER TABLE \`fighter\` DROP FOREIGN KEY \`FK_5a0e36a153e18834f4acb76ec22\``);
        await queryRunner.query(`DROP TABLE \`event\``);
        await queryRunner.query(`DROP TABLE \`fight\``);
        await queryRunner.query(`DROP INDEX \`REL_9cb29876fbc59bfb23db95ab2b\` ON \`fighter\``);
        await queryRunner.query(`DROP INDEX \`REL_5a0e36a153e18834f4acb76ec2\` ON \`fighter\``);
        await queryRunner.query(`DROP TABLE \`fighter\``);
        await queryRunner.query(`DROP TABLE \`fighter_personal_data\``);
        await queryRunner.query(`DROP TABLE \`fighter_stats\``);
    }

}
