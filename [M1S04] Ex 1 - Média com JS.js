// Vamos praticar o uso de variáveis em um exercício de cálculo de média. Você precisa escrever um programa em JavaScript que peça ao usuário para digitar três números. Depois disso, você deve usar variáveis para armazenar esses números e calcular a média entre eles. Por fim, seu programa deve exibir o resultado da média na tela. //

// usei parseInt para transformar string em número //

let n1 = parseInt(prompt("Digite o n1: "));
let n2 = parseInt(prompt("Digite o n2: "));
let n3 = parseInt(prompt("Digite o n3: "));

let media = (n1 + n2 + n3) / 3;

alert("A média dos números digitados é " + media);