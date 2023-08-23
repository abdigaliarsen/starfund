import { Module } from "@nestjs/common";
import { DataServicesModule } from "src/services/data-services/data-services.module";
import { FightUseCases } from "./fight-use-cases";
import { FightFactoryService } from "./fight-factory.service";

@Module({
    imports: [DataServicesModule],
    providers: [FightUseCases, FightFactoryService],
    exports: [FightUseCases, FightFactoryService]
})
export class FightUseCasesModule {}