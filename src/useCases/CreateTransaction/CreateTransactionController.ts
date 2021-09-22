import { Request, Response } from "express";
import { CreateTransactionUseCase } from "./CreateTransactionUseCase";

class CreateTransactionController {
  async handle(request: Request, response: Response) {
    const createTransactionUseCase = new CreateTransactionUseCase();

    const { id } = request.params;

    const { method } = request.body;

    try {
      await createTransactionUseCase.execute({
        product_id: id,
        buyer_id: request.user_id,
        method,
      });
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { CreateTransactionController };
