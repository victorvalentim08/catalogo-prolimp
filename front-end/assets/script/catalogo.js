function mostrarProdutos(categoria) {
  fetch('Json/produtos.json')
    .then(res => res.json())
    .then(dados => {
      const produtos = dados[categoria];
      if (!produtos) {
        alert('Categoria não encontrada');
        return;
      }

      document.getElementById('titulo-categoria').textContent =
        categoria === 'automotivo' ? 'Produtos Automotivos' : 'Produtos de Limpeza Geral';

      const container = document.querySelector('.produtos-lista');
      container.innerHTML = '';

      for (const produto of produtos) {
        container.innerHTML += `
          <div class="card-produto">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h4>${produto.nome}</h4>
            <p>${produto.descricao}</p>
          </div>
        `;
      }

      document.getElementById('produtos').style.display = 'block';
    })
    .catch(() => alert('Erro ao carregar os produtos.'));
}
