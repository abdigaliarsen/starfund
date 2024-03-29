import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MySQLDataServices } from './mysql-data-services.service';
import { Event, Fight, Fighter, FighterPersonalData, FighterStats, FightersFights } from './model';
import { IDataServices } from 'src/core';
import { dataSourceOptions } from '@/configuration/data-source';

@Module({
    imports: [
        TypeOrmModule.forRoot(dataSourceOptions),
        TypeOrmModule.forFeature([Event, Fight, Fighter, FighterPersonalData, FighterStats, FightersFights])
    ],
    providers: [{
        provide: IDataServices,
        useClass: MySQLDataServices
    }],
    exports: [IDataServices]
})
export class MySQLDataServicesModule { }