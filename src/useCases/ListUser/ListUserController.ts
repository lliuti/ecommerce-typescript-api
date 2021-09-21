import { Request, Response } from "express";
import { ListUserUseCase } from "./ListUserUseCase";

class ListUserController {
  async handle(request: Request, response: Response) {
    const listUserUseCase = new ListUserUseCase();

    try {
      const userList = await listUserUseCase.execute();
      return response.status(200).json(userList);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListUserController };
