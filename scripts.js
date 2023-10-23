function exibirMensagem() {
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Olá, " + nome + "!";
}
