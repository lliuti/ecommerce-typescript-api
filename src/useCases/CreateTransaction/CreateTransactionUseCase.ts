import { getCustomRepository } from "typeorm";
import { ICreateTransactionDTO } from "../../dtos/ICreateTransactionDTO";
import { ProductStatusEnum } from "../../enums/ProductStatusEnum";
import { ProductRepository } from "../../repositories/ProductRepository";
import { TransactionRepository } from "../../repositories/TransactionRepository";

class CreateTransactionUseCase {
  async execute({ product_id, buyer_id, method }: ICreateTransactionDTO) {
    const transactionRepository = getCustomRepository(TransactionRepository);
    const productRepository = getCustomRepository(ProductRepository);

    const product = await productRepository.findOne({ id: product_id });

    if (!product) {
      throw new Error("Invalid product");
    }

    if (buyer_id === product.owner_id) {
      throw new Error("Owner cannot buy its own products");
    }

    if (product.status === ProductStatusEnum.sold) {
      throw new Error("Sold out product");
    }

    const transaction = transactionRepository.create({
      product_id,
      owner_id: product.owner_id,
      price: product.price,
      buyer_id,
      method,
    });

    await transactionRepository.save(transaction);

    product.status = ProductStatusEnum.sold;

    await productRepository.save(product);
  }
}

export { CreateTransactionUseCase };
