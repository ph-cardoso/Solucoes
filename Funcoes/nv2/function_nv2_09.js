/* 9) Construa uma função produtoArray() que receba como parâmetro um array de números e retorne o produto de todos os elementos do array.
Ex: produtoArray([2, 4, 5]) deve retornar 40 */

const array = [2, 4, 5];

// Solução 1 (Utilizando For)
function produtoArray(arr){
    let produto = 1;
    for(let i = 0; i < arr.length; i++){
        produto *= arr[i]; // produto = produto * arr[i];
    }
    return produto;
}

console.log(`Produto = ${produtoArray(array)}`);

// Solução 2 (Utilizando Reduce)
function produtoArrayB(arr){
    return arr.reduce((produto, elemento) => produto * elemento, 1);
}

console.log(`Produto = ${produtoArrayB(array)}`);