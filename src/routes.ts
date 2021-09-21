import { Router } from "express";
import { ensureAuthenticated } from "./database/middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCases/AuthenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCases/CreateUser/CreateUserController";
import { ListUserController } from "./useCases/ListUser/ListUserController";

const routes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const authenticateUserController = new AuthenticateUserController();

routes.get("/users", listUserController.handle);
routes.post("/users", createUserController.handle);
routes.post("/auth", authenticateUserController.handle);

export { routes };
