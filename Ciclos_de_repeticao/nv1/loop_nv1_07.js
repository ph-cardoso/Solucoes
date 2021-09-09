/* 7) Desenvolver um programa que percorra um array dado e  gere um novo array apenas com elementos distintos. Imprima na tela o array sem os elementos repetidos.
Array: arr = [1, 1, 1, 1, 3, 3, 4, 5, 6, 7, 7, 7, 7, 2, 3, 4, 5];*/

const arr = [1, 1, 1, 1, 3, 3, 4, 5, 6, 7, 7, 7, 7, 2, 3, 4, 5];

// Solução 1 (Utilizando for e comparação)
const arrDistinto = [];

for(const elemento of arr){
    // Se o array 'arrDistinto' não incluir o elemento do array 'arr', adicionar via push()
    // includes() retorna true caso encontre o elemento. 
    // Por isso foi utilizado o operador lógico de negação (!). Executar a instrução do if caso o includes retorne 'false'
    if(!arrDistinto.includes(elemento)){
        arrDistinto.push(elemento);
    }
}

console.log(`Solução 1:`);
console.log(`Array = [${arr}]`);
console.log(`Array filtrado = [${arrDistinto}]`);

// Solução 2 (Utilizando o método filter)

// Filtrar no array 'arr' elementos que possuem índice igual ao retorno de indexOf(), ou seja, são a primeira ocorrência no array.
const arrDistinto2 = arr.filter((elemento, index) => arr.indexOf(elemento) === index);

console.log(`\nSolução 2:`);
console.log(`Array = [${arr}]`);
console.log(`Array filtrado = [${arrDistinto2}]`);