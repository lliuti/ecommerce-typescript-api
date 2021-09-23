import { EntityRepository, Repository } from "typeorm";
import { ConfirmationEmail } from "../entities/ConfirmationEmail";

@EntityRepository(ConfirmationEmail)
class ConfirmationEmailRepository extends Repository<ConfirmationEmail> {}

export { ConfirmationEmailRepository };
