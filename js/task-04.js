const button = {
  valDef: document.querySelector("#value"),
  valUp: document.querySelector("[data-action='increment']"),
  valDown: document.querySelector('[data-action="decrement"]'),
};

console.log(button.valDef);

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  button.valDef.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  button.valDef.textContent = counterValue;
};
button.valDown.addEventListener("click", decrement);
button.valUp.addEventListener("click", increment);
