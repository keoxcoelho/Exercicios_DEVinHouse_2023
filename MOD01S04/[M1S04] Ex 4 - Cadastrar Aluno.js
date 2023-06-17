// Crie um objeto em JavaScript chamado "aluno" que tenha as propriedades "nome" e "idade". Em seguida, solicite ao usuário que digite o nome e a idade de um aluno e armazene esses valores nas propriedades do objeto. Por fim, exiba na tela o nome e a idade do aluno cadastrado.//

let aluno = {
    nome: '',
    idade: 0,
}

aluno.nome = prompt("Digite o nome do aluno: ");
aluno.idade = parseInt(prompt("Digite a idade do aluno: "));

alert("O aluno cadastrado é " + aluno.nome + " e sua idade é " + aluno.idade);