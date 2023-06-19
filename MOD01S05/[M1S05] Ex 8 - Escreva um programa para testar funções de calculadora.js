// Escreva uma função chamada calculadora que recebe três parâmetros: dois números e uma função de operação matemática. A função calculadora deve executar a operação matemática nos dois números fornecidos e retornar o resultado. Teste a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.

function calculadora(numero1, numero2, operacao) {
    return operacao(numero1, numero2);
}

function adicao(numero1, numero2) {
    return numero1 + numero2;
}

function subtracao(numero1, numero2) {
    return numero1 - numero2;
}

function multiplicacao(numero1, numero2) {
    return numero1 * numero2;
}

function divisao(numero1, numero2) {
    return numero1 / numero2;
}

console.log(calculadora(2, 3, adicao));
console.log(calculadora(2, 3, subtracao));
console.log(calculadora(2, 3, multiplicacao));
console.log(calculadora(2, 3, divisao));

