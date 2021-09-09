/* 1) Construa uma função calculadora() que receba um tipo de operação e dois valores como parâmetro e retorne o resultado da operação com os dois números. 
Tipos de operação: "Adição", "Subtração", "Multiplicação", "Divisão", "Resto da divisão" 
Ex: calculadora("Resto da divisão", 5, 2) deve retornar 1 */

const valor1 = 5;
const valor2 = 2;
const tipoOp = "Resto da divisão";

function calculadora(op, n1, n2){
    switch(op){
        case "Adição":
            return n1 + n2;
        case "Subtração":
            return n1 - n2; 
        case "Multiplicação":
            return n1 * n2;
        case "Divisão":
            return n1 / n2;
        case "Resto da divisão":
            return n1 % n2;
        default:
            return "Erro no tipo de operação";
    }
}

console.log(`${tipoOp} de ${valor1} por ${valor2} = ${calculadora(tipoOp, valor1, valor2)}`);