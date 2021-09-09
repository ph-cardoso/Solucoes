/* 1) Construa uma função saudacao() que imprima uma mensagem "Seja bem-vindo ao meu primeiro programa" quando chamada.
Ex: saudacao() deve imprimir "Seja bem-vindo ao meu primeiro programa" */

// 3 formas de declarar função, todas atingem o mesmo resultado

// Forma 1
function saudacao() {
    console.log("Seja bem-vindo ao meu primeiro programa");
}

saudacao();

// Forma 2
const saudacaoB = function(){
    console.log("Seja bem-vindo ao meu primeiro programa");
}

saudacaoB();

// Forma 3
const saudacaoC = () => console.log("Seja bem-vindo ao meu primeiro programa");

saudacaoC();