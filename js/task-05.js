const inputNameEl = document.getElementById("name-input");
const outputNameEl = document.getElementById("name-output");

const placeholder = (e) => {
  outputNameEl.textContent =
    inputNameEl.value !== "" ? e.currentTarget.value : "Anonymous";
};

inputNameEl.addEventListener("input", placeholder);
