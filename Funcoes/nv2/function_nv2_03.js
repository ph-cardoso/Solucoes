/* 3) Construa uma função stringToArray() que receba uma frase como parâmetro e retorne um array onde cada elemento é uma palavra da frase.
Dica: Lembre-se do método split()
Ex: stringToArray("O rato roeu a roupa do rei de roma") deve retornar["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "roma"] */

const frase = "O rato roeu a roupa do rei de roma";

function stringToArray(sentence){
    return sentence.split(" ");
}

console.log(`[${stringToArray(frase)}]`);