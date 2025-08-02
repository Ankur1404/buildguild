import { Router } from "express";

import users from "./users";

let router = Router();

router.use("/users", users);

export default router;
