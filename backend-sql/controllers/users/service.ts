// import { v4 as uuid } from "uuid";
import db from "../../utils/db";
import { v4 as uuid } from "uuid";
import {
  GET_USERS,
  GET_USER_BY_ID,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
} from "./sql";

import {
  User
} from "../../types/user";

// GET all users
export async function get_users_service(): Promise<User[]>  {
  const conn = await db.getConnection();
  try {
    const [rows]: any = await conn.query(GET_USERS);
    return rows;
  } finally {
    conn.release();
  }
}

// GET user by ID
export async function get_user_service(id: string): Promise<User | null>  {
  const conn = await db.getConnection();
  try {
    const [rows]: any = await conn.query(GET_USER_BY_ID, [id]);
    return rows[0] || null;
  } finally {
    conn.release();
  }
}

// CREATE user
export async function create_user_service(user: Omit<User, "id">): Promise<string> {
  const conn = await db.getConnection();
  const id = uuid();
  try {
    await conn.beginTransaction();
    await conn.query(CREATE_USER, [
      id,
      user.username,
      user.firstName,
      user.lastName,
      user.email,
      user.profileImage,
      user.verified,
    ]);
    await conn.commit();
    return id;
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
}

// UPDATE user by ID
export async function update_user_service(user: User): Promise<void> {
  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();
    await conn.query(UPDATE_USER, [
      user.username,
      user.firstName,
      user.lastName,
      user.email,
      user.profileImage,
      user.verified,
      user.id
    ]);
    await conn.commit();
  } catch (error) {
    await conn.rollback();
    throw error;
  } finally {
    conn.release();
  }
}

// DELETE user by ID
export async function delete_user_service(id: string) {
  const conn = await db.getConnection();
  try {
    await conn.query(DELETE_USER, [id]);
    return { success: true };
  } finally {
    conn.release();
  }
}
