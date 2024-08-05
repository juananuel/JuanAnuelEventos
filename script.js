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

// a. Crear un array para guardar las notas
let notas = [];

// b. Agregar notas de prueba
notas.push(
  {
  id: 1,
  titulo: "Sacar la basura",
  texto: "mi mamá me va a retar si no lo hago",
  realizada: false,
},
{
  id: 2,
  titulo: "Sacar la basura 2",
  texto: "mi mamá me va a retar si no lo hago otra vez",
  realizada: false,
}
);

// c. Crear variable idGlobal
let idGlobal = 2;

// e. Función para pintar las notas
function pintarNotas(notasAPintar) {
  const contenedor = document.getElementById("contenedor-notas");
  contenedor.innerHTML = "";

  // k. Validación para mostrar mensaje si no hay notas
  if (notasAPintar.length === 0) {
    contenedor.innerHTML = "<p>NO HAY NOTAS PARA MOSTRAR</p>";
    return;
  }

  notasAPintar.forEach((nota) => {
    contenedor.innerHTML += `
      <div class="nota">
        <h3>${nota.titulo}</h3>
        <p>${nota.texto}</p>
        <button class="btn btn-danger" onclick="borrarNota(${nota.id})">Borrar nota</button>
        <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
      </div>
      `;
    });
}

// g. Función para agregar una nota
function agregarNota(titulo, texto) {
  idGlobal++;
  notas.push({
    id: idGlobal,
    titulo: titulo,
    texto: texto,
    realizada: false,
  });
}

// h. Función para guardar una nueva nota
function guardarNota() {
  const titulo = document.getElementById("titulo").value;
  const texto = document.getElementById("texto").value;

  if (titulo && texto) {
    agregarNota(titulo, texto);
    limpiarCampos();
    aplicarFiltros();
  } else {
    alert("Por favor, completa todos los campos");
  }
}

// i. y j. Función para borrar una nota
function borrarNota(id) {
  notas = notas.filter((nota) => nota.id !== id);
  aplicarFiltros();
}

// l. Función para limpiar campos
function limpiarCampos() {
  document.getElementById("titulo").value = "";
  document.getElementById("texto").value = "";
}

// n. Función para marcar como realizada
function marcarRealizada(id) {
  const nota = notas.find((nota) => nota.id === id);
  if (nota) {
    nota.realizada = !nota.realizada;
    aplicarFiltros();
  }
}

// p. Función para filtrar por realizadas
function filtrarPorRealizadas(notasAFiltrar) {
  return notasAFiltrar.filter((nota) => nota.realizada);
}

// q. Función para filtrar por texto
function filtrarPorTexto(notasAFiltrar, texto) {
  if (!texto) return notasAFiltrar;
  return notasAFiltrar.filter(
    (nota) =>
      nota.titulo.toLowerCase().includes(texto.toLowerCase()) ||
      nota.texto.toLowerCase().includes(texto.toLowerCase())
  );
}

// r. Función para aplicar filtros
function aplicarFiltros() {
  let notasFiltradas = [...notas];
  const textoBusqueda = document.getElementById("busqueda").value;
  const soloRealizadas = document.getElementById("filtroRealizadas").checked;

  if (soloRealizadas) {
    notasFiltradas = filtrarPorRealizadas(notasFiltradas);
  }

  notasFiltradas = filtrarPorTexto(notasFiltradas, textoBusqueda);

  pintarNotas(notasFiltradas);
}

// Inicializar la aplicación
aplicarFiltros();
