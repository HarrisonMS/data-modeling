exports.up = function (knex) {
  return knex.schema.createTable("ingredients", function (ingredients) {
    ingredients.increments();
    ingredients.string("name").notNullable();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
