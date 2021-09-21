import { getCustomRepository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepository } from "../../repositories/UserRepository";

class CreateUserUseCase {
  async execute({ name, email, password, document }: ICreateUserDTO) {
    const userRepository = getCustomRepository(UserRepository);

    const doesEmailOrDocumentExist = await userRepository.find({
      where: [{ email }, { document }],
    });

    if (doesEmailOrDocumentExist) {
      throw new Error("Email/Document already registered.");
    }

    const user = userRepository.create({
      name,
      email,
      password,
      document,
    });

    await userRepository.save(user);
  }
}

export { CreateUserUseCase };
