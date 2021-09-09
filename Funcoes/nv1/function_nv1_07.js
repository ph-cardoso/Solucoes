/* 7) Construa uma função menorNumero() que receba 2 números como parâmetro e retorne o menor entre eles.
Ex: menorNumero(6, 3) deve retornar 3 */

const numero1 = 6;
const numero2 = 3;

// Solução 1
function menorNumero(num1, num2){
    if(num1 < num2){
        return num1;
    }
    else{
        return num2;
    }
}

console.log(menorNumero(numero1, numero2));

// Solução 2 (Utilizando operador ternário)
function menorNumeroB(num1, num2){
    return num1 < num2 ? num1 : num2;
}

console.log(menorNumeroB(numero1, numero2));