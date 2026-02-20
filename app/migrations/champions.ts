import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("champions", (table) => {
    table.increments("id").primary(); // ID serial/auto-increment
    table.string("name").notNullable();
    table.string("icon").nullable();
    table.jsonb("skins").defaultTo({}).notNullable();
    table.jsonb('skills').defaultTo({}).notNullable();
    table.double('win rate', 5, 2).defaultTo(0.0).notNullable();
    table.double('pick rate', 5, 2).defaultTo(0.0).notNullable();
    table.double('ban rate', 5, 2).defaultTo(0.0).notNullable();

    // Timestamps: cria 'created_at' e 'updated_at' automaticamente
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("champions");
} 