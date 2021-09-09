/* 2) Desenvolver um programa que efetue a soma de todos os números pares que são múltiplos de 31 e que se encontram no conjunto dos números de 1 até 3200. Imprima o resultado e quantidade de iterações do seu loop.*/

// Solução 1 (Utilizando matemática para otimizar o loop)

// Primeiro múltiplo de 31 par do intervalo: 62
// Último múltiplo de 31 par do intervalo: 3162
// Passo: 62, 124, 186, 248, 310 ... (De 62 em 62 números)

let soma = 0;
let cont = 0;

// Loop que inicia no 62 e vai até o 3162 incrementando de 62 em 62 unidades
for(let i = 62; i<=3162; i+=62){
    soma += i; // soma = soma + i;
    cont++; // contador de iterações do loop
}

console.log(`Solução 1: `);
console.log(`Resultado da soma: ${soma}`);
console.log(`Quantidade de iterações do loop: ${cont}`);

// Solução 2 (Checando as condições dentro do loop)
let soma2 = 0;
let cont2 = 0;

// Loop que inicia do 1 e vai até o 3200, percorrendo todos os números nesse intervalo
for(let i = 1; i<=3200; i++){
    // Condicional: Se 'i' for divisível por 31 e for divisível por 2 (par)
    if(i%31 === 0 && i%2 === 0){
        soma2 += i;
    }
    cont2++; //contador de iterações do loop
}

console.log(`\nSolução 2:`);
console.log(`Resultado da soma2: ${soma2}`);
console.log(`Quantidade de iterações do loop: ${cont2}`);