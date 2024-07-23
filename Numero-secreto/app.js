let titulo = document.querySelector('h1'); // Obtém a referência do primeiro elemento <h1> encontrado no documento

titulo.innerHTML = 'Jogo do número secreto'; // Isso altera o título da página para "Jogo do número secreto"


let paragrafo = document.querySelector('p'); // Obtém a referência do primeiro elemento <p> encontrado no documento

paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; // Isso define a descrição ou instrução para o usuário, indicando a faixa de números válidos


function verificarChute() {
    console.log('O botao foi clicado')
}