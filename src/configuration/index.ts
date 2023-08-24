import { config } from "dotenv";
import { ConfigService } from "@nestjs/config";

config();
const configService = new ConfigService();

export const DATA_BASE_CONFIGURATION = {
    mysqlHost: configService.getOrThrow<string>('MYSQL_HOST'),
    mysqlPort: configService.getOrThrow<string>('MYSQL_PORT'),
    mysqlUser: configService.getOrThrow<string>('MYSQL_USER'),
    mysqlPassword: configService.getOrThrow<string>('MYSQL_PASSWORD'),
    mysqlDatabase: configService.getOrThrow<string>('MYSQL_DATABASE'),
};