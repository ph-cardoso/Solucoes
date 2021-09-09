/* 3) Construa uma função calculaResto() que receba dois números como parâmetro e retorne o resto da divisão do primeiro pelo segundo. 
Ex: resto(7, 2) deve retornar 1 */

const numero1 = 7;
const numero2 = 2;

function calculaResto(num1, num2){
    return num1 % num2;
}

console.log(calculaResto(numero1, numero2));