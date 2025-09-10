document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let valido = true; // Debe estar inicializado aquí

  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("loginPassword").value;

  // Validación correo (@duoc.cl, @gmail.cl, @gmail.com)
  if (!/^[\w.%+-]+@(duoc\.cl|gmail\.cl|gmail\.com)$/.test(correo)) {
    document.getElementById("errorCorreo").innerText =
      "Ingrese un correo válido con dominio @duoc.cl, @gmail.cl o @gmail.com.";
    valido = false;
  } else {
    document.getElementById("errorCorreo").innerText = "";
  }

  // Validación contraseña
  if (password.length < 8) {
    document.getElementById("errorLoginPassword").innerText = "La contraseña es demasiado corta.";
    valido = false;
  } else {
    document.getElementById("errorLoginPassword").innerText = "";
  }

  // Redirigir si todo es válido
  if (valido) {
    // Aquí va la ruta correcta de tu página de productos
    window.location.href = "productos.html";
  }
});
