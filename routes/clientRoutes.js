import express from "express";
import { addClient, getClients, upload } from "../controllers/clientController.js";

const router = express.Router();

router.post("/add", upload.single("image"), addClient);
router.get("/", getClients);

export default router;
