import { Module } from '@nestjs/common';
import {
	EventController,
	FightController,
	FighterController,
	FighterPersonalDataController,
	FighterStatsController,
} from 'src/controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { EventUseCasesModule } from './use-cases/event/event-use-cases.module';
import { FightUseCasesModule } from './use-cases/fight/fight-use-cases.module';
import { FighterUseCasesModule } from './use-cases/fighter/fighter-use-cases.module';
import { FighterPersonalDataUseCasesModule } from './use-cases/fighterPersonalData/fighterPersonalData-use-cases.module';
import { FighterStatsUseCasesModule } from './use-cases/fighterStats/fighterStats-use-cases.module';

@Module({
	imports: [
		DataServicesModule,
		EventUseCasesModule,
		FightUseCasesModule,
		FighterUseCasesModule,
		FighterPersonalDataUseCasesModule,
		FighterStatsUseCasesModule
	],
	controllers: [
		EventController,
		FightController,
		FighterController,
		FighterStatsController,
		FighterPersonalDataController
	],
	providers: []
})
export class AppModule { }
