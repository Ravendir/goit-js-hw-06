const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientRef = document.querySelector("#ingredients");
const listItems = ingredients.map((ingredient) => {
  const liItem = document.createElement("li");
  liItem.classList.add("item");
  liItem.textContent = ingredient;
  return liItem;
});

ingredientRef.append(...listItems);
console.log(ingredientRef);
