import { v4 as uuid } from "uuid";

import {
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { ProductStatusEnum } from "../enums/ProductStatusEnum";

@Entity("products")
class Product {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  owner_id: string;

  @Column()
  status: string;

  @JoinColumn({ name: "owner_id" })
  @OneToOne(() => User)
  ownerId: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }

    if (!this.status) {
      this.status = ProductStatusEnum.available;
    }
  }
}

export { Product };
