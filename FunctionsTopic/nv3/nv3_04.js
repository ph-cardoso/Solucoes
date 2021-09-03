/* 4) Construa uma função calculaPercentualEleicao() que receba o número total de eleitores e o número de votos brancos, nulos e válidos como parâmetro e retorne, em um array, o percentual em forma de string (XX%) que cada tipo de voto representa em relação ao total de eleitores. Limite a no máximo 2 casas decimais.
Ex: calculaPercentualEleicao(1000, 200, 300, 500) deve retornar ["20.00%", "30.00%", "50.00%"] */

const totalEleitores = 1000;
const votosBrancos = 200;
const votosNulos = 300;
const votosValidos = 500;

function calculaPercentualEleicao(total, brancos, nulos, validos){
    const arr = [];
    arr.push(`${(brancos/total*100).toFixed(2)}%`);
    arr.push(`${(nulos/total*100).toFixed(2)}%`);
    arr.push(`${(validos/total*100).toFixed(2)}%`);
    return arr;
}

console.log(`Array = [${calculaPercentualEleicao(totalEleitores, votosBrancos, votosNulos, votosValidos)}]`);