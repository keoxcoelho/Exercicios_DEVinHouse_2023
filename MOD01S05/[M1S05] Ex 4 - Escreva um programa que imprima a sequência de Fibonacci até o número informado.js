// Escreva um programa que imprima a sequência de Fibonacci até o número N atribuído na variável de número. A sequência de Fibonacci é formada pela soma dos dois números anteriores: 0, 1, 1, 2, 3, 5, 8, 13, ... Use uma estrutura de repetição (while) para gerar a sequência.

let numero = parseInt(prompt("Digite um número: "));

let i = 0;
let j = 1;
let k = 0;

while (k <= numero) {
    console.log(k);
    k = i + j;
    i = j;
    j = k;
}
