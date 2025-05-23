fetch('https://fakestoreapi.com/products')
.then(response => response.json())
.then(data => renderCharacters(data));

const cardsContainer = document.querySelector('#cards-container');

function renderCharacters(characters) {
    characters.forEach(data => {
      const div = document.createElement('div');
      const image = document.createElement('img');
      const title = document.createElement('h3');
      const category = document.createElement('h3');
      const price = document.createElement('h3');
      const ratings = document.createElement('button');
      div.classList = 'card'
      image.classList = 'card-img'
      ratings.classList = 'empty'
      image.src = data.image
      title.innerText = `Title: ${data.title}`
      category.innerText =`Category: ${data.category}`
      price.innerText =`Price: ${data.price}`
      ratings.textContent = 'Ratings'
      div.appendChild(image)
      div.appendChild(title)
      div.appendChild(category)
      div.appendChild(price)
      div.appendChild(ratings)
      cardsContainer.appendChild(div)
    });
  };