class MyClass {
    static total = 0;

    static getTotal() {
        return this.total;
    }
}

const orders =[];

function addToCart(name, price) {
    orders.push(name, price);
}


function checkout(name, price) {   
    
    addToCart(name, price);

    var w = window.open("shopping_cart.html", "_blank", "fullscreen=yes");
    //var total = addToCart(name, price);


    alert(w.document.getElementById('10').innerHTML);
    shop = "<p>Hello</p>";
    alert(shop);
    /*shop.innerHTML = '
        ${for(each in orders) {w.document.writeln("<p>"" + orders[each] + "</p>"); }</script>}';*/




    w.document.open();

    /*for(each in orders) {
        w.document.writeln("<p>" + orders[each] + "</p>");
    } */

}
