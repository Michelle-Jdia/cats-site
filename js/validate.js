// validate
const formInput = document.querySelector(".form");
const emailInput = formInput.querySelector(".form__input");
const btnSubmit = formInput.querySelector(".form__btn");
const error = formInput.querySelector(".footer__input-error");

function checkInputValidity() {
  if (!emailInput.validity.valid) {
    error.textContent = emailInput.validationMessage;
    btnSubmit.disabled = true;
    btnSubmit.classList.add("footer__btn-submit_disabled");
  } else {
    error.textContent = "";
    btnSubmit.disabled = false;
    btnSubmit.classList.remove("footer__btn-submit_disabled");
    disableBtn();
  }
}

function disableBtn() {
  if (emailInput.value.length <= 2) {
    btnSubmit.disabled = true;
    btnSubmit.classList.add("footer__btn-submit_disabled");
  }
}
emailInput.addEventListener("input", checkInputValidity);
formInput.addEventListener("submit", function (e) {
  e.preventDefault();
});
disableBtn();
