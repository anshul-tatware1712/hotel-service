import type { Config } from "./database.types.js";
import logger from "#config/logger.js";

import { Sequelize } from "@sequelize/core";
import { MySqlDialect } from "@sequelize/mysql";
import { Hotel } from "#database/models/hotel.js";

const config: Config = {
  development: {
    username: process.env.DB_USERNAME || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "AirBnB_Hotels",
    host: process.env.DB_HOST || "127.0.0.1",
    port: Number(process.env.DB_PORT) || 3306,
    dialect: "mysql",
  },
};

export default config;

const sequelize = new Sequelize({
  dialect: MySqlDialect,
  database: config.development.database,
  user: config.development.username,
  password: config.development.password || "",
  host: config.development.host,
  port: config.development.port,
  models: [Hotel],
  logging: (...msg) => logger.info(msg),
});

export async function connectDB(): Promise<void> {
  try {
    await sequelize.authenticate();
    logger.info(`Database connected: ${config.development.database}@${config.development.host}:${config.development.port}`);
  } catch (error) {
    logger.error("Unable to connect to the database", { error });
    throw error;
  }
}
