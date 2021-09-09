/* 3) Desenvolver um programa que efetue a soma de todos os números pares que são múltiplos de 21 e também são múltiplos de 15 que se encontram no conjunto dos números de 1 até 10000. Imprima o resultado e quantidade de iterações do seu loop.*/

// Solução 1 (Utilizando matemática para otimizar o loop)

// MMC (Mínimo Múltiplo Comum) entre 21 e 15: 105
// MMC par: 105 * 2 = 210
// Primeiro múltiplo comum entre 21 e 15 par do intervalo: 210
// Último múltiplo comum entre 21 e 15 par do intervalo: 9870
// Passo: 210, 420, 630, 840, 1050 ... (De 210 em 210 números)

let soma = 0;
let cont = 0;

// Loop que inicia no 210 e vai até o 9870 incrementando de 210 em 210 unidades
for(let i = 210; i<=9870; i+=210){
    soma += i; // soma = soma + i;
    cont++; // contador de iterações do loop
}

console.log(`Solução 1: `);
console.log(`Resultado da soma: ${soma}`);
console.log(`Quantidade de iterações do loop: ${cont}`);

// Solução 2 (Checando as condições dentro do loop)
let soma2 = 0;
let cont2 = 0;

// Loop que inicia do 1 e vai até o 10000, percorrendo todos os números nesse intervalo
for(let i = 1; i<=10000; i++){
    // Condicional: Se 'i' for divisível por 21 e for divisível por 15 e for divisível por 2 (par)
    if(i%21 === 0 && i%15 === 0 && i%2 === 0){
        soma2 += i;
    }
    cont2++; //contador de iterações do loop
}

console.log(`\nSolução 2:`);
console.log(`Resultado da soma2: ${soma2}`);
console.log(`Quantidade de iterações do loop: ${cont2}`);