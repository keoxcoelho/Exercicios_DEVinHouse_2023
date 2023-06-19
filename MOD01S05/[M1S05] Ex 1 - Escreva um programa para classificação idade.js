// - Escreva um programa que atribua um valor a uma variável idade e determine se ela se enquadra nas categorias: criança (0-12 anos), adolescente (13-17 anos), adulto (18-59 anos) ou idoso (60 anos ou mais). Use uma estrutura condicional (if, else if, else).

let idade = parseInt(prompt("Digite sua idade: "));

if (idade <= 12) {
    console.log("Criança");
}
else if (idade >= 13 && idade <= 17) {
    console.log("Adolescente");
}
else if (idade >= 18 && idade <= 59) {
    console.log("Adulto");
}
else if (idade >= 60) {
    console.log("Idoso");
}
else {
    console.log("Idade inválida");
}

