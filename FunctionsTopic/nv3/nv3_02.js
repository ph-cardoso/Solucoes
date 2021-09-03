/* 2) Construa uma função sePrimo() que receba um número inteiro  como parâmetro e retorne true se o número for primo e false caso não seja.
Ex: sePrimo(13) deve retornar true */

const numero = 13;

// Se quociente < divisor e todos os restos anteriores foram != 0, o número é primo

function sePrimo(num){
    for (let i = 2; i < num; i++){ // Iniciando divisões sucessivas a partir do 2 até 1 unidade antes do valor do número
        if (num % i == 0){
            return false;
        }
    } 
    if(num > 1)
        return true;
    else
        return "Número menor ou igual a 1"; // Caso isso seja verdade ele não pode ser primo
}

console.log(`${sePrimo(numero)}`);