//Atividade 1 mudar cor do texto
let azul = document.querySelector(".azul");
let vermelho = document.querySelector(".vermelho");
let texto = document.querySelector("#texto");

azul.addEventListener("click", function() {
    texto.style.color = "blue";
});

vermelho.addEventListener("click", function() {
    texto.style.color = "red";
});

//Atividade 2- mostrar e esconder mensagem 

let mostrar = document.getElementById("mostrar");
let mensagem = document.getElementById("mensagem")

mostrar.addEventListener("click", function() {
    mensagem.classList.toggle('oculto')
});

//Atividade 3- Contador de caracteres
let input = document.getElementById("inputTexto");
let contador = document.getElementById("contador");

input.addEventListener("input", function() {    let caracteres = input.value.length;
    contador.textContent = caracteres + " caracteres";
});

//Atividade 4- Criar botão contador
let contadorBotao = document.querySelector("#contadorBotao");
let valorContador = document.querySelector("#valorContador");
let contagem = 0;

contadorBotao.addEventListener("click", function() {
    contagem++;
    valorContador.textContent = contagem;
});

//Atividade 5 e 6- Criar elementos dinamicamente
let novoElemento = document.getElementById("novoElemento");
let criarElemento = document.getElementById("criarElemento");
let lista = document.getElementById("lista");

criarElemento.addEventListener("click", function() {
    let novoItem = document.createElement("li");
    novoItem.textContent = novoElemento.value + " - excluir ";

    novoItem.addEventListener("click", function() {

        comfirmacao = confirm("Deseja excluir este item?");
        if (comfirmacao) {
        lista.removeChild(novoItem);
    }

});
lista.appendChild(novoItem);
novoElemento.value = "";
});

//Desafio Hard 
let campo = document.getElementById("campo");
let resultado = document.getElementById("resultado");
let enviar = document.getElementById("enviar");

enviar.addEventListener("click", function() {
if (campo.value.trim() !== "") {
    resultado.textContent = "Nome enviado com sucesso!";
    resultado.style.color = "green";
} else {
    resultado.textContent = "O campo nome é obrigatório.";
    resultado.style.color = "red";

}
});