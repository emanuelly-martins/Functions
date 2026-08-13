// Nível 3 — Funções + decisões
// 13. Par ou ímpar

function verificarPar(numero) {

    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

let resultado = verificarPar(11);
console.log(resultado);