import { Module } from "@nestjs/common";
import { DataServicesModule } from "src/services/data-services/data-services.module";
import { FightersFightsUseCases } from "./fightersFight-use-cases";
import { FightersFightsFactoryService } from "./fightersFight-factory.service";

@Module({
    imports: [DataServicesModule],
    providers: [FightersFightsUseCases, FightersFightsFactoryService],
    exports: [FightersFightsUseCases, FightersFightsFactoryService]
})
export class FightersFightsUseCasesModule {}