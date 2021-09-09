/* 9) Construa uma função volumeCubo() que receba como parâmetro o lado de um cubo e retorne o volume dele.
Considere: VolumeCubo = Lado * Lado * Lado
Ex: volumeCubo(2) deve retornar 8 */

const ladoCubo = 2;

// Exponenciação 1
function volumeCubo(lado){
    return lado * lado * lado;
}

console.log(volumeCubo(ladoCubo));

// Exponenciação 2 (**)
function volumeCuboB(lado){
    return lado ** 3;
}

console.log(volumeCuboB(ladoCubo));