/* 5) Construa uma função converteTemp() que receba uma temperatura em Celsius como parâmetro e retorne a conversão dessa temperatura para Fahrenheit. 
Considere: F = 1.8 * C + 32
Ex: converteTemp(40) deve retornar 104 */

const temperatura = 40;

function converteTemp(temp){
    return 1.8 * temp + 32;
}

console.log(converteTemp(temperatura));