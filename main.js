const form = document.getElementById("registrationForm");
const phoneInput = document.getElementById("phone");
const message = document.getElementById("message");

const regexCelular = /^(?:(?:\+?55\s?)?(?:\(?\d{2}\)?\s?)?(?:9\d{4}-?\d{4}))$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const phoneValue = phoneInput.value.trim();

  if (regexCelular.test(phoneValue)) {
    message.textContent = "Enviando SMS...";
    // message.style.color = "green";
  } else {
    message.textContent = "Formato de celular inválido.";
    // message.style.color = "red";
  }
});
