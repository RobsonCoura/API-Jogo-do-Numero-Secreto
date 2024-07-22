// Obtém a referência do primeiro elemento <h1> encontrado no documento
let titulo = document.querySelector('h1');
// Isso altera o título da página para "Jogo do número secreto"
titulo.innerHTML = 'Jogo do número secreto';

// Obtém a referência do primeiro elemento <p> encontrado no documento
let paragrafo = document.querySelector('p');
// Isso define a descrição ou instrução para o usuário, indicando a faixa de números válidos
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
