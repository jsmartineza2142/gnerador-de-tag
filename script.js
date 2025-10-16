const fuentes = [
  { nombre: "DonGraffiti", archivo: "DonGraffiti.otf" },
  { nombre: "GrafittiNewYear", archivo: "GrafittiNewYear.otf" },
  { nombre: "AnotherTag", archivo: "AnotherTag.otf" },
  { nombre: "StreetWarsDemo", archivo: "StreetWarsDemo.otf" },
  { nombre: "Decipher", archivo: "Decipher.otf" },
];

// Cargar todas las fuentes
const styleSheet = document.createElement("style");
fuentes.forEach(f => {
  styleSheet.innerHTML += `
    @font-face {
      font-family: '${f.nombre}';
      src: url('fonts/${f.archivo}') format('opentype');
    }
  `;
});
document.head.appendChild(styleSheet);

document.getElementById("generar").addEventListener("click", () => {
  const texto = document.getElementById("nombre").value.trim();
  const salida = document.getElementById("resultado");

  if (texto === "") {
    salida.textContent = "Escribe algo primero 😎";
    salida.style.fontFamily = "Arial";
    return;
  }

  // Elegir una fuente aleatoria
  const randomFont = fuentes[Math.floor(Math.random() * fuentes.length)];

  // Puedes dejar un color fijo (por ejemplo blanco o rojo)
  // const color = "#ffffff";

  // O generar un color sólido aleatorio
  const colores = ["#f4f4f4", "#ff4b4b", "#3db2ff", "#ffb830", "#8cff66"];
  const color = colores[Math.floor(Math.random() * colores.length)];

  salida.textContent = texto;
  salida.style.fontFamily = randomFont.nombre;
  salida.style.color = color;
});
