
// ejercicio 1
function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value)
  const altura = parseFloat(document.getElementById('altura').value) / 100

  let imc = peso / (altura * altura)
  document.getElementById('imc').value = imc.toFixed(2)
}

const btnIMC = document.getElementById('boton-imc').addEventListener('click', calcularIMC)


// ejercicio 2
const conversion = 1370;

const usd = document.getElementById('usd');
const ars = document.getElementById('ars');

usd.addEventListener('input', () => {
    const usdValue = parseFloat(usd.value);
    ars.value = (usdValue * conversion).toFixed(2);
});

ars.addEventListener('input', () => {
    const arsValue = parseFloat(ars.value);
    usd.value = (arsValue / conversion).toFixed(2);
});


// ejercicio 3
// let idGlobal = 2

// function imprimirNotas() {
//   const notasCont = document.getElementById('contenedor-notas')
//   notas.forEach(nota => {
//     const card = document.createElement('div')
//     card.classList.add('cards')
//     card.innerHTML = `
//       <h2>${nota.titulo}</h2>
//       <p>${nota.texto}</p>
//       <button onclick="marcarRealizada(${nota.id})">Marcar como realizada</button>
//       <button onclick="eliminarNota(${nota.id})">Eliminar</button>
//     `
//     notasCont.appendChild(card)
//   })
// }

// imprimirNotas()
/*
CREAR UNA APLICACIÓN DE NOTAS:
1. crear un array llamado notas, con 2 objetos de prueba con 4 propiedades (id, titulo, texto, realizada).
2. crear una variable idGlobal e inicializala en el mismo valor del último id que usaste (2), este será el control de las notas
3. crear una función que muestre las notas en forma de tarjetas dentro del div contenedor que está en el html
4. sobre el div contenedor, crear una pequeña interfaz para crear notas nuevas: un input de texto para el titulo, un textarea para el texto y 2 botones (uno para guardar la nota nueva y otro para limpiar los campos)
5. crear una función llamada agregarNota la cual necesitará 2 parámetros: titulo y texto. La cual deberá crear un objeto de tipo nota y agregarlo al array de notas. 
6. Al presionar el botón Guardar, deberá guardar en variables los valores de los inputs y verificar si no están vacíos, en cuyo caso deberá llamar a la función que agregará la nueva nota y paso seguido, volver a mostrar las notas en la pantalla.
7. Agregar en el template de javascript que imprime las tarjetas (cards), un botón con el texto 'borrar nota' para borrar la nota, para este caso se usará la propiedad onClick de la etiqueta button, y dentro de ella llamaremos a una función que crearemos llamada: borrarNota(${elemento.id})
8. Agregar en el template de javascript que imprime las tarjetas (cards), un checkbox usando lo siguiente: <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada? "checked": ""}>.
9. crear la función borrarNota, la cual necesitará el parámetro id. La misma deberá eliminar el elemento cuyo id sea igual al recibido por parámetro y volver a imprimir las notas para ver el cambio reflejado.
10. Agregar una validación en la función que imprime las tarjetas, la cual deberá mostrar un mensaje dentro del div contenedor que diga: "No hay notas para mostrar", en caso de no haber elementos en el array.
11. Al hacer click en el botón Borrar que está junto al botón Guardar, se deberá limpiar los campos del titulo y texto.
12. Crear la función marcarRealizada, la cual recibirá como parámetro un id y deberá buscar el elemento dentro del array y cambiar la propiedad realizada por el valor contrario al que ya posee y volver a imprimir los elementos en pantalla para verlo reflejado.
13. Crear un par de inputs para realizar filtro por texto y por notas realizadas.
14. Crear una función que filtre por el estado realizada, la función deberá recibir como parámetro 1 array y devolver lo mismo pero filtrado por los elementos que tengan true en la propiedad realizada.
15. Crear una función que filtre por texto, la cual recibirá como parámetro un array de notas y un texto. La misma deberá devolver un array filtrado por los elementos que incluyan el texto ingresado en el titulo o el texto de la nota. De no recibir texto deberá retornar el array recibido.
16. Al cambiar el texto del input de búsqueda o cambiar el valor del checkbox se deberá ver reflejado en pantalla el resultado de los filtros antes mencionados. En ambos casos se deben contemplar los estados de los 2 filtros para poder tener un resultado coherente con lo que se ve en pantalla. Si filtro por texto deberá contemplar si el checkbox de realizadas esta o no checkeado, y si filtro por realizadas se deberá contemplar el texto que posea el input de búsqueda.
*/

// Array de notas de prueba

// ******************************

// const notas = [
//   {
//     id: 1,
//     titulo: 'Sacar la basura',
//     texto: 'mi mama me va a retar si no lo hago',
//     realizada: false
//   },
//   {
//     id: 2,
//     titulo: 'Lavar los platos',
//     texto: 'mi mama me mata si no lo hago',
//     realizada: true
//   }
// ]

// let idGlobal = 2

// function mostrarNotas() {
//   const notasContainer = document.getElementById('notas-mostrar')
//   notasContainer.innerHTML = ''

//   notas.forEach(nota => {
//     const cards = document.createElement('div')
//     cards.className = 'card'
//     cards.innerHTML = `
//       <h3>${nota.titulo}</h3>
//       <p>${nota.texto}</p>
//       <p class="realizada">${nota.realizada ? 'Realizada' : 'Pendiente'}</p>
//     `
//     notasContainer.appendChild(cards)
//   })
// }

// function guardarNota() {
//   const tituloInput = document.getElementById('titulo')
//   const textoInput = document.getElementById('texto')
//   const titulo = tituloInput.value
//   const texto = textoInput.value

//   if (titulo && texto) {
//     idGlobal++;
//     const nuevaNota = {
//       id: idGlobal,
//       titulo: titulo,
//       texto: texto,
//       realizada: false
//     };
//     notas.push(nuevaNota)
//     mostrarNotas()
//     limpiarCampos()
//   } else {
//       alert('Por favor, complete todos los campos.')
//   }
// }

// function limpiarCampos() {
//   document.getElementById('titulo').value = ''
//   document.getElementById('texto').value = ''
// }

// document.getElementById('guardarBtn').addEventListener('click', guardarNota)
// document.getElementById('limpiarBtn').addEventListener('click', limpiarCampos)

// mostrarNotas()


let notas = [
    { id: 1, titulo: "Nota 1", texto: "Texto de la nota 1", realizada: false },
    { id: 2, titulo: "Nota 2", texto: "Texto de la nota 2", realizada: true }
];

let idGlobal = 2

function mostrarNotas(notas) {
    const contenedor = document.getElementById('contenedor')
    contenedor.innerHTML = ''

    if (notas.length === 0) {
        contenedor.innerHTML = '<p>No hay notas para mostrar</p>'
        return
    }

    notas.forEach(nota => {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <h3>${nota.titulo}</h3>
            <p>${nota.texto}</p>
            <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>
            <button onClick="borrarNota(${nota.id})" class="btn btn-danger">Borrar Nota</button>
        `;
        contenedor.appendChild(card)
    });
}

function agregarNota(titulo, texto) {
    idGlobal++;
    const nuevaNota = { id: idGlobal, titulo, texto, realizada: false }
    notas.push(nuevaNota)
    mostrarNotas(notas)
}

function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id)
    mostrarNotas(notas)
}

function marcarRealizada(id) {
    const nota = notas.find(nota => nota.id === id)
    if (nota) {
        nota.realizada = !nota.realizada
        mostrarNotas(notas)
    }
}

function filtrarNotasRealizadas(notas) {
    const filtroRealizadas = document.getElementById('filtroRealizadas').checked
    return filtroRealizadas ? notas.filter(nota => nota.realizada) : notas
}

function filtrarNotasPorTexto(notas, texto) {
    return texto ? notas.filter(nota => nota.titulo.includes(texto) || nota.texto.includes(texto)) : notas
}

document.getElementById('guardar').addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value
    const texto = document.getElementById('texto').value

    if (titulo && texto) {
        agregarNota(titulo, texto)
    } else {
        alert('Por favor, complete ambos campos.')
    }
});

document.getElementById('limpiar').addEventListener('click', () => {
    document.getElementById('titulo').value = ''
    document.getElementById('texto').value = ''
});

document.getElementById('filtroTexto').addEventListener('input', () => {
    const texto = document.getElementById('filtroTexto').value
    const notasFiltradas = filtrarNotasPorTexto(filtrarNotasRealizadas(notas), texto)
    mostrarNotas(notasFiltradas)
});

document.getElementById('filtroRealizadas').addEventListener('change', () => {
    const texto = document.getElementById('filtroTexto').value
    const notasFiltradas = filtrarNotasPorTexto(filtrarNotasRealizadas(notas), texto)
    mostrarNotas(notasFiltradas)
});

mostrarNotas(notas)
