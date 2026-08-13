// Nível 5 — Funções trabalhando juntas 🔥
// 20. Sistema de compra 🛒

// função subtotal
function calcularSubtotal(preco, quantidade) {
  return preco * quantidade;
}

// função desconto
function calcularDesconto(valor, percentual) {
    return valor * ( percentual/ 100);
}

// função total
 function calcularTotal(subtotal, desconto) {
    return subtotal - desconto;
 }

let subtotal = calcularSubtotal(50, 3);
let desconto = calcularDesconto(subtotal, 10);
let total = calcularTotal(subtotal, desconto);

console.log("Subtotal:", subtotal);
console.log("Desconto:", desconto);
console.log("Total:", total);