import { Router } from "express";
import asyncHandler from "express-async-handler";
import {
  get_users
} from "./handler";

// import preAuthorize from "../../common/preAuthorize";
// import { entities } from "../../constants/entities";
// import { rights } from "../../constants/rights";

let router = Router();

// GET all customers
router.get(
  "/",
  //preAuthorize(entities.TEST.code, rights.TEST.code),
  asyncHandler(get_users)
);

export default router;
