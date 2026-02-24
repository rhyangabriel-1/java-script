document.getElementById("conteudo").innerHTML = "<p>Olá, DOM! (element.innerHTML)</p>";

document.getElementById("mensagem").textContent = "texto simples, sem HTML. (elemnt.textContent)";

document.getElementById("foto").setAttribute("src", "image.png");

let url = document.getElementById("link").getAttribute("href");

console.log(url);

document.getElementById("caixa").style.backgroundColor = "lightblue";

document.getElementById("alerta").classList.add("destaque");