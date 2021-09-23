import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import nodemailer from "nodemailer";
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

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS,
      },
    });

    await transport.sendMail({
      from: process.env.SMTP_EMAIL_SENDER,
      to: user.email,
      subject: "eCommerce Typescript - Confirmation",
      html: `<p>Please <b>confirm</b> your account by clicking on this <a href="http://localhost:3000/users/${user.id}/confirmation"}/></a></p>`,
    });
  }
}

export { CreateUserUseCase };
