import Project from "../models/project.js";
import multer from "multer";

// Multer Storage for Image Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

export const upload = multer({ storage: storage });

// ADD Project
export const addProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    // IMPORTANT FIX
    const image = req.file ? `uploads/${req.file.filename}` : null;

    const newProject = await Project.create({
      name,
      description,
      image,
    });

    res.status(201).json({ message: "Project added successfully", newProject });
  } catch (err) {
    res.status(500).json({ error: "Error creating project", details: err });
  }
};

// GET all Projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: "Error fetching projects" });
  }
};
