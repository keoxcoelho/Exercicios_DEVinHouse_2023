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


