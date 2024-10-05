import { asyncHandler } from "../utils/asyncHandler.js";
import { Router } from "express";
import { Project } from "../models/Project/project.model.js";
import {User} from "../models/User/user.model.js";
import { projectCreationUtility } from "../utils/projectCreation.js";

const router = Router();

const getMyProjects = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const projects = await Project.find({ creator: userId });
  console.log(projects.length);
if(!projects.length){
  return  res.status(404).send({ message: "No Projects", success: false});
}
  res.status(200).send({ message: "Projects Fetched", success: true, projects });
});

const createProject = asyncHandler(async (req, res) => {
  const { name, location, displayImage } = req.body;

  if (!name || !location || !displayImage) {
    return res
      .status(400)
      .send({ message: "All fields are required", success: false });
  }

  const newProject = {
    name,
    location,
    displayImage,
    creator: req.user._id,
  };
  
  const projectId = await projectCreationUtility(newProject);
  const user = await User.findById(req.user._id);
  user.projects.push(projectId);
  await user.save();

  res.status(200).send({
    message: "Project Created Successfully",
    success: true,
    project: newProject,
  });
});

export { getMyProjects, createProject };

export default router;