import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserUseCase = new AuthenticateUserUseCase();

    try {
      const token = await authenticateUserUseCase.execute({ email, password });
      return response.status(201).json(token);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { AuthenticateUserController };
