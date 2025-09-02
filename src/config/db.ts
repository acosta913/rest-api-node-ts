import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(process.env.DB_CONN_STRING!, {
  models: [__dirname + "/../models/**/*"],
});

export default db;
