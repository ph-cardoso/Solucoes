/* 8) Construa uma função menorElementoArray() que receba um array de números como parâmetro e retorne o menor elemento entre eles.
Ex: menorElementoArray([2, 6, 8, 12, 25]) deve retornar 2 */

const array = [2, 6, 8, 12, 25];

function menorElementoArray(arr) {
    let menor = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
        }
    }
    return menor;
}

console.log(`Menor elemento = ${menorElementoArray(array)}`);