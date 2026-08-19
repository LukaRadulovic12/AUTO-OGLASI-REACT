import dotenv from "dotenv/config";
import express from "express";
import cors from "cors";
import auth from "./routes/auth.mjs";
import Database from "./database/database.mjs";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
  }),
);
app.use(express.json());
app.use("/api/auth", auth);
Database.getInstance();

app.listen(process.env.BACKEND_PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${process.env.BACKEND_PORT}`);
});
