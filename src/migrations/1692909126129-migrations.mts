import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1692909126129 implements MigrationInterface {
    name = 'Migrations1692909126129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`fighters_fights\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`fighterId\` int NOT NULL, \`fightId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`fighters_fights\``);
    }

}
