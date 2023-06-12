
  

function getUrlParameter(name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(window.location.href);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  
fetch('https://diwserver.vps.webdock.cloud/products/category/Apparel - Bottomwear')
    .then(res => res.json())
    .then(data => {
      var id = parseInt(getUrlParameter('id'));
      var produto = data.products.find(produto => produto.id === id);
  
      if (produto) {
        var detalhes = document.getElementById('produto');
        if (detalhes) { 
          detalhes.innerHTML = `
            <h2 class="inf">Detalhes do Produto</h2>
            <img src="${produto.image}" alt="${produto.title}">
            <p class="inf">ID: ${produto.id}</p>
            <p class="inf">Nome: ${produto.title}</p>
            <p class="inf">Descrição: ${produto.description}</p>
            <p class="inf">Preço: R$${produto.price}</p>
          `;
        } else {
          console.error('Elemento detalhesProduto não encontrado na página.');
        }
      } else {
        console.error('Produto não encontrado.');
      }
    })
    .catch(error => console.error(error));

    fetch('https://diwserver.vps.webdock.cloud/products/category/Apparel - Innerwear')
    .then(res => res.json())
    .then(data => {
      var id = parseInt(getUrlParameter('id'));
      var produto = data.products.find(produto => produto.id === id);
  
      if (produto) {
        var detalhes = document.getElementById('produto');
        if (detalhes) { 
          detalhes.innerHTML = `
            <h2 class="inform">Detalhes do Produto</h2>
            <img src="${produto.image}" alt="${produto.title}">
            <p class="inform">ID: ${produto.id}</p>
            <p class="inform">Nome: ${produto.title}</p>
            <p class="inform">Descrição: ${produto.description}</p>
            <p class="inform">Preço: R$${produto.price}</p>
          `;
        } else {
          console.error('Elemento detalhesProduto não encontrado na página.');
        }
      } else {
        console.error('Produto não encontrado.');
      }
    })
    .catch(error => console.error(error));

    fetch('https://diwserver.vps.webdock.cloud/products/category/Apparel - Loungewear and Nightwear')
    .then(res => res.json())
    .then(data => {
      var id = parseInt(getUrlParameter('id'));
      var produto = data.products.find(produto => produto.id === id);
  
      if (produto) {
        var detalhes = document.getElementById('produto');
        if (detalhes) { 
          detalhes.innerHTML = `
            <h2 class="inform">Detalhes do Produto</h2>
            <img src="${produto.image}" alt="${produto.title}">
            <p class="inform">ID: ${produto.id}</p>
            <p class="inform">Nome: ${produto.title}</p>
            <p class="inform">Descrição: ${produto.description}</p>
            <p class="inform">Preço: R$${produto.price}</p>
          `;
        } else {
          console.error('Elemento detalhesProduto não encontrado na página.');
        }
      } else {
        console.error('Produto não encontrado.');
      }
    })
    .catch(error => console.error(error));