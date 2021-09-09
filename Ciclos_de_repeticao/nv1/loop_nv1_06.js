/* 6) Desenvolver uma função imprimeIntervalo() que receba 2 números como parâmetro e imprima todos os números que estão entre eles.*/

const numero1 = 12;
const numero2 = 1;

function imprimeIntervalo(n1, n2){
    const maior = n1 > n2 ? n1 : n2; //Atribuindo o maior valor a variável auxiliar 'maior'
    const menor = n1 < n2 ? n1 : n2; //Atribuindo o menor valor a variável auxiliar 'menor'
    let intervalo = ""; // String que armazena os termos do intervalo

    for(let i = menor + 1; i < maior; i++){
        intervalo += `${i},`; // Concatena a string 'intervalo' com o valor de 'i' e uma vírgula
    }
    console.log(`Intervalo: ${intervalo.slice(0, -1)}`) // Uso do método slice para imprimir a string sem a vírgula presente no final
}

imprimeIntervalo(numero1, numero2); // chamada da função imprimeIntervalo()