import Client from "../models/client.js";
import multer from "multer";

// Multer Storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

export const upload = multer({ storage: storage });

// Add Client
export const addClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;
    const image = req.file ? req.file.path : null;

    const newClient = await Client.create({
      name,
      description,
      designation,
      image
    });

    res.status(201).json({ message: "Client added successfully", newClient });
  } catch (err) {
    res.status(500).json({ error: "Error creating client", details: err });
  }
};

// Get All Clients
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (err) {
    res.status(500).json({ error: "Error fetching clients" });
  }
};
