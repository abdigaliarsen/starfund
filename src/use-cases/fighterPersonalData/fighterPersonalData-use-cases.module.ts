import { Module } from "@nestjs/common";
import { DataServicesModule } from "src/services/data-services/data-services.module";
import { FighterPersonalDataUseCases } from "./fighterPersonalData-use-cases";
import { FighterPersonalDataFactoryService } from "./fighterPersonalData-factory.service";

@Module({
    imports: [DataServicesModule],
    providers: [FighterPersonalDataUseCases, FighterPersonalDataFactoryService],
    exports: [FighterPersonalDataUseCases, FighterPersonalDataFactoryService]
})
export class FighterPersonalDataUseCasesModule {}