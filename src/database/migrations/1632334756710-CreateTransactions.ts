import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransactions1632334756710 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "transactions",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "product_id",
            type: "uuid",
            isPrimary: false,
          },
          {
            name: "owner_id",
            type: "uuid",
            isPrimary: false,
          },
          {
            name: "buyer_id",
            type: "uuid",
            isPrimary: false,
          },
          {
            name: "price",
            type: "float",
            isPrimary: false,
          },
          {
            name: "method",
            type: "varchar",
            isPrimary: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "PKTransactionProduct",
            referencedTableName: "products",
            referencedColumnNames: ["id"],
            columnNames: ["product_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "PKTransactionOwner",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["owner_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "PKTransactionBuyer",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["buyer_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("transactions");
  }
}
