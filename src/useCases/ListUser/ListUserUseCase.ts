import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
import { classToPlain } from "class-transformer";

class ListUserUseCase {
  async execute(): Promise<Record<string, User[]>> {
    const userRepository = getCustomRepository(UserRepository);

    const userList = await userRepository.find();

    return classToPlain(userList);
  }
}

export { ListUserUseCase };
