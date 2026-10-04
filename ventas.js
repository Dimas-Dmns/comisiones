
// ========================================
// CONFIGURACIÓN
// ========================================

const VENTAS_BASE = 5;


// ========================================
// CALCULAR COMISIÓN
// ========================================

function calcularComision(numeroVentas, precioProducto) {

    let comision = 0;

    if (numeroVentas > VENTAS_BASE) {

        let ventasExtras = numeroVentas - VENTAS_BASE;

        comision = ventasExtras * precioProducto * 0.1;

    }

    return comision;
}


// ========================================
// VALIDAR UN CAMPO
// ========================================

function validarCampo(id, idError, tipo, minimo, maximo) {

    let input = document.getElementById(id);
    let mensaje = document.getElementById(idError);

    let valor = input.value.trim();

    // Limpiar mensaje anterior
    mensaje.textContent = "";

    // Validar campo obligatorio
    if (valor === "") {

        mensaje.textContent = "Este campo es obligatorio";

        return false;
    }

    // Validar números enteros
    if (tipo === "entero" && !/^\d+$/.test(valor)) {

        mensaje.textContent = "Solo se permiten números enteros";

        return false;
    }

    // Validar números decimales
    if (tipo === "decimal" && !/^\d+(\.\d{1,2})?$/.test(valor)) {

        mensaje.textContent = "Ingrese un monto válido (máximo 2 decimales)";

        return false;
    }

    let numero = Number(valor);

    // Validar valor mínimo
    if (numero < minimo) {

        mensaje.textContent = "El valor mínimo permitido es " + minimo;

        return false;
    }

    // Validar valor máximo
    if (numero > maximo) {

        mensaje.textContent = "El valor máximo permitido es " + maximo;

        return false;
    }

    // Si pasa todas las validaciones
    return true;
}


// ========================================
// VALIDAR TODO EL FORMULARIO
// ========================================

function validarFormulario() {

    let sueldoValido = validarCampo(
        "txtSueldoBase",
        "errorSueldoBase",
        "decimal",
        1,
        1000000
    );

    let ventasValidas = validarCampo(
        "txtVentas",
        "errorVentas",
        "entero",
        0,
        99999
    );

    let precioValido = validarCampo(
        "txtPrecio",
        "errorPrecio",
        "decimal",
        0.01,
        100000
    );

    return sueldoValido && ventasValidas && precioValido;
}


// ========================================
// CALCULAR SIMULADOR
// ========================================

function calcular() {

    // Limpiar resultados anteriores
    mostrarEnSpan("spSueldoBase", "");
    mostrarEnSpan("spComision", "");
    mostrarEnSpan("spTotal", "");

    // Validar todos los campos
    if (!validarFormulario()) {

        return;

    }

    // Recuperar valores de los inputs
    let sueldoBase = Number(
        recuperarText("txtSueldoBase")
    );

    let numeroVentas = Number(
        recuperarText("txtVentas")
    );

    let precioProducto = Number(
        recuperarText("txtPrecio")
    );

    // Calcular comisión
    let comision = calcularComision(
        numeroVentas,
        precioProducto
    );

    // Calcular sueldo total
    let total = sueldoBase + comision;

    // Mostrar resultados
    mostrarEnSpan("spSueldoBase", sueldoBase.toFixed(2));

    mostrarEnSpan("spComision", comision.toFixed(2));

    mostrarEnSpan("spTotal", total.toFixed(2));

}


// ========================================
// LIMPIAR FORMULARIO
// ========================================

function limpiar() {

    // Limpiar inputs
    document.getElementById("txtSueldoBase").value = "";

    document.getElementById("txtVentas").value = "";

    document.getElementById("txtPrecio").value = "";


    // Limpiar mensajes de error
    document.getElementById("errorSueldoBase").textContent = "";

    document.getElementById("errorVentas").textContent = "";

    document.getElementById("errorPrecio").textContent = "";


    // Limpiar resultados
    mostrarEnSpan("spSueldoBase", "");

    mostrarEnSpan("spComision", "");

    mostrarEnSpan("spTotal", "");

}