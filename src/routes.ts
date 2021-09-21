import { Router } from "express";
import { ensureAuthenticated } from "./database/middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCases/AuthenticateUser/AuthenticateUserController";
import { CreateProductController } from "./useCases/CreateProduct/CreateProductController";
import { CreateUserController } from "./useCases/CreateUser/CreateUserController";
import { ListProductController } from "./useCases/ListProduct/ListProductController";
import { ListProductByUserController } from "./useCases/ListProductByUser/ListProductByUserController";
import { ListUserController } from "./useCases/ListUser/ListUserController";

const routes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const authenticateUserController = new AuthenticateUserController();
const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const listProductByUserController = new ListProductByUserController();

routes.get("/users", listUserController.handle);
routes.post("/users", createUserController.handle);
routes.post("/auth", authenticateUserController.handle);

routes.get("/products", ensureAuthenticated, listProductController.handle);
routes.get(
  "/users/:id/products",
  ensureAuthenticated,
  listProductByUserController.handle
);
routes.post("/products", ensureAuthenticated, createProductController.handle);

export { routes };
