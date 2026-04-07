// ======================
// MOSTRAR/OCULTAR SENHA
// ======================

// Seleciona o campo de senha e o botão (ícone do olho)
let input = document.querySelector("#senha");
let botaosenha = document.querySelector("#botaoSenha");

// Adiciona evento de clique no botão
botaosenha.addEventListener("click", function() {
    // Se o tipo do input for "password", troca para "text" (mostra a senha)
    if (input.type === "password") {
        input.setAttribute('type', 'text');

        // Troca o ícone de olho aberto para olho fechado
        botaosenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else {
        // Se estiver visível, volta para oculto
        input.setAttribute('type', 'password');

        // Troca o ícone de volta
        botaosenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
});


// ======================
// VALIDAÇÃO DE EMAIL
// ======================

// Seleciona elementos
let email = document.getElementById("email");
let resultado = document.getElementById("resultado");
let cadastrar = document.getElementById("cadastrar");

// Evento ao clicar no botão cadastrar
cadastrar.addEventListener("input", function () {

    // Verifica se está vazio
    if (email.value.trim() === "") {
        resultado.textContent = "O campo email é obrigatório.";
        resultado.style.color = "red";
    }

    // Verifica se tem @ e .
    else if ( (!email.value.includes("@")) || (!email.value.includes("."))) {
        resultado.textContent = "e-mail inválido!";
        resultado.style.color = "red";
    }

    // Email válido
    else {
        resultado.textContent = "email válido!";
        resultado.style.color = "green";
    }
});


// ======================
// VALIDAÇÃO DE SENHA
// ======================

// Seleciona elementos
let senha = document.getElementById("senha");
let resultadoSenha = document.getElementById("resultadoSenha");

// Evento enquanto digita
senha.addEventListener("keyup", function () {

    // Campo vazio
    if (senha.value.trim() === "") {
        resultadoSenha.textContent = "O campo senha é obrigatório.";
        resultadoSenha.style.color = "red";
    }

    // Senha fraca
    else if (senha.value.length < 6) {
        resultadoSenha.textContent = "Senha fraca.";
        resultadoSenha.style.color = "red";
    }

    // Senha média
    else if (senha.value.length > 6 && senha.value.length <= 10) {
        resultadoSenha.textContent = "Senha aceitável.";
        resultadoSenha.style.color = "orange";
    }

    // Senha forte
    else if (senha.value.length > 10) {
        resultadoSenha.textContent = "Senha forte.";
        resultadoSenha.style.color = "green";
    }
});


// ======================
// VALIDAÇÃO DE NOME
// ======================

let nome = document.getElementById("nome");
let resultadoNome = document.getElementById("resultadoNome");

// Evento ao clicar no campo
nome.addEventListener("input", function () {

    if (nome.value.trim() === "") {
        resultadoNome.textContent = "O campo nome é obrigatório.";
        resultadoNome.style.color = "red";
    } else {
        resultadoNome.textContent = "Nome válido.";
        resultadoNome.style.color = "green";
    }
});


// ======================
// VALIDAÇÃO DE TELEFONE
// ======================

let addBtn = document.getElementById("addTelefone");

// Container onde os telefones serão adicionados
let container = document.getElementById("telefones");

addBtn.addEventListener("click", function () {

  // Cria um novo campo input
  let novoCampo = document.createElement("input");

  // Cria um botão para remover o campo
  let removetelefone = document.createElement("button");

  // Cria uma quebra de linha
  let quebraLinha = document.createElement("br");

  // Define o texto do botão
  removetelefone.textContent = "Remover";

  // Adiciona os elementos na tela
  container.appendChild(novoCampo);
  container.appendChild(removetelefone);
  container.appendChild(quebraLinha);

  // Evento para remover o campo e o botão
  removetelefone.addEventListener("click", function () {
    novoCampo.remove();        // remove o input
    removetelefone.remove();   // remove o botão
  });

});

// ======================
// VALIDAÇÃO DE ENDEREÇO
// ======================

let endereco = document.getElementById("endereco");
let resultadoEndereco = document.getElementById("resultadoEndereco");

// Evento ao clicar
endereco.addEventListener("input", function () {

    if (endereco.value.trim() === "") {
        resultadoEndereco.textContent = "O campo endereço é obrigatório.";
        resultadoEndereco.style.color = "red";
    } else {
        resultadoEndereco.textContent = "Endereço válido.";
        resultadoEndereco.style.color = "green";
    }
});


// ======================
// VALIDAÇÃO FINAL DO FORMULÁRIO
// ======================

// Seleciona botão e mensagem final
let botao = document.querySelector("#cadastrar");
let mensagem = document.querySelector("#mensagem");

// Evento de clique no botão cadastrar
botao.addEventListener("click", function () {

    // Verifica se algum campo está vazio
    if (email.value.trim() === "" || senha.value.trim() === "" || nome.value.trim() === "" || telefone.value.trim() === "") {
        mensagem.textContent = "Por favor, preencha todos os campos.";
        mensagem.style.color = "red";
    }

    // Email inválido
    else if ( (!email.value.includes("@")) || (!email.value.includes("."))) {
        mensagem.textContent = "e-mail inválido!";
        mensagem.style.color = "red";
    }

    // Senha fraca
    else if (senha.value.length < 6) {
        mensagem.textContent = "Senha fraca.";
        mensagem.style.color = "red";
    }

    // Senha média
    else if (senha.value.length > 6 && senha.value.length <= 10) {
        mensagem.textContent = "Senha aceitável.";
        mensagem.style.color = "orange";
    }

    // Sucesso
    else if (senha.value.length > 10) {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";
    }

    // Caso padrão
    else {
        mensagem.textContent = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";
    }
});