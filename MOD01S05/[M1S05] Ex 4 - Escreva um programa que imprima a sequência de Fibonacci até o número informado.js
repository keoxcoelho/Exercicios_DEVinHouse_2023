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

// let numero = parseInt(prompt("Digite um número: "));
// Solicita ao usuário que digite um número e armazena esse valor na variável numero após convertê-lo para um número inteiro usando parseInt.

// let i = 0;
// Inicializa a variável i com o valor 0.

// let j = 1;
//Inicializa a variável j com o valor 1.

// let k = 0;
// Inicializa a variável k com o valor 0.

// while (k <= numero) {
// Inicia um loop while que continuará enquanto k for menor ou igual ao valor de numero digitado pelo usuário.

//console.log(k);
// Imprime o valor atual de k no console.

// k = i + j;
// Atribui à variável k a soma dos valores das variáveis i e j.

// i = j;
// Atribui à variável i o valor atual da variável j.

// j = k;
// Atribui à variável j o valor atual da variável k.
