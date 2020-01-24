exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredient_name: "tomato" },
        { id: 2, ingredient_name: "onion" },
        { id: 3, ingredient_name: "garlic" }
      ]);
    });
};
