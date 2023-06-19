// Escreva um programa que atribua um valor a uma variável número e verifique se ele é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Use uma estrutura de repetição (do while) para verificar as divisões.

let numero = parseInt(prompt("Digite um número: "));

let i = 2;

do {
    if (numero % i == 0) {
        console.log("Não é primo");
        break;
    }
    while (i < numero) {
        i++;
    }
    if (i == numero) {
        console.log("É primo");
    }
}
while (i < numero);

