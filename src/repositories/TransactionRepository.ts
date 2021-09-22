import { EntityRepository, Repository } from "typeorm";
import { Transaction } from "../entities/Transaction";

@EntityRepository(Transaction)
class TransactionRepository extends Repository<Transaction> {}

export { TransactionRepository };
