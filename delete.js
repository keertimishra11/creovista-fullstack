import mongoose from "mongoose";
import dotenv from "dotenv";
import Project from "./models/project.js";

dotenv.config();

async function run() {
  await mongoose.connect(process.env.MONGO_URI, { dbName: "flipr_task_db" });
  await Project.deleteMany({});
  console.log("All projects deleted.");
  mongoose.disconnect();
}

run();
