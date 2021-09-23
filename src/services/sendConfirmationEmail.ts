import nodemailer from "nodemailer";
import { getCustomRepository } from "typeorm";
import { IConfirmationEmailDTO } from "../dtos/IConfirmationEmailDTO";
import { ConfirmationEmailRepository } from "../repositories/ConfirmationEmailRepository";

async function sendConfirmationEmail({
  userEmail,
  userId,
}: IConfirmationEmailDTO) {
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
    to: userEmail,
    subject: "eCommerce Typescript - Confirmation",
    html: `<p>Please <b>confirm</b> your account by clicking on this <a href="http://localhost:3000/users/${userId}/confirmation"}/>link</a></p>`,
  });

  const confirmationEmailRepository = getCustomRepository(
    ConfirmationEmailRepository
  );
  const confirmationEmail = confirmationEmailRepository.create({
    user_id: userId,
    confirmed_email: false,
  });

  await confirmationEmailRepository.save(confirmationEmail);
}

export { sendConfirmationEmail };
