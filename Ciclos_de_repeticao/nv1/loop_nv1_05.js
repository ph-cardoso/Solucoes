/* 5) Desenvolver um programa que calcule a quantidade de elementos pares e ímpares, a média aritmética dos elementos pares e dos elementos ímpares e a média aritmética de todos os elementos de um array dado.
Array: arr = [2, 6, 8, 12, 17, 25, 30, 31, 32, 33, 34, 37, 40, 50, 60, 62, 64, 65, 66, 68, 69, 70, 78, 82, 93, 97, 99, 100, 102, 118]; */

const arr = [2, 6, 8, 12, 17, 25, 30, 31, 32, 33, 34, 37, 40, 50, 60, 62, 64, 65, 66, 68, 69, 70, 78, 82, 93, 97, 99, 100, 102, 118];

// Média Aritmética = (Soma dos termos) / (Quantidade de termos)

// Solução 1 (Utilizando o For)
let qtdPares = 0;
let qtdImpares = 0;
let somaPares = 0;
let somaImpares = 0;

// Loop que percorre todos os elementos do array
for(let i = 0; i < arr.length; i++){
    // Se o elemento do array for divisível por 2 (par)
    if(arr[i]%2 === 0){
        qtdPares++;
        somaPares += arr[i];
    } else {
        qtdImpares++;
        somaImpares += arr[i];
    }
    
}

console.log(`Solução 1:`);
console.log(`Quantidade pares = ${qtdPares}`);
console.log(`Quantidade ímpares = ${qtdImpares}`);
console.log(`Média aritmética pares = ${somaPares/qtdPares}`);
console.log(`Média aritmética ímpares = ${somaImpares/qtdImpares}`);
console.log(`Média aritética geral = ${(somaPares + somaImpares)/(qtdPares + qtdImpares)}`);

// Solução 2 (Utilizando o For...of)
let qtdPares2 = 0;
let qtdImpares2 = 0;
let somaPares2 = 0;
let somaImpares2 = 0;

// Loop que percorre todos os elementos do array
for(const elemento of arr){
    // Se o elemento do array for divisível por 2 (par)
    if(elemento%2 === 0){
        qtdPares2++;
        somaPares2 += elemento;
    } else {
        qtdImpares2++;
        somaImpares2 += elemento;
    }
    
}

console.log(`\nSolução 2:`);
console.log(`Quantidade pares = ${qtdPares2}`);
console.log(`Quantidade ímpares = ${qtdImpares2}`);
console.log(`Média aritmética pares = ${somaPares2/qtdPares2}`);
console.log(`Média aritmética ímpares = ${somaImpares2/qtdImpares2}`);
console.log(`Média aritética geral = ${(somaPares2 + somaImpares2)/(qtdPares2 + qtdImpares2)}`);