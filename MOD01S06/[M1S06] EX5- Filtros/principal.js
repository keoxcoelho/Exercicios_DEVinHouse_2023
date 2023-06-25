// Crie dois módulos em arquivos distintos: filtrarPares.js e somaImpares.js.
// No módulo principal, importe as duas funções e solicite ao usuário que insira um array de números.

// importa os módulos
const filtrarPares = require('./filtrarPares');
const somaImpares = require('./somaImpares');

// solicita ao usuário que insira um array de números
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// exibe no console a soma dos números ímpares e a quantidade de números pares
console.log(`A soma dos números ímpares é ${somaImpares(array)}`);
console.log(`A quantidade de números pares é ${filtrarPares(array).length}`);

