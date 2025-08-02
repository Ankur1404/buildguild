import { Router } from "express";
import asyncHandler from "express-async-handler";
import {
  get_users,
  get_user,
  create_user,
  update_user,
  delete_user
} from "./handler";

// import preAuthorize from "../../common/preAuthorize";
// import { entities } from "../../constants/entities";
// import { rights } from "../../constants/rights";

let router = Router();

// GET all users
router.get(
  "/",
  //preAuthorize(entities.USERS.code, rights.VIEW.code),
  asyncHandler(get_users)
);

//DELETE user by id
router.delete(
  "/:id",
  //preAuthorize(entities.USERS.code, rights.DELETE.code),
  asyncHandler(delete_user)
);

//UPDATE user by id
router.put(
  "/:id",
  //preAuthorize(entities.USERS.code, rights.UPDATE.code),
  asyncHandler(update_user)
);

//get user by ID 
router.get(
  "/:id",
  //preAuthorize(entities.USERS.code, rights.VIEW.code),
  asyncHandler(get_user)
);

//create user
router.post(
  "/",
  //preAuthorize(entities.USERS.code, rights.CREATE.code),
  asyncHandler(create_user)
);

export default router;
