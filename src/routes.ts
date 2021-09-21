import { Router } from "express";
import { CreateUserController } from "./useCases/CreateUser/CreateUserController";
import { ListUserController } from "./useCases/ListUser/ListUserController";

const routes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

routes.get("/users", listUserController.handle);
routes.post("/users", createUserController.handle);

export { routes };
