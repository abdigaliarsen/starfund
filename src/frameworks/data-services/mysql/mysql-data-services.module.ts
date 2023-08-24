import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATA_BASE_CONFIGURATION } from 'src/configuration';
import { MySQLDataServices } from './mysql-data-services.service';
import { Event, Fight, Fighter, FighterPersonalData, FighterStats } from './model';
import { IDataServices } from 'src/core';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: DATA_BASE_CONFIGURATION.mysqlHost,
            port: parseInt(DATA_BASE_CONFIGURATION.mysqlPort),
            username: DATA_BASE_CONFIGURATION.mysqlUser,
            password: DATA_BASE_CONFIGURATION.mysqlPassword,
            database: DATA_BASE_CONFIGURATION.mysqlDatabase,
            entities: [Event, Fight, Fighter, FighterPersonalData, FighterStats]
        }),
        TypeOrmModule.forFeature([Event, Fight, Fighter, FighterPersonalData, FighterStats])
    ],
    providers: [{
        provide: IDataServices,
        useClass: MySQLDataServices
    }],
    exports: [IDataServices]
})
export class MySQLDataServicesModule { }