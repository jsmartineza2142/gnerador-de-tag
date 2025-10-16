function generarTag() {
  const texto = document.getElementById("nombre").value.trim();
  const fuente = document.getElementById("fuente").value;
  const resultado = document.getElementById("resultado");

  if (texto === "") {
    resultado.innerHTML = "<p>⚠️ Escribe algo primero!</p>";
    resultado.style.fontFamily = "Arial";
    resultado.style.fontSize = "20px";
    return;
  }

  resultado.textContent = texto;
  resultado.style.fontFamily = fuente;
}
