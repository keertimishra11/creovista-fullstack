import express from "express";

import { addProject, getProjects, upload } from "../controllers/projectController.js";

const router = express.Router();

// Add Project
router.post("/add", upload.single("image"), addProject);

// Fetch All Projects
router.get("/", getProjects);


export default router;
