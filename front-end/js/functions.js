// Globals Variables
const URL = 'http://localhost:3000/api/cameras';

// function to convert the price
function convertPrice(productPrice) {
    let price = `${productPrice}`;
    price = Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: 2,
    }).format(price / 100);
    return price;
}


// creation of the product class
class Product {
    constructor(id, name, description, price, lense, quantity, imgurl) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.lense = lense;
        this.quantity = quantity;
        this.imgurl = imgurl;
    }
} 