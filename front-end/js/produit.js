// retrieve the product's Id
let params = new URLSearchParams(location.search);
let newId = params.get("_id"); 


// modification of the API call address
const NEWURL = `http://localhost:3000/api/cameras/${newId}`;

// retrieve the object's data in the API
fetch(NEWURL)
    .then((response) => response.json()
    .then((data) => {
        let product = data;
        //console.log(product);
        // displays the data of the object on the targeted element
        document.getElementById("ProductName").innerHTML = product.name;
        document.getElementById("ProductImage").innerHTML = `
        <img src="${product.imageUrl}" class="img-fluid rounded-start" alt="${product.name}">
        `;
        document.getElementById("ProductPrice").innerHTML = convertPrice(product.price);
        document.getElementById("ProductDescription").innerHTML = product.description;

        addLenses(product);
        addToBasket(product);
    })
);

// function with loop for camera's lenses
function addLenses(product) {
    let lensesChoice = document.getElementById("ProductLenses");
    for (let lenses of product.lenses) {
        lensesChoice.innerHTML += `<option value="${lenses}">${lenses}</option>`
    }
}

// test
function addToBasket(product) {
    let addToBasketBtn = document.getElementById("btnAddBasket");


    addToBasketBtn.addEventListener("click", function(e){
        e.preventDefault();
        const list = document.getElementById("ProductLenses");
        const quantity = document.getElementById("ProductQuantity");

        if(JSON.parse(localStorage.getItem("basket")) === null){

           localStorage.setItem("basket", JSON.stringify([product]));

        }

        if(JSON.parse(localStorage.getItem("basket")) !== null){

            const basket = JSON.parse(localStorage.getItem("basket"));

            basket.push(product);

            localStorage.setItem("basket", JSON.stringify(basket));

        }

        return addItemToBasketWithSuccess();


        function addItemToBasketWithSuccess(){


            alert(`Le produit ${product.name} a bien ete ajoute au panier`);

        }
        
    });
}

