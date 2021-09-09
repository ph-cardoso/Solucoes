/* 10) Construa uma função calculaReajuste() que receba um salário e uma taxa de reajuste (em porcentagem) como parâmetro e retorne o novo salário reajustado pela taxa. Limite o resultado a duas casas decimais.
Ex: calculaReajuste(120, 10) deve retornar 132 */

const salario = 120.00;
const taxaReajuste = 10;

function calculaReajuste(salario, taxa){
    const taxaDecimal = taxa/100; // Conversão de porcentagem para decimal
    salario = salario * (1 + taxaDecimal);
    return salario;
}

console.log(`Salário Reajustado = ${calculaReajuste(salario, taxaReajuste)}`);