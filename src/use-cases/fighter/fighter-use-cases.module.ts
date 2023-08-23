import { Module } from "@nestjs/common";
import { DataServicesModule } from "src/services/data-services/data-services.module";
import { FighterUseCases } from "./fighter-use-cases";
import { FighterFactoryService } from "./fighter-factory.service";

@Module({
    imports: [DataServicesModule],
    providers: [FighterUseCases, FighterFactoryService],
    exports: [FighterUseCases, FighterFactoryService]
})
export class FighterUseCasesModule {}