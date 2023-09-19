function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");
const body = document.body;

const changeColor = () => {
  textColor.textContent = body.style.backgroundColor = getRandomHexColor();
};

changeColorBtnEl.addEventListener("click", changeColor);
