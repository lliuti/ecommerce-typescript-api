import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepository } from "../../repositories/UserRepository";

class CreateUserUseCase {
  async execute({
    name,
    email,
    password,
    document,
  }: ICreateUserDTO): Promise<void> {
    const userRepository = getCustomRepository(UserRepository);

    const doesEmailOrDocumentExist = await userRepository.findOne({
      where: [{ email }, { document }],
    });

    if (doesEmailOrDocumentExist) {
      throw new Error("Email/Document already registered.");
    }

    const encryptedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: encryptedPassword,
      document,
    });

    await userRepository.save(user);
  }
}

export { CreateUserUseCase };
