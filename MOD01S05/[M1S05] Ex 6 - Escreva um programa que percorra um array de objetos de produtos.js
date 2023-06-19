// Escreva um programa que percorra um array de objetos que representam produtos e exiba o nome e o preço de cada produto. Após imprimir essas informações imprima o total de produtos e o valor total de todos produtos.

let produtos = [ 
    {
        nome: "Algodão",
        preco: 10},
    {                                   
        nome: "Dorflex",
        preco: 20},
    {   
        nome: "Canela de Velho",
        preco: 30},

];

let totalProdutos = 0;
let totalValor = 0;

for (produto of produtos) {
    console.log(produto.nome + " - " + produto.preco);
    totalProdutos++;
    totalValor += produto.preco;
}

console.log("Total de produtos: " + totalProdutos);
console.log("Valor total: " + totalValor);


