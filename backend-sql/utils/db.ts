import mysql, { PoolOptions } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const access: PoolOptions = {
  host: process.env.DB_HOST as string,
  database: process.env.DB_NAME as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
  port: Number(process.env.DB_PORT) as number,
};

const db = mysql.createPool(access);

export default db;
