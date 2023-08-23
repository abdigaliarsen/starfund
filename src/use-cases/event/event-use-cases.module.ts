import { Module } from "@nestjs/common";
import { DataServicesModule } from "src/services/data-services/data-services.module";
import { EventUseCases } from "./event-use-cases";
import { EventFactoryService } from "./event-factory.service";

@Module({
    imports: [DataServicesModule],
    providers: [EventUseCases, EventFactoryService],
    exports: [EventUseCases, EventFactoryService]
})
export class EventUseCasesModule {}