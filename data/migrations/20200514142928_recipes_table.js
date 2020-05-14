exports.up = function (knex) {
  return knex.schema.createTable("recipes", function (recipes) {
    recipes.increments();
    recipe.string("name").notNullable();
    recipe.string("summary");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("recipes");
};
