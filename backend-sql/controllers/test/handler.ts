import { getSuccess } from "../../utils/httpResponses";
import { Request, Response, NextFunction } from "express";

import {
get_users_service
} from "./service";

// GET individual customer
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

