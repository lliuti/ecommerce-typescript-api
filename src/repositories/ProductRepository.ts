import { Repository, EntityRepository } from "typeorm";
import { Product } from "../entities/Product";

@EntityRepository(Product)
class ProductRepository extends Repository<Product> {}

export { ProductRepository };
