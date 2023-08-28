

const imagenes = ["./imagenes/amor.jpg", "./imagenes/beso.jpg", "./imagenes/caca.jpg", "./imagenes/duda.jpg", "./imagenes/enojado.jpg", "./imagenes/fiesta.jpg", "./imagenes/lamento.jpg", "./imagenes/llora.jpg", "./imagenes/risa.jpg", "./imagenes/smile.jpg"];


const obtenerElementosAleatoriosYDuplicados = (array, cantidad) => {
  const elementosAleatorios = [];

  //elijo la cantidad de imagenes aleatorioas para luego duplicarlas 
  for (let i = 0; i < cantidad; i++) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    elementosAleatorios.push(array[indiceAleatorio]);
    array.splice(indiceAleatorio, 1);
  }

  const elementosDuplicados = elementosAleatorios.concat(elementosAleatorios);
  return elementosDuplicados;
}

const elementosSeleccionadosDuplicados = obtenerElementosAleatoriosYDuplicados(imagenes, 6);


const mezclarArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
  }
}

mezclarArray(elementosSeleccionadosDuplicados);


const imagenElementos = document.querySelectorAll('.imagen');

let primeraImagen = null;
let segundaImagen = null;
paresEncontrados = 0;
let intentos = 0;
const comparaImagenes = () => {

  if (primeraImagen.src === segundaImagen.src) {
    primeraImagen = null;
    segundaImagen = null;
    paresEncontrados++;


  } else {
    setTimeout(() => {
      primeraImagen.classList.add("d-none");
      segundaImagen.classList.add("d-none");
      primeraImagen = null;
      segundaImagen = null;

    }, 1000);
  }
  intentos++;
  console.log(intentos);
  console.log(paresEncontrados);

}


const descubrir = (elemento) => {
  elemento.classList.remove("d-none");
};
imagenElementos.forEach((imagenElemento, index) => {
  const imagen = imagenElemento.querySelector('img');
  imagen.src = elementosSeleccionadosDuplicados[index];
  imagenElemento.addEventListener("click", (event) => {
    event.preventDefault();
    if (!primeraImagen) {
      primeraImagen = imagen;
      descubrir(primeraImagen);
    } else if (!segundaImagen) {
      segundaImagen = imagen;
      descubrir(segundaImagen);
      comparaImagenes();
      if (paresEncontrados === elementosSeleccionadosDuplicados.length / 2) {
        alert("GANASTE!!!");
        location.reload();
      }
      if (intentos >= 10) {
        intentos = 0;
        location.reload();
        alert("PERDISTE!!!");
      }
    }
  });
});



