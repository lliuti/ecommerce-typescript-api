import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCases/AuthenticateUser/AuthenticateUserController";
import { ConfirmUserEmailController } from "./useCases/ConfirmUserEmail/ConfirmUserEmailController";
import { CreateProductController } from "./useCases/CreateProduct/CreateProductController";
import { CreateTransactionController } from "./useCases/CreateTransaction/CreateTransactionController";
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
const createTransactionController = new CreateTransactionController();
const confirmUserEmailController = new ConfirmUserEmailController();

routes.get("/users", listUserController.handle);
routes.post("/users", createUserController.handle);
routes.post("/auth", authenticateUserController.handle);
routes.get("/users/:id/confirmation", confirmUserEmailController.handle);

routes.get("/products", ensureAuthenticated, listProductController.handle);
routes.get(
  "/users/:id/products",
  ensureAuthenticated,
  listProductByUserController.handle
);
routes.post("/products", ensureAuthenticated, createProductController.handle);

routes.post(
  "/products/:id/buy",
  ensureAuthenticated,
  createTransactionController.handle
);

export { routes };
