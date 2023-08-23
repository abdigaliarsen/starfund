import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATA_BASE_CONFIGURATION } from 'src/configuration';
import { PostgresDataServices } from './postgres-data-services.service';
import { Event, Fight, Fighter, FighterPersonalData, FighterStats } from './model';
import { IDataServices } from 'src/core';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: DATA_BASE_CONFIGURATION.mysqlHost,
        port: parseInt(DATA_BASE_CONFIGURATION.mysqlPort),
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