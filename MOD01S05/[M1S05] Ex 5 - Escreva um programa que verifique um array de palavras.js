// Escreva um programa que percorra um array de palavras e exiba todas as palavras que possuem mais de 5 caracteres. Utilize a estrutura de repetição for of para percorrer o array.

let palavras = ["casa", "carro", "bicicleta", "moto", "patinete", "teco-teco", "barco", "trem", "helicoptero"];

for (palavra of palavras) {
    if (palavra.length > 5) {
        console.log(palavra);
    }
}
