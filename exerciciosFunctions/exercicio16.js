// Nível 4 — Situações mais próximas de sistemas
// 16. Calcular desconto

function calcularDesconto(preco, percentual) {
    let valorDesconto = preco * percentual / 100;
    let precoFinal = preco - valorDesconto;

    return precoFinal;
}

let preco = calcularDesconto(200, 15);

console.log(`Preço final: R$ ${preco}`);