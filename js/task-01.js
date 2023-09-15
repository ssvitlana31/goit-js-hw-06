const itemsEl = document.querySelectorAll(`.item`);
console.log(itemsEl);

const countItemsEl = itemsEl.length;
console.log(`Number of categories: ${countItemsEl}`);

const categoriesTitleEl = document.querySelectorAll(`h2`);
console.log(categoriesTitleEl);

const countCategoriesEl = document.querySelectorAll(`.item li`);
console.log(countCategoriesEl);

console.log(`Category: ${categoriesTitleEl[0].textContent}`);
console.log(`Category: ${categoriesTitleEl[1].textContent}`);
console.log(`Category: ${categoriesTitleEl[2].textContent}`);
