let counterValue = 0;
const valueEl = document.getElementById("value");
const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');

const decrementButtonEl = (event) => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const incrementButtonEl = (event) => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtnEl.addEventListener("click", decrementButtonEl);
incrementBtnEl.addEventListener("click", incrementButtonEl);
