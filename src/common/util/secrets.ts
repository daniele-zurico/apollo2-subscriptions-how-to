import dotenv from "dotenv";
import fs from "fs";
import logger from "./logger";
console.log(process.env.NODE_ENV);
if (fs.existsSync(".env")) {
	logger.log("info", "Using .env file to supply config environment variables");
	dotenv.config({ path: ".env" });
} else {
	logger.emerg("NO ENV DEFINED");
}

export const MONGO_PORT = process.env.MONGO_PORT;
export const MONGO_URL = process.env.MONGO_URL;
export const DB_NAME = process.env.DB_NAME;
export const CLIENT_ID = process.env.CLIENT_ID;
