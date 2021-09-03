/* 2) Construa uma função tabuada() que receba um número inteiro e retorne, em um array, a tabuada do número de 0 a 10.
Ex: tabuada(2) deve retornar [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20] */

const numero = 2;

function tabuada(num){
    const arr = [];
    for (let i = 0; i <= 10; i++){
        arr.push(num * i);
    }
    return arr;
}

console.log(`[${tabuada(numero)}]`);