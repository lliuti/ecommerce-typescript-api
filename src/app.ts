import dotenv from "dotenv";
import "reflect-metadata";
import express from "express";
import cors from "cors";
import "./database/index";
import { routes } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerConfig from "./swagger.json";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

export { app };
