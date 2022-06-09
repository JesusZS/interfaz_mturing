import { VistaObjetoMovil } from "../vistas/objeto-movil.vista.js";

export class ObjetoMovil {
  #vista;
  #direccion;
  #enMovimiento;
  #pixelsPorTiempo;
  #distanciaMinimaAceptada;
  delayMovimiento;

  #DistanciaBordeIzqContenedor;
  #DistanciaBordeDerContenedor;

  constructor() {
    this.#vista = new VistaObjetoMovil();
    this.#direccion = "LTR";
    this.#enMovimiento = false;
    this.#pixelsPorTiempo = 18;
    this.#distanciaMinimaAceptada = 100;
  }

  detenerMovimiento() {
    this.#enMovimiento = false;
  }

  reanudarMovimiento() {
    this.#enMovimiento = true;
    this.#moverObjeto(5);
  }

  #calcularDistanciaBordesContenedor() {
    this.#DistanciaBordeIzqContenedor =
      this.#vista.obtenerEspacioIzqBordePantalla() -
      this.#vista.marginIzqContenedor;
    this.#DistanciaBordeDerContenedor =
      this.#vista.obtenerEspacioDerBordePantalla() -
      this.#vista.anchoObjeto -
      this.#vista.marginDerContenedor;
  }

  #calcularDireccion() {
    if (this.#direccion == "LTR") {
      if (this.#DistanciaBordeDerContenedor < this.#distanciaMinimaAceptada) {
        this.#direccion = "RTL";
      }
    } else {
      if (this.#DistanciaBordeIzqContenedor < this.#distanciaMinimaAceptada) {
        this.#direccion = "LTR";
      }
    }
  }

  #cambiarMargenIzquirdo() {
    const margenIzquierdo = this.#vista.obtenerMarginIzqObjeto();

    if (this.#direccion == "LTR") {
      this.#vista.cambiarMarginIzqObjeto(
        margenIzquierdo + this.#pixelsPorTiempo
      );
    } else {
      this.#vista.cambiarMarginIzqObjeto(
        margenIzquierdo - this.#pixelsPorTiempo
      );
    }
  }

  #moverObjeto() {
    let repetirAccion = (cb) => {
      this.#calcularDistanciaBordesContenedor();
      this.#calcularDireccion();
      this.#cambiarMargenIzquirdo();

      if (this.#enMovimiento) {
        setTimeout(repetirAccion, this.delayMovimiento);
      }
    };
    repetirAccion();
  }

  redibujar() {
    /*
         Objeto
         interval_10s  setInterval(frame, 5);
         redibujar objeto_pos+1em

         */
  }

  /*
    cabezal_ref.style='filter: opacity(50%);'
    
    
    test = document.getElementById('#tezt');
    
    
    
    
    
    
function setTask() {
    cabezal_ref = document.getElementById('#cabezal');
    let segundo_ca = document.createElement("img");

    segundo_ca.innerHTML = '<img id="cabezal" src="./resources/img/cabezal.svg">'

									

let padre = document.getElementById('#zonaMovimiento');



				padre.appendChild(segundo_ca);

}



*/
}
