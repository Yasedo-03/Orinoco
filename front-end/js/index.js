//fetch URL API
fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        addCards(data);
    })
    .catch((error) => console.log("erreur : " + error));

// function for the creation of cards on the home page
function addCards(data) {
    // loop for array product
    for (let product of data) {
        console.log(product)
        // target the card-container element in the html
        let card = document.getElementById('card-container');
        // price conversion
        const price = convertPrice(product.price);
        card.innerHTML += `
        <div class="col">
            <a href="../../front-end/produit.html?_id=${product._id}">
              <div class="card border-secondary h-100 shadow">
                <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                <div class="card-body text-dark">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                </div>
                <div class="card-footer bg-secondary text-white">${price}</div>
              </div>
            </a>
        </div>`;
    }
}