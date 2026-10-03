
const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {
        let ventasExtras = numeroVentas - VENTAS_BASE;
        comision = ventasExtras * precioProducto * 0.1;
    }

    return comision;
}

function calcular() {

    // RECUPERAMOS LOS ELEMENTOS DEL HTML
    let componenteSueldoBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");

    // RECUPERAMOS LOS VALORES DE LOS INPUTS
    let sueldoBaseTr = componenteSueldoBase.value;
    let numeroVentasTr = componenteVentas.value;
    let precioProductosTr = componentePrecio.value;

    // TRANSFORMAMOS TEXTO A NÚMERO
    let sueldoBase = parseFloat(sueldoBaseTr);
    let numeroVentas = parseFloat(numeroVentasTr);
    let precioProducto = parseFloat(precioProductosTr);

    // CALCULAMOS LA COMISIÓN
    let comision = calcularComision(numeroVentas, precioProducto);

    // CALCULAMOS EL TOTAL
    let total = sueldoBase + comision;

    // RECUPERAMOS LOS SPAN DEL HTML
    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    // MOSTRAMOS LOS RESULTADOS
    spSueldoBase.textContent = sueldoBase.toFixed(2);
    spComision.textContent = comision.toFixed(2);
    spTotal.textContent = total.toFixed(2);
}