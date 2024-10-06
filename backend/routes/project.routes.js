import { Router } from "express";
import { authenticate } from "../middleware/authentication.middleware.js";
import {
  getMyProjects,
  createProject,
  deleteProject
} from "../controllers/project.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { uploadFile } from "../middleware/cloudinary.middleware.js";

const router = Router();
router.route("/myProjects").get(authenticate, getMyProjects);
router.route("/createProject").post(authenticate ,upload , uploadFile, createProject);
router.route("/deleteProject/:projectId").delete(authenticate, deleteProject);

export default router;
