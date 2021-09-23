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
import { User } from "./User";

@Entity("confirmation_emails")
export class ConfirmationEmail {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  user_id: string;

  @JoinColumn({ name: "user_id" })
  @OneToOne(() => User)
  userId: User;

  @Column()
  confirmed_email: boolean;

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
