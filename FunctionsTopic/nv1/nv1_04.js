/* Construa uma função mediaTresValores() que receba 3 números como parâmetro e retorne a média aritmética entre eles.
Ex: mediaTresValores(3,6,9) deve retornar 6 */

const numero1 = 3;
const numero2 = 6;
const numero3 = 9;

function mediaTresValores(num1, num2, num3){
    return (num1 + num2 + num3)/3;
}

console.log(mediaTresValores(numero1, numero2, numero3));