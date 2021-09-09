/* 5) Construa uma função separaString() que recebe uma palavra como parâmetro e retorne um array onde cada elemento é um caractere dessa palavra.
Ex: separaString("cadeira") deve retornar ["c", "a", "d", "e", "i", "r", "a"] */

const palavra = "cadeira";

function separaString(word){
    return word.split("");
}

console.log(`[${separaString(palavra)}]`);