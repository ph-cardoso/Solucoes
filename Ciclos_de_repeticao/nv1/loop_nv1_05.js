/* Desenvolver um programa que calcule a quantidade de elementos pares e ímpares, a média aritmética dos elementos pares e dos elementos ímpares e a média aritmética de todos os elementos de um array dado.
Array: arr = [2, 6, 8, 12, 17, 25, 30, 31, 32, 33, 34, 37, 40, 50, 60, 62, 64, 65, 66, 68, 69, 70, 78, 82, 93, 97, 99, 100, 102, 118]; */

const arr = [2, 6, 8, 12, 17, 25, 30, 31, 32, 33, 34, 37, 40, 50, 60, 62, 64, 65, 66, 68, 69, 70, 78, 82, 93, 97, 99, 100, 102, 118];

// Média Aritmética = (Soma dos termos) / (Quantidade de termos)

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

console.log(`Resultados:`);
console.log(`Quantidade pares = ${qtdPares}`);
console.log(`Quantidade ímpares = ${qtdImpares}`);
console.log(`Média aritmética pares = ${somaPares/qtdPares}`);
console.log(`Média aritmética ímpares = ${somaImpares/qtdImpares}`);
console.log(`Média aritética geral = ${(somaPares + somaImpares)/(qtdPares + qtdImpares)}`);