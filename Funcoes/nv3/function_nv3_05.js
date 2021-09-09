/* Desafio: Construa uma função intToRoman() que receba um número inteiro e retorne a sua correspondência em números romanos.
Ex: intToRoman(2021) deve retornar "MMXXI" */

const numero = 2021;

function intToRoman(num){
    if (num <= 0) return ''; // Caso número seja <= 0
    // Matriz com todas as combinações para formação de um numeral romano
    const romanMatrix = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    
    for (let i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0])
            return romanMatrix[i][1] + intToRoman(num - romanMatrix[i][0]);
    }
}

console.log(`${numero} em numeral romano = ${intToRoman(numero)}`);