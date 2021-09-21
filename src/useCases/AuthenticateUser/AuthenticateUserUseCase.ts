import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";
import { UserRepository } from "../../repositories/UserRepository";

class AuthenticateUserUseCase {
  async execute({ email, password }: IAuthenticateUserDTO) {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new Error("Invalid Email/Password.");
    }

    const encryptedPassword = user.password;

    const passwordDoesMatch = await compare(password, encryptedPassword);

    if (!passwordDoesMatch) {
      throw new Error("Invalid Email/Password.");
    }

    const token = jwt.sign(
      {
        user_email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: process.env.JWT_EXPIRESIN,
      }
    );

    return token;
  }
}

export { AuthenticateUserUseCase };