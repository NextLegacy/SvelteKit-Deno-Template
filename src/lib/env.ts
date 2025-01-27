import * as server_env from "$env/static/private";

const DATABASE_USERNAME = server_env.DATABASE_USERNAME;
const DATABASE_PASSWORD = server_env.DATABASE_PASSWORD;
const DATABASE_HOST = server_env.DATABASE_HOST;
const DATABASE_PORT = server_env.DATABASE_PORT;
const DATABASE_NAME = server_env.DATABASE_NAME;

const DATABASE_URL = `postgres://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

export { DATABASE_URL };
