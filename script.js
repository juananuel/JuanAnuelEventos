// ejercicio 1
function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value) / 100;

  let imc = peso / (altura * altura);
  document.getElementById("imc").value = imc.toFixed(2);
}

const btnIMC = document
  .getElementById("boton-imc")
  .addEventListener("click", calcularIMC);


// ejercicio 2
const conversion = 1370;

const usd = document.getElementById("usd");
const ars = document.getElementById("ars");

usd.addEventListener("input", () => {
  const usdValue = parseFloat(usd.value);
  ars.value = (usdValue * conversion).toFixed(2);
});

ars.addEventListener("input", () => {
  const arsValue = parseFloat(ars.value);
  usd.value = (arsValue / conversion).toFixed(2);
});


// ejercicio 3
let notas = [
  { 
    id: 1, 
    titulo: "Nota 1", 
    texto: "Todo el texto de la nota 1", 
    realizada: false 
  },
  { 
    id: 2, 
    titulo: "Nota 2", 
    texto: "Todo el texto de la nota 2", 
    realizada: true 
  },
];

let idGlobal = 2;

function mostrarNotas(notas) {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  if (notas.length === 0) {
    contenedor.innerHTML = "<p>No hay notas para mostrar</p>";
    return;
  }

  notas.forEach((nota) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${nota.titulo}</h3>
      <p>${nota.texto}</p>
      <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
      <button onClick="borrarNota(${nota.id})" class="btn btn-danger">Borrar Nota</button>
    `;
    contenedor.appendChild(card);
  });
}

function agregarNota(titulo, texto) {
  idGlobal++;
  const nuevaNota = { 
    id: idGlobal, 
    titulo, texto, 
    realizada: false 
  };
  notas.push(nuevaNota);
  mostrarNotas(notas);
}

function borrarNota(id) {
  notas = notas.filter((nota) => nota.id !== id);
  mostrarNotas(notas);
}

function marcarRealizada(id) {
  const nota = notas.find((nota) => nota.id === id);
  if (nota) {
    nota.realizada = !nota.realizada;
    mostrarNotas(notas);
  }
}

function filtrarNotasRealizadas(notas) {
  const filtroRealizadas = document.getElementById("filtroRealizadas").checked;
  return filtroRealizadas ? notas.filter((nota) => nota.realizada) : notas;
}

function filtrarNotasPorTexto(notas, texto) {
  return texto ? notas.filter((nota) => nota.titulo.includes(texto) || nota.texto.includes(texto)): notas;
}

document.getElementById("guardar").addEventListener("click", () => {
  const titulo = document.getElementById("titulo").value;
  const texto = document.getElementById("texto").value;

  if (titulo && texto) {
    agregarNota(titulo, texto);
  } else {
    alert("Por favor, complete ambos campos.");
  }
});

document.getElementById("limpiar").addEventListener("click", () => {
  document.getElementById("titulo").value = "";
  document.getElementById("texto").value = "";
});

document.getElementById("filtroTexto").addEventListener("input", () => {
  const texto = document.getElementById("filtroTexto").value;
  const notasFiltradas = filtrarNotasPorTexto(
    filtrarNotasRealizadas(notas),
    texto
  );
  mostrarNotas(notasFiltradas);
});

document.getElementById("filtroRealizadas").addEventListener("change", () => {
  const texto = document.getElementById("filtroTexto").value;
  const notasFiltradas = filtrarNotasPorTexto(
    filtrarNotasRealizadas(notas),
    texto
  );
  mostrarNotas(notasFiltradas);
});

mostrarNotas(notas);
