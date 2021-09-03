/* 3) Construa uma função fatorial() que receba um número inteiro como parâmetro e retorne o fatorial do número.
Considere: 8! = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 40320
Dica: Recursividade em funções
Ex: fatorial(8) deve retornar 40320 */

const numero = 8;

// Solução 1 (Utilizando o for)
function fatorial (num) {
    let result = 1;
    for(i = 1; i <= num; i++){
        result *= i; // result = result * i;
    }
    return result;
}

console.log(`Fatorial de ${numero} = ${fatorial(numero)}`);

// Solução 2 (Utilizando recursividade)
function fatorialB(num) { return num <= 1 ? 1 : num * fatorialB(num - 1);}

console.log(`Fatorial de ${numero} = ${fatorialB(numero)}`);
