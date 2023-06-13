document
  .querySelector("button.button-menu-toggle")
  .addEventListener("click", function () {
    document
      .querySelector(".nav-links")
      .classList.toggle("nav-links-responsive");
  });

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

//Validación del name

// function validateText(text) {
//   const regex = /^[A-Za-zÑñÁáÉélíóóÚúÜÜ\s]+$/;
//   return regex.test(text);
// }

// function validateForm() {
//   const textInput = document.getElementById("nombre-apellidos");
//   const text = textInput.value;
//   if (!validateText(text)) {
//     alert("El nombre solo acepta letras y espacios en blanco");
//   } else {
//     alert("Nombre escrito correctamente.");
//     }}

//validación del email

function validateEmail(email) {
  const regex =
    /^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$/;
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/;
  return regex.test(email);
}
function validateForm() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert("Por favor ingrese un correo electrónico válido.");
  } else {
    alert("Correo electrónico enviado correctamente.");
  }
}

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

  // Restablece los valores de los campos del formulario a sus valores predeterminados
  this.reset();
});
