
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

function validarInput(idInput, idMensaje) {

    let input = document.getElementById(idInput);
    let mensaje = document.getElementById(idMensaje);

    let valor = input.value.trim();

    // Validar que no esté vacío
    if (valor === "") {
        mensaje.textContent = "Este campo no puede estar vacío";
        return false;
    }

    // Validar que solamente tenga números
    if (!/^[0-9]+$/.test(valor)) {
        mensaje.textContent = "Solo se permiten números";
        return false;
    }

    // Validar máximo 5 dígitos
    if (valor.length > 5) {
        mensaje.textContent = "Máximo 5 dígitos permitidos";
        return false;
    }

    // Si todo está correcto, limpiar mensaje
    mensaje.textContent = "";

    return true;
}

function calcular() {

    
    let valido1 = validarInput("txtSueldoBase", "errorSueldoBase");
    let valido2 = validarInput("txtVentas", "errorVentas");
    let valido3 = validarInput("txtPrecio", "errorPrecio");

    // Si algún campo tiene errores, detener el cálculo
    if (!valido1 || !valido2 || !valido3) {
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