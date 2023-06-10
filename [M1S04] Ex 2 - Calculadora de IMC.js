// Vamos criar uma calculadora de Índice de Massa Corporal (IMC). Você precisa escrever um programa em JavaScript que solicite ao usuário o peso e a altura. Em seguida, utilize os operadores matemáticos corretos para calcular o IMC e exiba o resultado na tela. //

let n1 = parseInt(prompt("Digite o seu peso: "));
let n2 = parseInt(prompt("Digite a sua altura: "));

let imc = n1 / (n2 ** 2);

alert("Seu imc é " + imc);