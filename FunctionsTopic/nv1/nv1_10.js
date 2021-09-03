/* 10) Construa uma função sePar() que recebe um número e retorna true caso o número seja par e false caso o número seja ímpar. 
Ex: sePar(1024) deve retornar true */

const numero = 1024;

// Solução
function sePar(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(sePar(numero));