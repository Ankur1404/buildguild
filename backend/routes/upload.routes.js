import { Router } from "express";
import { uploadFile } from "../controllers/upload.controller.js"; 
import { upload } from "../middleware/multer.middleware.js"; 

const router = Router();
router.route('./uploads').post(upload, uploadFile);

export default router;
