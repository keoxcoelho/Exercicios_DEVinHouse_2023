// Escreva um programa que atribua um valor a uma variável cor em inglês e imprima a tradução para a mesma cor em português (mínimo 5 exemplos e tratar o padrão). Utilize uma estrutura condicional (switch) para fazer o mapeamento das cores.

let cor = prompt("Digite a cor em inglês: ");

switch (cor) {
    case "red":
        console.log("Vermelho");
        break;
    case "blue":
        console.log("Azul");
        break;
    case "green":
        console.log("Verde");
        break;
    case "yellow":
        console.log("Amarelo");
        break;
    case "black":
        console.log("Preto");
        break;
    default:
        console.log("Cor inválida");
        break;
}