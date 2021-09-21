import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";

class ListUserUseCase {
  async execute(): Promise<User[]> {
    const userRepository = getCustomRepository(UserRepository);

    const userList = await userRepository.find();

    return userList;
  }
}

export { ListUserUseCase };
