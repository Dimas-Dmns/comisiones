
function recuperarText(idComponente) {

    let componente = document.getElementById(idComponente);

    let valor = componente.value;

    return valor;
}

function recuperarFloat(idComponente) {

    let valorTexto = recuperarText(idComponente);

    let valorFloat = parseFloat(valorTexto);

    return valorFloat;
}

function recuperarEntero(idComponente) {

    let valorTexto = recuperarText(idComponente);

    let valorEntero = parseInt(valorTexto);

    return valorEntero;
}

function mostrarEnSpan(idComponente, valor) {

    let componente = document.getElementById(idComponente);

    componente.textContent = valor;

}