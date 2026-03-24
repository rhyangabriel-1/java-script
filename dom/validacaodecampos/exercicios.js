let inputTexto = document.getElementById("inputTexto");
let resultado = document.getElementById("resultado");
let validar = document.getElementById("validar");

let inputSenha = document.getElementById("inputSenha");
let resultadoSenha = document.getElementById("resultadoSenha");

validar.addEventListener("click", function () {
    if (inputTexto.value.trim() === "") {
        resultado.textContent = "O campo email é obrigatório.";
        resultado.style.color = "red";
    }
    else if ( (!inputTexto.value.includes("@")) || (!inputTexto.value.includes("."))) {
        resultado.textContent = "e-mail inválido!";
        resultado.style.color = "red";
    } else {
        resultado.textContent = "email válido!";
        resultado.style.color = "green";
    }
});


inputSenha.addEventListener("keyup", function () {
    if (inputSenha.value.trim() === "") {
        resultadoSenha.textContent = "O campo senha é obrigatório.";
        resultadoSenha.style.color = "red";
    } else if (inputSenha.value.length < 6) {
        resultadoSenha.textContent = "Senha fraca.";
        resultadoSenha.style.color = "red";
    } else if (inputSenha.value.length > 6 && inputSenha.value.length <= 10) {
        resultadoSenha.textContent = "Senha aceitável.";
        resultadoSenha.style.color = "orange";
    } else if (inputSenha.value.length > 10) {
        resultadoSenha.textContent = "Senha forte.";
        resultadoSenha.style.color = "green";
    }
});