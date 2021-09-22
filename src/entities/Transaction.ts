import { v4 as uuid } from "uuid";

import {
  Entity,
  PrimaryColumn,
  Column,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity("transactions")
export class Transaction {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  product_id: string;

  @JoinColumn({ name: "product_id" })
  @OneToOne(() => Product)
  productId: string;

  @Column()
  price: number;

  @Column()
  owner_id: string;

  @JoinColumn({ name: "owner_id" })
  @OneToOne(() => User)
  ownerId: User;

  @Column()
  buyer_id: string;

  @JoinColumn({ name: "buyer_id" })
  @OneToOne(() => User)
  buyerId: User;

  @Column()
  method: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
