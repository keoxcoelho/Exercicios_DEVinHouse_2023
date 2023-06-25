// Crie uma classe chamada Livro com as propriedades titulo (string), autor (string) e anoPublicacao (number).
// Implemente um método na classe chamado obterInformacoes, que retorna uma string formatada com as informações do livro.
// Crie três objetos da classe Livro, cada um representando um livro diferente.
// Exiba no console as informações de cada livro, utilizando o método obterInformacoes. 

class Livro {
    constructor(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
    }
    obterInformacoes() {
        return `O livro ${this.titulo}, escrito por ${this.autor}, foi publicado em ${this.anoPublicacao}.`;
    }
}

let livro1 = new Livro('O Chamado de Cthullu', 'H.P. Lovecraft', 1928);
let livro2 = new Livro('O Medo à Espreita', 'H.P. Lovecraft', 1923);
let livro3 = new Livro('O Horror de Dunwich', 'H.P. Lovecraft', 1929);

console.log(livro1.obterInformacoes());
console.log(livro2.obterInformacoes());
console.log(livro3.obterInformacoes());
