const categories = document.querySelector('ul#categories');
console.log(`Number of categories: ${categories.children.length}`);
const listItems = document.querySelectorAll('li.item');
listItems.forEach((category) => {
    console.log(`Categorys: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});