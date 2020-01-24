exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { id: 1, recipe_name: "pizza", steps: "make is a pizza" },
        { id: 2, recipe_name: "pasta", steps: "make a pasta" },
        { id: 3, recipe_name: "sandwich", steps: "make a sandwich" }
      ]);
    });
};
