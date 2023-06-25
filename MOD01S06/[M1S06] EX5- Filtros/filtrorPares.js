// No módulo filtrarPares.js, exporte uma função chamada filtrarPares, que recebe um array de números como parâmetro e retorna um novo array contendo apenas os números pares.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function filtrarPares(array) {
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) novoArray.push(array[i]);
    }
    return novoArray;
}


