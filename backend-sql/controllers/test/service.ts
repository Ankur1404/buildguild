//import { v4 as uuid } from "uuid";
import db from "../../utils/db";
import {
GET_USERS
} from "./sql";

export async function get_users_service() {
  const conn = await db.getConnection();
  try {
    const [rows]: any = await conn.query(GET_USERS);
    return rows[0] || null;
  } finally {
    conn.release();
  }
}

