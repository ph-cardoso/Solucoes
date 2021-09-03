/* 1) Construa uma função analiseString() que receba uma letra e uma string como parâmetro e retorne true  caso o caractere esteja presente na string e false caso não esteja. 
Retorne true mesmo que o caractere do parâmetro seja minúsculo e na palavra esteja maiúsculo.
Ex: analiseString("a", "Arnold") deve retornar true */

const letra = "a";
const palavra = "Arnold";

function analiseString(char, word){
    // Conversão de palavra e caractere para minúsculas.
    const word_aux = word.toLowerCase();
    const char_aux = char.toLowerCase(); 

    // Loop para análise
    for(let i = 0; i < word_aux.length; i++){
        if(word_aux.charAt(i) == char_aux)
            return true;
    }
    return false;
}

console.log(analiseString(letra, palavra));