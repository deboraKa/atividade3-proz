// Capturando os elementos
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando texto ao título (h1) e ao link (a)
titulo.innerText = "Bem-vindo ao Projeto!";
link.innerText = "Visite o site da Proz Educação";

// Adicionando itens à lista não ordenada (ul)
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens com links à lista ordenada (ol)
listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com" target="_blank">Google</a></li>
    <li><a href="https://www.youtube.com" target="_blank">YouTube</a></li>
    <li><a href="https://www.wikipedia.org" target="_blank">Wikipedia</a></li>
`;
