/* 7) Construa uma função maiorElementoArray() que receba um array de números como parâmetro e retorne o maior elemento entre eles.
Ex: maiorElementoArray([2, 6, 8, 12, 25]) deve retornar 25 */

const array = [2, 6, 8, 12, 25];

function maiorElementoArray(arr) {
    let maior = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
}

console.log(`Maior elemento = ${maiorElementoArray(array)}`);