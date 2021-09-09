/* 9) Desenvolver um programa que percorre um array dado e gera um novo array onde cada elemento corresponde ao quadrado (elemento * elemento) do elemento do array antigo. Imprima esse novo array.
Array: arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrQuadrado = [];

for(const elemento of arr){
    arrQuadrado.push(elemento*elemento);
}

console.log(`arr = [${arr}]`);
console.log(`arrQuadrado = [${arrQuadrado}]`);