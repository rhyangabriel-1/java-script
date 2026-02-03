function saudacao() {
    console.log("Olá! JavaScript!");
}

saudacao();

function somar(a, b) {
    return a + b;
}

console.log(somar(5, 7));

function saudacao(nome) {
    console.log("Olá, " + nome);
}

saudacao("Rhyan");

//exercicio 7

function IMC(peso, altura) {
    return peso / (altura * altura);
}
let peso = 70; // em kg
let altura = 1.75; // em metros

let imc = IMC(peso, altura);
console.log("IMC: " + imc);

//exercicio 8

function parimpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
let numero = 4;
console.log(parimpar(numero));
