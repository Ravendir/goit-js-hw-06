let inputVal = document.querySelector("#validation-input");

inputVal.addEventListener("blur", changer);

function replaseClases(classAdd, classRemove) {
  inputVal.classList.add(classAdd);
  inputVal.classList.remove(classRemove);
}

function changer() {
  if (Number(inputVal.dataset.length) === inputVal.value.length) {
    replaseClases("valid", "invalid");
  } else {
    replaseClases("invalid", "valid");
  }
}
