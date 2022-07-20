const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients");

const items = ingredients.map(ingredient => {
  const liList = document.createElement("li");
  liList.textContent = ingredient;
  liList.classList.add("item");
  return liList
})
    ul.append(...items);

