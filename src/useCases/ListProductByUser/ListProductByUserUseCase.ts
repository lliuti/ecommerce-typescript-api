import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/Product";
import { ProductRepository } from "../../repositories/ProductRepository";

class ListProductByUserUseCase {
  async execute(id: string): Promise<Product[]> {
    const productRepository = getCustomRepository(ProductRepository);

    const productList = await productRepository.find({ owner_id: id });

    return productList;
  }
}

export { ListProductByUserUseCase };
