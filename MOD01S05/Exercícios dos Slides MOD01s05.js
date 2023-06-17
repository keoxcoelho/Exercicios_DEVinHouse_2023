// Primeiro procura por um caso (case) que a expressão tenha o mesmo valor do input da expressão (usando a comparação de igualdade estrita, ===); Depois transfere o controle para a cláusula encontrada e em seguida executa as instruções associadas; Caso nenhum caso seja correspondido, então o programa procura pela cláusula opcional default.//

let games = "Adedanha";

switch (games) {
    case "Diablo 4":
    console.log("Recomendo!");
    break;

    case "Lake":
    console.log("É para criança.");
    break;

    default :
    console.log("Você não conhece nenhum jogo eletrônico?");

}

// Escreva um programa que atribua um valor a uma variável número e verifique se ele é positivo, negativo ou zero. Use uma estrutura condicional (if-else). //

let numeros = parseInt(prompt("Digite um número: "));

if (numeros > 0) {
    console.log("É positivo.");
}
else if (numeros < 0){
        console.log("É negativo.");
}
else {
    console.log("Nem positivo, nem negativo.")
}


// Escreva um programa que atribua um valor a uma variável número de 1 a 7 e imprima o dia da semana correspondente. Utilize uma estrutura condicional (switch) para fazer o mapeamento dos números para os dias da semana. //

let diaSemana = parseInt(prompt("Digite o dia da semana: "));

switch (diaSemana){
    case 1:
    console.log("SEG");
    break;

    case 2:
    console.log("TER");
    break;

    case 3:
    console.log("QUA");
    break;

    case 4:
    console.log("QUI");
    break;

    case 5:
    console.log("SEX");
    break;

    case 6:
    console.log("SAB");
    break;

    case 7:
    console.log("DOM");
    break;
}

// ou array

let diaSemana = parseInt(prompt("Digite o dia da semana: "));

// array chamado dias onde cada dia é uma string e está associado a um índice numérico correspondente (começando por 0).
let dias = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

if (diaSemana >= 1 && diaSemana <= 7) {
    console.log(dias[diaSemana - 1]);}
// se o número estiver dentro do intervalo válido, acessa o elemento correspondente do array 'dias' usando o valor de 'diaSemana' como índice (dias[diaSemana]). Caso contrário, se o número estiver fora do intervalo válido, exibimos a mensagem "Dia da semana inválido." no console.

else {
    console.log("Dia da semana inválido.");
}



// Escreva um programa que atribua um valor a uma variável número de 1 a 12 e imprima o nome do mês correspondente. Utilize uma estrutura condicional (switch) para fazer o mapeamento dos números para os meses. //

let numero = parseInt(prompt("Digite um número de 1 a 12:"));

let mes;

switch (numero) {
    case 1:
        mes = "Janeiro";
        break;
    case 2:
        mes = "Fevereiro";
        break;
    case 3:
        mes = "Março";
        break;
    case 4:
        mes = "Abril";
        break;
    case 5:
        mes = "Maio";
        break;
    case 6:
        mes = "Junho";
        break;
    case 7:
        mes = "Julho";
        break;
    case 8:
        mes = "Agosto";
        break;
    case 9:
        mes = "Setembro";
        break;
    case 10:
        mes = "Outubro";
        break;
    case 11:
        mes = "Novembro";
        break;
    case 12:
        mes = "Dezembro";
        break;
    default:
        console.log("Número inválido. Digite um número de 1 a 12.");
}

if (mes) {
    console.log("O número " + numero + " corresponde ao mês de " + mes + ".");
}


// Escreva um programa que atribua um valor a uma  variável número e calcule a soma de todos os números de 1 até esse número. Use uma estrutura de repetição (for). //

let numero = parseInt(prompt("Digite um número: "));

let soma = 0

for (i = 0; i <= numero; i++) {
// menor ou igual ao numero, senao ele fica parado no 0
    let soma = 0 + i
}

console.log("A soma dos números é: " + soma);


// Escreva um programa que atribua um valor a uma variável número e faça a tabuada do número de 1 até 10. Use uma estrutura de repetição (for). //

let numero = parseInt(prompt("Digite um número: "));

for(i=1; i <= 10; i++){
    let resultado = numero * i;
    console.log(resultado + " é o resultado.");
}

// Transfor o código em função
// const somaDoisNumeros = 1 + 2
// console.log(somaDoisNumeros)  output: 3 //

function somaDoisNumeros() {
    let soma = 1+1;
    console.log(soma);}
    somaDoisNumeros();


// Após criar a função para imprimir. Adicione um retorno para quem for receber o resultado e imprima o valor. Como você faria? //

function somaDoisNumeros() {
    let soma = 1+1;
    return soma;}
    console.log(somaDoisNumeros());

    
// Manipulação de Array Crie um array vazio []; 
// Adicione três cores (amarelo, vermelho e rosa) ['amarelo', 'vermelho', 'rosa'];
// Adicione no começo da array (azul e roxo) ['azul', 'roxo', 'amarelo', 'vermelho', 'rosa'];
// Imprima o tamanho da array

let cores = [];
cores.push["amarelo", "vermelho", "rosa"];
cores.unshift["azul", "roxo"];
console.log(cores.length);


// Crie uma outra array a partir da primeira array somente com as cores da posição 1 e 2 (roxo e amarelo)
// Agora volte na primeira array remova o último elemento (rosa)
// Agora junte as duas arrays e imprima os elementos

let cores = ["azul", "roxo", "amarelo", "vermelho", "rosa"];
let cores2 = cores.slice(1, 3);
console.log(cores2);

cores.pop();
console.log(cores);

let cores3 = cores.concat(cores2);
console.log(cores3);


// A Clamed Farmácias atua nos seguintes estados do Brasil:
// Paraná
// Santa Catarina
// Rio Grande do Sul
// São Paulo
// Minas Gerais
// Rio de Janeiro
// Após adicionar os estados na ordem correta imprima os "indíces/posição dos estados 'São Paulo','Minas Gerais';
// Verifica se existe um estado "Mato Grosso do Sul", se não existir imprima uma mensagem "Logo estaremos atuando nesta região"

let estados = ["Paraná", "Santa Catarina", "Rio Grande do Sul", "São Paulo", "Minas Gerais", "Rio de Janeiro"];

console.log(estados.indexOf("São Paulo"));
console.log(estados.indexOf("Minas Gerais"));

if (estados.indexOf("Mato Grosso do Sul") == -1) {
    console.log("Logo estaremos atuando nesta região.");
}



// A Clamed Farmácias atua nos seguintes estados do Brasil:
// Paraná
// Santa Catarina
// Rio Grande do Sul
// São Paulo
// Minas Gerais
// Rio de Janeiro
// Crie uma função que receba por parâmetro um nome do estado e adicione na lista de estados.
// Verifica se o estado já existe e mostre mensagem "Estado já está na lista"
// Verificar se estado existe na lista e mostre mensagem "Estado acabou de ser adicionado, pois ainda não estava cadastrado": 
// "Mato Grosso"
// "Santa Catarina"

let estados = ["Paraná", "Santa Catarina", "Rio Grande do Sul", "São Paulo", "Minas Gerais", "Rio de Janeiro"];

function adicionarEstado(estado) {
    if (estados.includes(estado)) {
        console.log("Estado já está na lista.");
    } else {
        estados.push(estado);
        console.log("Estado acabou de ser adicionado, pois ainda não estava cadastrado.");
    }
}

adicionarEstado("Mato Grosso");
adicionarEstado("Santa Catarina");

console.log(estados);













   
















