import { getCustomRepository } from "typeorm";
import { ConfirmationEmailRepository } from "../../repositories/ConfirmationEmailRepository";

class ConfirmUserEmailUseCase {
  async execute(id: string) {
    const confirmationEmailRepository = getCustomRepository(
      ConfirmationEmailRepository
    );

    const confirmationEmail = await confirmationEmailRepository.findOne({
      user_id: id,
    });

    if (!confirmationEmail) {
      throw new Error("Confirmation email not found");
    }

    confirmationEmail.confirmed_email = true;

    await confirmationEmailRepository.save(confirmationEmail);
  }
}

export { ConfirmUserEmailUseCase };
