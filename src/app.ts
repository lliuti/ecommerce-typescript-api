import dotenv from "dotenv";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import "./database/index";
import { routes } from "./routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

export { app };
