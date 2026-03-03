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
