let font = document.querySelector("#font-size-control");

let text = document.querySelector("#text");

font.oninput = function () {
  text.style.fontSize = font.value + "px";
};
