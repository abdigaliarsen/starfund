export const DATA_BASE_CONFIGURATION = {
    postgreConnectionString: process.env
        .CLEAN_NEST_POSTGRE_CONNECTION_STRING as string,
    postgreHost: process.env.CLEAN_NEST_POSTGRE_HOST as string,
    postgrePort: process.env.CLEAN_NEST_POSTGRE_PORT as string,
    username: process.env.CLEAN_NEST_POSTGRE_USERNAME as string,
    password: process.env.CLEAN_NEST_POSTGRE_PASSWORD as string,
    database: process.env.CLEAN_NEST_POSTGRE_DATABASE as string,
};