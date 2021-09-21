import { Request, Response } from "express";
import { ListProductByUserUseCase } from "./ListProductByUserUseCase";

class ListProductByUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listProductByUserUseCase = new ListProductByUserUseCase();

    try {
      const productList = await listProductByUserUseCase.execute(id);
      return response.status(200).json(productList);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListProductByUserController };
