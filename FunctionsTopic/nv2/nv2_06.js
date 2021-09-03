/* 6) Construa uma função conversorTemp() que receba uma temperatura e um tipo de conversão como parâmetro e retorne a conversão dessa temperatura de acordo com o tipo informado. 
Tipos de conversão: "Celsius - Kelvin", "Celsius - Fahrenheit", "Fahrenheit - Celsius", "Fahrenheit - Kelvin", "Kelvin - Celsius", "Kelvin - Fahrenheit" 
Ex: conversorTemp(350, "Kelvin - Celsius") deve retornar 76.85 */

const temperatura = 350;
const tipoConversao = "Kelvin - Celsius";

function conversorTemp(tipo, temp){
    switch(tipo){
        case "Celsius - Kelvin":
            return (temp + 273.15).toFixed(2);
        case "Celsius - Fahrenheit":
            return (temp * 1.8 + 32).toFixed(2);
        case "Fahrenheit - Celsius":
            return ((temp - 32)/1.8).toFixed(2);
        case "Fahrenheit - Kelvin":
            return ((temp - 32)/1.8 + 273.15).toFixed(2);
        case "Kelvin - Celsius":
            return (temp - 273.15).toFixed(2);
        case "Kelvin - Fahrenheit":
            return ((temp - 273.15) * 1.8 + 32).toFixed(2);
        default:
            return "Erro no tipo de conversão";
    }
}

console.log(`${temperatura} na conversão ${tipoConversao} = ${conversorTemp(tipoConversao ,temperatura)}`);