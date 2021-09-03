/* 6) Construa uma função maiorNumero() que receba 2 números como parâmetro e retorne o maior entre eles.
Ex: maiorNumero(6, 3) deve retornar 6 */

const numero1 = 6;
const numero2 = 3;

// Solução 1
function maiorNumero(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

console.log(maiorNumero(numero1, numero2));

// Solução 2 (Utilizando operador ternário)
function maiorNumeroB(num1, num2){
    return num1 > num2 ? num1 : num2;
}

console.log(maiorNumeroB(numero1, numero2));