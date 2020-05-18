exports.up = function (knex) {
  return knex.schema.createTable("recipes", function (recipes) {
    recipes.increments();
    recipes.string("name").notNullable();
    recipes.string("summary");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("recipes");
};
