import express from "express";
import { addContact, getContacts } from "../controllers/contactController.js";

const router = express.Router();

router.post("/add", addContact);
router.get("/", getContacts);

export default router;
