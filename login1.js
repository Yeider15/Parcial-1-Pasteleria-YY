document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  
  const password = document.getElementById("loginPassword").value;

  // Validación correo (@duoc.cl, @gmail.cl, @gmail.com)
  const correo = document.getElementById("correo").value.trim();
  if (!/^[\w.%+-]+@(duoc\.cl|gmail\.cl|gmail\.com)$/.test(correo)) {
    document.getElementById("errorCorreo").innerText =
      "Ingrese un correo válido con dominio @duoc.cl, @gmail.cl o @gmail.com.";
    valido = false;
  } else {
    document.getElementById("errorCorreo").innerText = "";
  }

  if (password.length < 8) {
    document.getElementById("errorLoginPassword").innerText = "La contraseña es demasiado corta.";
    return;
  } else {
    document.getElementById("errorLoginPassword").innerText = "";
  }

  // Aquí podrías validar contra base de datos o almacenamiento local
  alert("Login exitoso ✅");
});
