/* 4) Construa uma função areaCirc() que receba o raio de uma circunferência como parâmetro e retorne a área da circunferência. Limite o resultado a 2 casas decimais.
Considere: AreaCirc = PI *r*r
Dica: Pesquise sobre o Math.PI
Ex: areaCirc(3) deve retornar 28.27 */

const raio = 3;

// Math.PI => valor de PI
// toFixed() => Transforma o valor em uma String limitando a numeração de casas decimais de acordo com o parâmetro

function areaCirc(r){
    return (Math.PI * r * r).toFixed(2);
}

console.log(`${areaCirc(raio)}`);