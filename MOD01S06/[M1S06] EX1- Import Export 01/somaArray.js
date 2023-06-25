// Crie três módulos separados em arquivos distintos: somaArray.js, multiplicaArray.js e calculaMedia.js.
//No módulo somaArray.js, exporte uma função chamada somaArray, que recebe um array de números como parâmetro e retorna a soma de todos os elementos.


//No módulo principal, importe as três funções e solicite ao usuário que insira um array de números.
//Utilize as funções importadas para calcular e exibir no console a soma, a multiplicação e a média dos elementos do array fornecido pelo usuário.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//importa os módulos
const somaArray = require('./somaArray');
const multiplicaArray = require('./multiplicaArray');
const calculaMedia = require('./calculaMedia');

//exibe no console a soma, a multiplicação e a média dos elementos do array fornecido pelo usuário
console.log(`A soma dos elementos do array é ${somaArray(array)}`);
console.log(`A multiplicação dos elementos do array é ${multiplicaArray(array)}`);
console.log(`A média dos elementos do array é ${calculaMedia(array)}`);


