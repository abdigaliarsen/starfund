import { Module } from "@nestjs/common";
import { DataServicesModule } from "src/services/data-services/data-services.module";
import { FighterStatsUseCases } from "./fighterStats-use-cases";
import { FighterStatsFactoryService } from "./fighterStats-factory.service";

@Module({
    imports: [DataServicesModule],
    providers: [FighterStatsUseCases, FighterStatsFactoryService],
    exports: [FighterStatsUseCases, FighterStatsFactoryService]
})
export class FighterStatsUseCasesModule {}