const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector("#ingredients");
ingredients.forEach(ingredient => {
  const liList = document.createElement("li");
  liList.textContent = ingredient;
  liList.classList.add("item");
  ul.append(liList);
})