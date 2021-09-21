import { Request, Response } from "express";
import { ListProductUseCase } from "./ListProductUseCase";

class ListProductController {
  async handle(request: Request, response: Response) {
    const listProductUseCase = new ListProductUseCase();

    try {
      const productList = await listProductUseCase.execute();
      return response.status(200).json(productList);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ListProductController };
