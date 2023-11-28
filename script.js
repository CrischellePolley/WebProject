// Each clothing item needs to be assigned a unique ID that 
// can be associated with all its information. Should 

/* Use event listener to automatically call a function in js,
 * like this
 * window.addEventListener("load", clothes, false);
 * but you can call a function in html document with event 
 * listeners, like this
 * <p id = "0" onclick = "clothes()">Item Picture</p> 
 * For more events, use 
 * https://www.w3schools.com/jsref/dom_obj_event.asp
*/


/* List of items
 * id: { image, name, price, sizes, colors, description }
 * Reference a specific item by using items[id]["name"] or 
 * items[id].name
 * https://stackoverflow.com/questions/6643375/javascript-multi-dimensional-object
 */
const items = { 0: { id:"id", image:"image", name:"item1", price:"$49.73", sizes:"M, L",  colors:"red, blue", desc:"This is pants"},
                1: { id:"item_page.html", image:"shirt.png", name:"item2", price:"$15.99", sizes:"S, XL",  colors:"green", desc:"This is shirt"} 
              };


function searchItems(str) {
    for(id in items) {
        document.writeln(id);
    }
}

function addToCart() {
    document.writeln("<h1>" + items[0]["name"] +  "</h1>");
    document.writeln("<h1>" + items[0].name +  "</h1>");
    //document.getElementById("addtocart")
}

function displayItems() {
    //const image = items[1].image;
    document.getElementById("main").innerHTML = "<img src = \"shirt.png\" width = 10% height = 10%>";
}

//window.addEventListener("load", addToCart, false);