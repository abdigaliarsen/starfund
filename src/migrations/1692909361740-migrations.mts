import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1692909361740 implements MigrationInterface {
    name = 'Migrations1692909361740'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fight\` ADD \`fightersFightsId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` CHANGE \`fightId\` \`fightId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` CHANGE \`fighterId\` \`fighterId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` ADD CONSTRAINT \`FK_c29cbf8c3f6f4302b379cbf5c8e\` FOREIGN KEY (\`fightId\`) REFERENCES \`fight\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` ADD CONSTRAINT \`FK_b8c1f8785db55de60dd085c570f\` FOREIGN KEY (\`fighterId\`) REFERENCES \`fighter\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`fight\` ADD CONSTRAINT \`FK_40c284337701da19329cf7d4028\` FOREIGN KEY (\`fightersFightsId\`) REFERENCES \`fighters_fights\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`fight\` DROP FOREIGN KEY \`FK_40c284337701da19329cf7d4028\``);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` DROP FOREIGN KEY \`FK_b8c1f8785db55de60dd085c570f\``);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` DROP FOREIGN KEY \`FK_c29cbf8c3f6f4302b379cbf5c8e\``);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` CHANGE \`fighterId\` \`fighterId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`fighters_fights\` CHANGE \`fightId\` \`fightId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`fight\` DROP COLUMN \`fightersFightsId\``);
    }

}
