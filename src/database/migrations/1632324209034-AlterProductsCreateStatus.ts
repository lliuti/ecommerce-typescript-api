import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterProductsCreateStatus1632324209034
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "products",
      new TableColumn({
        name: "status",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("products", "status");
  }
}
