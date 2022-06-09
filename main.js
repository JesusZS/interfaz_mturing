import { Tablero } from "./controladores/tablero.controlador.js";

const TABLERO = new Tablero();

let entrada_cinta = document.getElementById("entrada_cinta");

/*
entrada_cinta.addEventListener("change", () => {
});
*/

//document.addEventListener("DOMContentLoaded", async () => {});

let btn_cargar = document.getElementById("cargar");
let contenedorCinta = document.getElementById("cinta");

btn_cargar.addEventListener("click", async () => {
  console.log("funciona");
  console.log(entrada_cinta.value);

  ////////////
crearCinta(entrada_cinta.value)
  ///////////
});


function crearCinta(cadena) {
  let arr_cadena = cadena.split("");

  arr_cadena.forEach((element) => {
    contenedorCinta.insertAdjacentElement('beforebegin',crearCelda(element)) 
  });


}

function crearCelda(valor) {
  /* las siguientes lineas crean el elemento: <input id="casilla" type="text" value=valor/>*/
  let celda = document.createElement("input");
  celda.id = "casilla";
  celda.type = "text";
  celda.value = valor;

console.log(celda.outerHTML);

  return celda
}
