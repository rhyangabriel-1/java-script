function horaAtual() {
    let data = new Date();
    console.log("Hora:", data.getHours());
    console.log("Minutos:", data.getMinutes());
    console.log("Segundos:", data.getSeconds());
}

horaAtual();

console.log(Math.PI);

function somaMedia() {
    let num1 = Number(prompt ("Digite o primeiro número:"));
    let num2 = Number(prompt ("Digite o segundo número:"));
    let soma = (num1 + num2);
    let media = (soma / 2);
    console,log("A soma dos numeros são: ", soma);
    console.log("A média dos numeros são: ", media);
}

somaMedia();