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


console.log("**************** FUNÇÕES NATIVAS ****************");

let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();

    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getMonth() + 1); // Os meses começam do zero
    console.log("Ano:", data.getFullYear());
    console.log("Hora:", data.getHours());
    console.log("Minutos:", data.getMinutes());

    console.log("Desafio: "+data.getHours(), ".", data.getMinutes(), ".", data.getSeconds(), "", data.getDate(), "/", data.getMonth() + 1, "/", data.getFullYear());
}

mostrarDataHora();




//exemplo

console.log(Math.PI);

function calcularOperadores(numero) {
    console.log("Raiz:", Math.sqrt(numero));
    console.log("Arredondado:", Math.round(numero));
    console.log("Para cima:", Math.ceil(numero));
    console.log("Para baixo:", Math.floor(numero));
    console.log("quadrado:", Math.pow(numero, 2));
    console.log("valor absoluto:", Math.abs(numero));
}

calcularOperadores(7.8);

// funções string

console.log("------funções string------");

function analisarTexto(texto) {
    console.log("Tamanho:", texto.length);
    console.log("Maiúsculas:", texto.toUpperCase());
    console.log("Minúsculas:", texto.toLowerCase());
}

analisarTexto("JavaScript é incrível!");

function verificacao(funcao) {
    console.log("A função passada é:", funcao);
}

verificacao("eu estudo JavaScript");

function juntaString(nome, curso) {
    return "Aluno: " + nome + "| Curso: " + curso;
}
console.log(juntaString("Rhyan", "JavaScript"));