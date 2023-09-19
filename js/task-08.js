const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", formSubmit);

const obj = {};

function formSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert(`Fields are not filled`);
  } else {
    obj.email = email.value;
    obj.password = password.value;
  }
}
