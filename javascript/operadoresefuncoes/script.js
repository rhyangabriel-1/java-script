console.log("Olá, JavaScript");

let a = 10;
let b = 3;

console.log("adicao: " , a + b);
console.log("subtracao: " , a - b);
console.log("multiplicacao: " , a * b);
console.log("divisao: " , a / b);
console.log("modulo: " , a % b);
console.log("potencia: " , a ** b);
console.log("igualdade: " , a == b);
console.log("diferenca: " , a != b);
console.log("igual valor e tipo: " , a === b);
console.log("diferente valor ou tipo: " , a !== b);

let contador = 5;
contador++;
console.log(contador);

let n1 = 7;
let n2 = 9;
let n3 = 8;

let media = (n1 + n2 + n3) / 3;
console.log("Média: " + media);

let restdiv = 20 % 3;
console.log("Resto da divisão: " + restdiv);

//exercicio 3
let idade = 18;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

//exercicio 4
let N1 = 4;
let N2 = 6;

if (N1 > N2) {
    console.log("N1 é maior que N2");
} else if (N1 < N2) {
    console.log("N2 é maior que N1");
}  else {
    console.log("N1 é igual a N2");
}


console.log("operadores logicos");

let idade1 = 20;
let temCNH = true;

if (idade1 >= 18 && temCNH);

let chovendo = false;
let guardachuva = true;

console.log(chovendo || guardachuva);

let ligado = false;
console.log(!ligado);

//exercicio 5

let nota = 6;
let frequencia = 100;

if (nota >= 7 && frequencia >= 75) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//exercicio 6

let login = true;
let token = false;

if (login === true && token === true) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}
