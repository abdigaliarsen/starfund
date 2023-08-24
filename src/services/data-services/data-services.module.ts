import { Module } from "@nestjs/common";
import { MySQLDataServicesModule } from "src/frameworks/data-services/mysql/mysql-data-services.module";

@Module({
    imports: [MySQLDataServicesModule],
    exports: [MySQLDataServicesModule]
})
export class DataServicesModule {}