import { Request, Response } from "express";
import { ConfirmUserEmailUseCase } from "./ConfirmUserEmailUseCase";

class ConfirmUserEmailController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const confirmUserEmailUseCase = new ConfirmUserEmailUseCase();

    try {
      await confirmUserEmailUseCase.execute(id);
      return response.status(200).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export { ConfirmUserEmailController };
