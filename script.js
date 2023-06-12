function search() {
  let input = document.getElementById('searchbar').value.toLowerCase();
  let x = document.getElementsByClassName('card');

  for (let i = 0; i < x.length; i++) {
    let title = x[i].getElementsByTagName('h4')[0].innerText.toLowerCase();
    if (title.includes(input)) {
      x[i].style.display = 'block';
    } else {
      x[i].style.display = 'none';
    }
  }

  if (input === '') {
    let allCards = document.getElementsByClassName('card');
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].style.display = 'block';
    }
  }
}




fetch('https://diwserver.vps.webdock.cloud/products/category/Apparel - Bottomwear')
  .then(res => res.json())
  .then(data => {
    let str = '';
    for (let i = 0; i <= 4; i++) {
      let lertu = data.products[i];
      str += `<div class="card">
                <img class="img-card" src="${lertu.image}" alt="">
                <h4> <a href="#">${lertu.title}</a> </h4>
                <h5>R$${lertu.price}</h5>
                <span>${lertu.baseColour}</span>
                <button  onclick="exibirDetalhesProduto(${lertu.id})">detalhes</button>
              </div>`;
    }
    document.getElementById('prod').innerHTML = str;
  });

  fetch('https://diwserver.vps.webdock.cloud/products/category/Apparel - Innerwear')
  .then(res => res.json())
  .then(data => {
    let str = '';
    for (let i = 0; i <= 4; i++) {
      let lertu = data.products[i];
      str += `<div class="card">
                <img class="img-card" src="${lertu.image}" alt="">
                <h4> <a href="#">${lertu.title}</a> </h4>
                <h5>R$${lertu.price}</h5>
                <span>${lertu.baseColour}</span>
                <button  onclick="exibirDetalhesProduto(${lertu.id})">detalhes</button>
              </div>`;
    }
    document.getElementById('prod2').innerHTML = str;
  });

  fetch('https://diwserver.vps.webdock.cloud/products/category/Apparel - Loungewear and Nightwear')
  .then(res => res.json())
  .then(data => {
    let str = '';
    for (let i = 0; i <= 4; i++) {
      let lertu = data.products[i];
      str += `<div class="card">
                <img class="img-card" src="${lertu.image}" alt="">
                <h4> <a href="#">${lertu.title}</a> </h4>
                <h5>R$${lertu.price}</h5>
                <span>${lertu.baseColour}</span>
                <button  onclick="exibirDetalhesProduto(${lertu.id})">detalhes</button>
              </div>`;
    }
    document.getElementById('prod3').innerHTML = str;
  });



async function fetchAllProductsByCategory(category) {
  let page = 1; 
  let products = []; 

  while (true) {
    const response = await fetch(`https://diwserver.vps.webdock.cloud/products/category/${category}?page=${page}`);
    const data = await response.json();

    if (data.products.length > 0) {
     
      products = products.concat(data.products);
    } else {
      
      break;
    }

    if (data.nextPage) {
     
      page++;
    } else {
     
      break;
    }
  }

  return products;
}


async function fetchAndDisplayFilteredProducts(category, elementId) {
  const products = await fetchAllProductsByCategory(category);

  let str = '';
  for (let i = 0; i < products.length; i++) {
    let lertu = products[i];
    let title = lertu.title;
    str += `<div class="card">
              <img class="img-card" src="${lertu.image}" alt="${lertu.id}">
              <h4> <a href="#">${title.length > 20 ? title.substring(0, 19).concat('...') : title}</a> </h4>
              <h5>R$${lertu.price}</h5>
              <span>${lertu.baseColour}</span>
              <button onclick="exibirDetalhesProduto(${lertu.id})">Detalhes</button>
            </div>`;
  }


  document.getElementById(elementId).innerHTML = '';


  document.getElementById(elementId).innerHTML = str;
}

function handleCategoryFilterChange() {
  const category = document.getElementById('categoryFilter').value;
  if (category === 'All') {
    fetchAndDisplayFilteredProducts('Apparel - Bottomwear', 'prod');
    fetchAndDisplayFilteredProducts('Apparel - Innerwear', 'prod2');
    fetchAndDisplayFilteredProducts('Apparel - Loungewear and Nightwear', 'prod3');
  } else {
    fetchAndDisplayFilteredProducts(category, 'prod');
    document.getElementById('prod2').innerHTML = '';
    document.getElementById('prod3').innerHTML = '';
  }
}

document.getElementById('categoryFilter').addEventListener('change', handleCategoryFilterChange);

fetchAndDisplayFilteredProducts('Apparel - Bottomwear', 'prod');
fetchAndDisplayFilteredProducts('Apparel - Innerwear', 'prod2');
fetchAndDisplayFilteredProducts('Apparel - Loungewear and Nightwear', 'prod3');


function exibirDetalhesProduto(id) {
  window.location.href = 'detalhes.html?id=' + id;
}