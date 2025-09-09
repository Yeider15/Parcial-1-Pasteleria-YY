 document.getElementById("registro").addEventListener("submit", function(e) {
  e.preventDefault();

  let valido = true;
  console.log("Span encontrado:", document.getElementById("errorNombre"));

  // Validación nombre
  var nombre = document.getElementById("nombre").value.trim();
  if (nombre === "" || !/^[a-zA-Z\s]+$/.test(nombre)) {
    document.getElementById("errorNombre").innerText = "Ingrese un nombre válido ";
    valido = false;
  } else {
    document.getElementById("errorNombre").innerText = "";
  }

  // Validación correo
  const correo = document.getElementById("correo").value.trim();
  if (!/^[\w.%+-]+@duoc\.cl$/.test(correo)) {
    document.getElementById("errorCorreo").innerText = "Ingrese un correo válido con dominio @duoc.cl.";
    valido = false;
  } else {
    document.getElementById("errorCorreo").innerText = "";
  }

  // Validación contraseña
  const password = document.getElementById("password").value;
  const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%]).{8,}$/;
  if (!regexPass.test(password)) {
    document.getElementById("errorPassword").innerText = "La contraseña debe tener 8+ caracteres, mayúscula, minúscula, número y símbolo.";
    valido = false;
  } else {
    document.getElementById("errorPassword").innerText = "";
  }

  // Confirmación de contraseña
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    document.getElementById("errorConfirmPassword").innerText = "Las contraseñas no coinciden.";
    valido = false;
  } else {
    document.getElementById("errorConfirmPassword").innerText = "";
  }

  // Teléfono opcional
  const telefono = document.getElementById("telefono").value;
  if (telefono !== "" && !/^\d{9}$/.test(telefono)) {
    document.getElementById("errorTelefono").innerText = "Ingrese un teléfono válido de 9 dígitos.";
    valido = false;
  } else {
    document.getElementById("errorTelefono").innerText = "";
  }

  // Dirección
  const direccion = document.getElementById("direccion").value.trim();
  if (direccion === "" || !/^[a-zA-Z0-9\s]+$/.test(direccion)) {
    document.getElementById("errorDireccion").innerText = "Ingrese una dirección válida (solo letras, números y espacios).";
    valido = false;
  } else {
    document.getElementById("errorDireccion").innerText = "";
  }

  // Región
  const region = document.getElementById("region").value;
  if (region === "") {
    alert("Seleccione una región.");
    valido = false;
  }

  // Comuna
  const comuna = document.getElementById("comuna").value;
  if (comuna === "") {
    alert("Seleccione una comuna.");
    valido = false;
  }

  // Enviar si todo es válido
  if (valido) {
    alert("Registro exitoso ✅");
    this.reset();
  }
});
