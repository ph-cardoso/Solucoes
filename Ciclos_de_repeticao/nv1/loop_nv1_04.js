/* 4) Desenvolver um programa que conte a quantdade de elementos do array dado que estão presentes nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. Imprima o resultado da sua contagem.
Array: arr = [2, 6, 8, 12, 25, 30, 31, 32, 33, 34, 35, 40, 50, 60, 62, 64, 65, 66, 67, 68, 70, 80, 91, 92, 97, 99, 100];*/

const arr = [-5 ,0, 2, 6, 8, 12, 25, 30, 31, 32, 33, 34, 35, 40, 50, 60, 62, 64, 65, 66, 67, 68, 70, 80, 91, 92, 97, 99, 100, 101];

// Solução 1
let cont1 = 0; // Contador do intervalo [0 - 25]
let cont2 = 0; // Contador do intervalo [26 - 50]
let cont3 = 0; // Contador do intervalo [51 - 75]
let cont4 = 0; // Contador do intervalo [76 - 100]
let contFora = 0; // Contador de elementos que não pertencem a nenhum intervalo

// Loop que percorre todos os elementos do Array 'arr'
for(let i = 0; i < arr.length; i++){
    if(arr[i] >= 0 && arr[i] <= 25){
        cont1++;
    } else if(arr[i] >= 26 && arr[i] <= 50){
        cont2++;
    } else if(arr[i] >= 51 && arr[i] <= 75){
        cont3++;
    } else if(arr[i] >= 76 && arr[i] <= 100){
        cont4++;
    } else {
        contFora++;
    }
}

console.log(`Solução 1:`)
console.log(`Resultado da contagem:`);
console.log(`[0 - 25] = ${cont1}`);
console.log(`[26 - 50] = ${cont2}`);
console.log(`[51 - 75] = ${cont3}`);
console.log(`[76 - 100] = ${cont4}`);
console.log(`Fora = ${contFora}`);

// Solução 2
let cont1b = 0; // Contador do intervalo [0 - 25]
let cont2b = 0; // Contador do intervalo [26 - 50]
let cont3b = 0; // Contador do intervalo [51 - 75]
let cont4b = 0; // Contador do intervalo [76 - 100]
let contForab = 0; // Contador de elementos que não pertencem a nenhum intervalo

// Loop que percorre todos os elementos do Array 'arr'
for(const elemento of arr){
    if(elemento >= 0 && elemento <= 25){
        cont1b++;
    } else if(elemento >= 26 && elemento <= 50){
        cont2b++;
    } else if(elemento >= 51 && elemento <= 75){
        cont3b++;
    } else if(elemento >= 76 && elemento <= 100){
        cont4b++;
    } else {
        contForab++;
    }
}

console.log(`\nSolução 2:`)
console.log(`Resultado da contagem:`);
console.log(`[0 - 25] = ${cont1b}`);
console.log(`[26 - 50] = ${cont2b}`);
console.log(`[51 - 75] = ${cont3b}`);
console.log(`[76 - 100] = ${cont4b}`);
console.log(`Fora = ${contForab}`);