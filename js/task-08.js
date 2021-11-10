// const refs = {
//   inputEmail: document.querySelector("input[name=email]"),
//   inputPassword: document.querySelector("input[name=password]"),
//   button: document.querySelector("button[type=submit]"),
//   form: document.querySelector(".login-form"),
// };
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(evt) {
  evt.preventDefault();

  if (form.email.value && form.password.value) {
    const {
      elements: { email, password },
    } = evt.currentTarget;
    console.log(`Email: ${email.value}, Password: ${password.value}`);
  } else {
    alert("Problems?");
  }

  form.reset();
}
