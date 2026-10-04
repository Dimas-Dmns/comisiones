
// ========================================
// RECUPERAR TEXTO DE UN INPUT
// ========================================

function recuperarText(idComponente) {

    let componente = document.getElementById(idComponente);

    return componente.value.trim();

}


// ========================================
// RECUPERAR UN NÚMERO DECIMAL
// ========================================

function recuperarFloat(idComponente) {

    let valorTexto = recuperarText(idComponente);

    let valorFloat = parseFloat(valorTexto);

    return valorFloat;

}


// ========================================
// RECUPERAR UN NÚMERO ENTERO
// ========================================

function recuperarEntero(idComponente) {

    let valorTexto = recuperarText(idComponente);

    let valorEntero = parseInt(valorTexto, 10);

    return valorEntero;

}


// ========================================
// MOSTRAR RESULTADOS EN UN SPAN
// ========================================

function mostrarEnSpan(idComponente, valor) {

    let componente = document.getElementById(idComponente);

    componente.textContent = valor;

}