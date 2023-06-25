// Crie um array com uma lista de objetos, cada um representando um aluno. Cada aluno deve possuir as propriedades nome (string), nota1 (number) e nota2 (number).
// Utilize uma função de array, como map, filter ou reduce, para calcular a média das notas de cada aluno.
// Crie um novo array contendo objetos com as propriedades nome e media, onde media é a média das notas.
// Exiba o array resultante no console, ordenado em ordem decrescente de média.

let alunos = [Tanjiro = {  
    nome: 'Tanjiro',
    nota1: 10,
    nota2: 10
},
Nezuko = {
    nome: 'Nezuko',
    nota1: 9,
    nota2: 9
},
Zenitsu = {
    nome: 'Zenitsu',
    nota1: 8,
    nota2: 8
},
Inosuke = {
    nome: 'Inosuke',    
    nota1: 7,
    nota2: 7
},
Giyu = {
    nome: 'Giyu',
    nota1: 6,
    nota2: 6
}]

let media = alunos.map(function (aluno) {
    return {
        nome: aluno.nome,
        media: (aluno.nota1 + aluno.nota2) / 2
    }
}
).sort(function (a, b) {
    return b.media - a.media;
}
)

console.log(media);




