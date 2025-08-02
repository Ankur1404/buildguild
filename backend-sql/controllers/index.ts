import { Router } from "express";

import test from "./test";

let router = Router();

router.use("/test", test);

export default router;
