const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const ulIngredientsEl = document.querySelector("#ingredients");

// const liIngredientsEl = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const liIngredientEl = document.createElement("li");
//   liIngredientEl.classList.add("item");
//   liIngredientEl.textContent = "ingredient";
//   liIngredientsEl.push(liIngredientEl);
// }

// console.log(liIngredientsEl);

const ingredientsEl = document.querySelector("#ingredients");

const itemsEl = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});

ingredientsEl.append(...itemsEl);
