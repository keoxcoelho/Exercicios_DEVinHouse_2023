// No módulo somaImpares.js, exporte uma função chamada somaImpares, que recebe um array de números como parâmetro e retorna a soma de todos os números ímpares.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function somaImpares(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) soma += array[i];
    }
    return soma;
}