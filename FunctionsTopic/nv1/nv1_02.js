/* 2) Construa uma função saudacao2() que receba como parâmetro um nome e imprima a mensagem "Olá NOME! Seja bem-vindo ao meu primeiro programa" quando chamada. 
Ex: saudacao2("João") deve imprimir "Olá João! Seja bem-vindo ao meu primeiro programa" */

const nome = "Pedro"; // Nome para teste

function saudacao2(name){
    console.log(`Olá ${name}! Seja bem-vindo ao meu primeiro programa`); // Template Strings
}

saudacao2(nome);