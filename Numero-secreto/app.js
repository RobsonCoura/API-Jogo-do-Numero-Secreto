// Função que exibe texto em um elemento HTML específico
function exibirTextoNaTela(tag, texto) {
    // Seleciona o primeiro elemento que corresponde ao seletor CSS fornecido (tag)
    let campo = document.querySelector(tag);
    // Define o conteúdo HTML do elemento selecionado para o texto fornecido
    campo.innerHTML = texto;
}

// Chama a função para exibir o texto 'Jogo do número secreto' no primeiro elemento <h1> encontrado na página
exibirTextoNaTela('h1', 'Jogo do número secreto');
// Chama a função para exibir o texto 'Escolha um número entre 1 e 10' no primeiro elemento <p> encontrado na página
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');


function verificarChute() {
    console.log('O botao foi clicado')
}