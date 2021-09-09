/* 10) Desenvolver uma função jurosCompostos() que recebe um capital, uma taxa (em porcentagem) e um tempo como parâmetro e retorna o montante (capital + juros). Imprima esse montante limitando a 2 casas decimais*/

// Juros compostos: M = c * (1+i)^T

const capital = 1000;
const taxa = 10; // 10%
const tempo = 6;

function jurosCompostos(cap, taxPerc, time){
    let taxDec = taxPerc / 100; // Transformação de percentual para decimal
    return (cap * Math.pow((1+taxDec),time)).toFixed(2); //Math.pow é uma função que retorna a potência.
}

console.log(`Capital = ${capital}`);
console.log(`Taxa = ${taxa}%`);
console.log(`Tempo = ${tempo}`);
console.log(`Montante = ${jurosCompostos(capital, taxa, tempo)}`);