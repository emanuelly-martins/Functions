// Nível 3 — Funções + decisões
// 12. Número positivo ou negativo

function verificarNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
}

let resultado = verificarNumero(0);
console.log(resultado);