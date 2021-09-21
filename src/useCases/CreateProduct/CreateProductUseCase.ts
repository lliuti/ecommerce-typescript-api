import { getCustomRepository } from "typeorm";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { ProductRepository } from "../../repositories/ProductRepository";

class CreateProductUseCase {
  async execute({
    name,
    description,
    price,
    owner_id,
  }: ICreateProductDTO): Promise<void> {
    const productRepository = getCustomRepository(ProductRepository);

    const product = productRepository.create({
      name,
      description,
      price,
      owner_id,
    });

    await productRepository.save(product);
  }
}

export { CreateProductUseCase };
