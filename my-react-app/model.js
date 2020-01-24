const db = require("./db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipe_ingredients")
    .join("ingredients", "ingredients.id", "recipe_ingredients.ingredient_id")
    .where("recipe_ingredients.recipe_id", recipe_id);
}

function getInstructions(id) {
  return db("recipes")
    .select("steps")
    .where({ id })
    .first();
}
