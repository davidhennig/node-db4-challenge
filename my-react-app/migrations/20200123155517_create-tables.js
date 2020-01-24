exports.up = function(knex) {
  return knex.schema
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.string("ingredient_name", 128).notNullable();
    })
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.string("recipe_name", 128);
      tbl.string("steps");
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.integer("quantity").notNullable().unsigned;
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients");
};
