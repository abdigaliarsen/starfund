import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATA_BASE_CONFIGURATION } from 'src/configuration';
import { PostgresDataServices } from './postgres-data-services.service';
import { Event, Fight, Fighter, FighterPersonalData, FighterStats } from './model';
import { IDataServices } from 'src/core';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: DATA_BASE_CONFIGURATION.postgreHost,
        port: parseInt(DATA_BASE_CONFIGURATION.postgrePort),
        username: DATA_BASE_CONFIGURATION.username,
        password: DATA_BASE_CONFIGURATION.password,
        database: DATA_BASE_CONFIGURATION.database,
        entities: [Event, Fight, Fighter, FighterPersonalData, FighterStats],
        synchronize: true,
    })],
    providers: [{
        provide: IDataServices,
        useClass: PostgresDataServices
    }],
    exports: [IDataServices]
})
export class PostgresDataServicesModule {}