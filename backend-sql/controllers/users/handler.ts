import { Request, Response, NextFunction } from "express";
import {
  get_users_service,
  get_user_service,
  create_user_service,
  update_user_service,
  delete_user_service,
} from "./service";
import { getSuccess } from "../../utils/httpResponses";

// GET all users
export async function get_users(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await get_users_service();
    res.send(getSuccess(data));
  } catch (error) {
    next(error);
  }
}

// GET user by ID
export async function get_user(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const data = await get_user_service(id as string);
    res.send(getSuccess(data));
  } catch (error) {
    next(error);
  }
}

// CREATE user
export async function create_user(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = await create_user_service(req.body);
    res.send(getSuccess(data));
  } catch (error) {
    next(error);
  }
}

// UPDATE user by ID
export async function update_user(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const updatedUser = { ...req.body, id };
    await update_user_service(updatedUser);
    res.send(getSuccess());
  } catch (error) {
    next(error);
  }
}

// DELETE user by ID
export async function delete_user(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const data = await delete_user_service(id as string);
    res.send(getSuccess(data));
  } catch (error) {
    next(error);
  }
}
