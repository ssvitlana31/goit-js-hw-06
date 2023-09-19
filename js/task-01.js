const itemsEl = document.querySelectorAll(`.item`);

const countItemsEl = itemsEl.length;
console.log(`Number of categories: ${countItemsEl}`);

const titlesCategoriesEl = document.querySelectorAll("h2");
titlesCategoriesEl.forEach((title) => {
  console.log("Category:", title.textContent);
  console.log("Elements:", title.nextElementSibling.children.length);
});
