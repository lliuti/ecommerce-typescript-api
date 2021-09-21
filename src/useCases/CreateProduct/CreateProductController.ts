import { Request, Response } from "express";
import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, price } = request.body;

    const createProductUseCase = new CreateProductUseCase();

    try {
      createProductUseCase.execute({
        name,
        description,
        price,
        owner_id: request.user_id,
      });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateProductController };
