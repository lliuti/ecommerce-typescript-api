import { getCustomRepository } from "typeorm";
import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/UserRepository";
import { classToClass, classToPlain } from "class-transformer";

class ListUserUseCase {
  async execute(): Promise<User[]> {
    const userRepository = getCustomRepository(UserRepository);

    const userList = await userRepository.find();

    return classToClass(userList);
  }
}

export { ListUserUseCase };
