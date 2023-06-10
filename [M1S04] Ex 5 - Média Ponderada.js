// Peça ao usuário que digite três notas e seus respectivos pesos. Em seguida, escreva um programa em JavaScript que calcule a média ponderada dessas notas. A média ponderada é calculada multiplicando cada nota pelo seu peso correspondente, somando todos os resultados e dividindo pelo somatório dos pesos. Exiba o resultado na tela. //

let n1 = parseInt(prompt("Digite a nota 1: "));
let p1 = parseInt(prompt("Digite o peso 1: "));

let n2 = parseInt(prompt("Digite a nota 2: "));
let p2 = parseInt(prompt("Digite o peso 2: "));

let n3 = parseInt(prompt("Digite a nota 3: "));
let p3 = parseInt(prompt("Digite o peso 3: "));

let somaProdutos = (n1 * p1) + (n2 * p2) + (n3 * p3);

let somaPesos = p1 + p2 + p3;

let mediaPonderada = somaProdutos / somaPesos;

alert("A média ponderada das notas é " + mediaPonderada);

// exemplo que o Henrique Coelho fez com objeto:

let prova1 = {
    nota: parseInt(prompt("Digite a nota da prova 1:")),
    peso: parseInt(prompt("Digite o peso da nota 1:"))
} 

let prova2 = {
    nota: parseInt(prompt("Digite a nota da prova 2:")),
    peso: parseInt(prompt("Digite o peso da nota 2:"))
}

let prova3 = {
    nota: parseInt(prompt("Digite a nota da prova 3:")),
    peso: parseInt(prompt("Digite o peso da nota 3:"))
}

let mediaPonderada = alert(((prova1.nota * prova1.peso) + (prova2.nota * prova2.peso) + (prova3.nota * prova3.peso)) / (prova1.peso + prova2.peso + prova3.peso)); // 