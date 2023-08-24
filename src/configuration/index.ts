import { configDotenv } from "dotenv";

configDotenv();

export const DATA_BASE_CONFIGURATION = {
    mysqlHost: process.env.MYSQL_HOST as string,
    mysqlPort: process.env.MYSQL_PORT as string,
    mysqlUser: process.env.MYSQL_USER as string,
    mysqlPassword: process.env.MYSQL_PASSWORD as string,
    mysqlDatabase: process.env.MYSQL_DATABASE as string
};