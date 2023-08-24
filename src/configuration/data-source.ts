import { Event, Fight, Fighter, FighterPersonalData, FighterStats, FightersFights } from "../frameworks/data-services/mysql/model";
import { DATA_BASE_CONFIGURATION } from ".";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: DATA_BASE_CONFIGURATION.mysqlHost,
    port: parseInt(DATA_BASE_CONFIGURATION.mysqlPort),
    username: DATA_BASE_CONFIGURATION.mysqlUser,
    password: DATA_BASE_CONFIGURATION.mysqlPassword,
    database: DATA_BASE_CONFIGURATION.mysqlDatabase,
    entities: [Event, Fight, Fighter, FighterPersonalData, FighterStats, FightersFights],
    migrations: ['src/migrations/*.ts'],
    migrationsTableName: 'migrations',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;