function addToCart(name, price) {
    // keep running total 
    // return total to checkout()

    var total = localStorage.setItem(name, price);

    return total;
}


function checkout(name, price) {    
    var total = addToCart(name, price);

    localStorage.clear();

}


function displayOrderItems() {

}

