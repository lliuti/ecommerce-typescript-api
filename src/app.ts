import dotenv from "dotenv";
import "reflect-metadata";
import express from "express";
import "./database/index";

dotenv.config();

const app = express();

export { app };
