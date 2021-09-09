/* 1) Desenvolver um programa que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500. Imprima o resultado e quantidade de iterações do seu loop.*/

// Solução 1 (Utilizando matemática para otimizar o loop)

// Primeiro múltiplo de 3 ímpar do intervalo: 3
// Último múltiplo de 3 ímpar do intervalo: 495
// Passo: 3, 9, 15, 21, 27 ... (De 6 em 6 números)

let soma = 0;
let cont = 0;

// Loop que inicia no 3 e vai até o 495 incrementando de 6 em 6 unidades
for(let i = 3; i<=495; i+=6){
    soma += i; // soma = soma + i;
    cont++; // contador de iterações do loop
}

console.log(`Solução 1: `);
console.log(`Resultado da soma: ${soma}`);
console.log(`Quantidade de iterações do loop: ${cont}`);

// Solução 2 (Checando as condições dentro do loop)
let soma2 = 0;
let cont2 = 0;

// Loop que inicia do 1 e vai até o 500, percorrendo todos os números nesse intervalo
for(let i = 1; i<=500; i++){
    // Condicional: Se 'i' for divisível por 3 e não for divisível por 2 (ímpar)
    if(i%3 === 0 && i%2 !== 0){
        soma2 += i;
    }
    cont2++; //contador de iterações do loop
}

console.log(`\nSolução 2:`);
console.log(`Resultado da soma2: ${soma2}`);
console.log(`Quantidade de iterações do loop: ${cont2}`);