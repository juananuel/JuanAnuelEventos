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

let notas = [];

notas.push(
  {
  id: 1,
  titulo: "Sacar la basura",
  texto: "mi mamá me va a matar si no lo hago",
  realizada: false,
},
{
  id: 2,
  titulo: "Lavar los platos",
  texto: "mi mamá me mata si no lo hago",
  realizada: false,
}
);

let idGlobal = 2;

function pintarNotas(notasAPintar) {
  const contenedor = document.getElementById("contenedor-notas");
  contenedor.innerHTML = "";

  if (notasAPintar.length === 0) {
    contenedor.innerHTML = '<p class="no-notas">NO HAY NOTAS PARA MOSTRAR</p>';
    return;
  }

  notasAPintar.forEach((nota) => {
    contenedor.innerHTML += `
      <div class="nota bg-body-tertiary">
        <div class="card-head py-2 border-bottom d-flex justify-content-center align-items-center">
          <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
          <h3 class="ms-3">${nota.titulo}</h3>
        </div>
        <p class="${nota.realizada ? 'texto-realizado' : ''}">${nota.texto}</p>
        <div class="d-flex flex-column">
          <button class="btn btn-danger mb-2" onclick="borrarNota(${nota.id})">Borrar nota</button>
        </div>
      </div>
      `;
    });
}

function agregarNota(titulo, texto) {
  idGlobal++;
  notas.push({
    id: idGlobal,
    titulo: titulo,
    texto: texto,
    realizada: false,
  });
}

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

function borrarNota(id) {
  notas = notas.filter((nota) => nota.id !== id);
  aplicarFiltros();
}

function limpiarCampos() {
  document.getElementById("titulo").value = "";
  document.getElementById("texto").value = "";
}

function marcarRealizada(id) {
  const nota = notas.find((nota) => nota.id === id);
  if (nota) {
    nota.realizada = !nota.realizada;
    aplicarFiltros();
  }
}

function filtrarPorRealizadas(notasAFiltrar) {
  return notasAFiltrar.filter((nota) => nota.realizada);
}

function filtrarPorTexto(notasAFiltrar, texto) {
  if (!texto) return notasAFiltrar;
  return notasAFiltrar.filter(
    (nota) =>
      nota.titulo.toLowerCase().includes(texto.toLowerCase()) ||
      nota.texto.toLowerCase().includes(texto.toLowerCase())
  );
}

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

function inicializarApp() {
  document.getElementById('btnGuardar').addEventListener('click', guardarNota);
  document.getElementById('btnLimpiar').addEventListener('click', limpiarCampos);

  document.getElementById('busqueda').addEventListener('input', aplicarFiltros);
  document.getElementById('filtroRealizadas').addEventListener('change', aplicarFiltros);

  aplicarFiltros();
}

inicializarApp();
