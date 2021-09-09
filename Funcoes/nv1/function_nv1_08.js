/* 8) Construa uma função areaQuadrado() que receba como parâmetro o lado de um quadrado e retorne a área dele.
Considere: ÁreaQuadrado = Lado * Lado
Ex: areaQuadrado(4) deve retornar 16 */

const ladoQuadrado = 4;

// Exponenciação 1
function areaQuadrado(lado){
    return lado * lado;
}

console.log(areaQuadrado(ladoQuadrado));

// Exponenciação 2 (**)
function areaQuadradoB(lado){
    return lado ** 2;
}

console.log(areaQuadradoB(ladoQuadrado));