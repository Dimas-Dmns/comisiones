
const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {

    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {

        let ventasExtras = numeroVentas - VENTAS_BASE;

        comision = ventasExtras * precioProducto * 0.1;
    }

    return comision;
}

function validarVentas(){
      let numeroVentasStr = recuperarTexto("txtVentas")
    if(numeroVentasStr.length > 5){
        alert("Maximo 5 caracteres")
        return false;
    }
    else true;
}

function calcular() {

  if (validarVentas()==false){
    return;
  }

    let sueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let precioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas, precioProducto);

    let total = sueldoBase + comision;

    mostrarEnSpan("spSueldoBase", sueldoBase.toFixed(2));
    mostrarEnSpan("spComision", comision.toFixed(2));
    mostrarEnSpan("spTotal", total.toFixed(2));

}