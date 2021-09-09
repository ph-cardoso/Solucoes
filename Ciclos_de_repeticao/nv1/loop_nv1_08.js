/* 8) Desenvolver um programa que calcula e imprime o resultado da seguinte soma: 
Soma = 1/1 + 3/2 + 5/3 + 7/4 + ... + 99/50 */

// Aumenta 2 unidades no numerador
// Aumenta 1 unidade no denominador

// Solução 1 (Utilizando For)
let numerador = 1;
let denominador = 1;
let soma = 0;

// Loop que vai de 1 até 50, de 1 em 1 unidade
for(let i = 1; i <= 50; i++){
    soma += (numerador/denominador);
    numerador += 2; // numerador = numerador + 2 (incremento de 2 unidades)
    denominador++; // denominador = denominador + 1 (incremento de 1 unidade)
}

console.log(`Solução 1:`);
console.log(`Soma = ${soma.toFixed(2)}`);

// Solução 2 (Utilizando While)
let numerador2 = 1;
let denominador2 = 1;
let soma2 = 0;

// Loop que vai de 1 até 50, de 1 em 1 unidade
while(denominador2 <= 50){
    soma2 += (numerador2/denominador2);
    numerador2 += 2;
    denominador2++;
}

console.log(`\nSolução 2:`);
console.log(`Soma = ${soma2.toFixed(2)}`);