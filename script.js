// Método Simples: Adicionando o Título
const titulo = document.createElement('h1'); // Criando um elemento de título
titulo.id = 'titulo'; // Definindo o id do elemento
titulo.textContent = 'Bem-vindo à Loja Virtual!'; // Adicionando o texto ao título
document.body.appendChild(titulo); // Inserindo o título na página

// Método Complexo: Criando um Produto
const produto = document.createElement('div'); // Criando um contêiner para o produto
produto.id = 'produto';

// Adicionando nome do produto
const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Camiseta Estilosa';
produto.appendChild(nomeProduto);

// Adicionando descrição do produto
const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Uma camiseta confortável e estilosa feita com 100% algodão.';
produto.appendChild(descricaoProduto);

// Adicionando preço do produto
const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 59,90';
produto.appendChild(precoProduto);

// (Opcional) Adicionando uma imagem ao produto
const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://via.placeholder.com/150'; // URL de imagem exemplo
imagemProduto.alt = 'Imagem da camiseta';
produto.appendChild(imagemProduto);

// Inserindo o produto na página
document.body.appendChild(produto);
