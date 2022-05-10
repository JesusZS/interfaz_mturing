import { Tablero } from "./controladores/tablero.controlador.js";

const TABLERO = new Tablero();

let entrada_cinta = document.getElementById("entrada_cinta");

/*
entrada_cinta.addEventListener("change", () => {
});
*/

document.addEventListener("DOMContentLoaded", async () => {
    console.log(entrada_cinta.id);
    console.log(entrada_cinta.innerText);

  
});


let btn_cargar = document.getElementById("cargar");


btn_cargar.addEventListener('click', async () => {
    console.log('funciona');
    console.log(entrada_cinta.innerHTML)    
});

