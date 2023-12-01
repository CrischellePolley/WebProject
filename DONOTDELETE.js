/* OBSOLETE JS FILE, FOR PERSONAL USE */


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
 * id: { image, name, type, price, sizes, colors, description }
 * Reference a specific item by using items[id]["name"] or 
 * items[id].name
 * https://stackoverflow.com/questions/6643375/javascript-multi-dimensional-object
 */
const items = { 0: { id:"test.html", image:"image", name:"item1", type:"pants", price:"$49.73", sizes:"M, L",  colors:"red, blue", desc:"This is pants"},
                1: { id:"shirt.html", image:"shirt.png", name:"item2", type:"shirt", price:"$15.99", sizes:"S, XL",  colors:"green", desc:"This is shirt"} 
              };

function createItemPage(itemId) {
    // Take item_page template and change it based on which item is selected
    // Use item's information to replace template
    var page = items[itemId].id;
    var w = window.open(page, "_blank", "fullscreen=yes");
    w.document.open();

    //w.document.title = document.title;

    w.document.getElementsByTagName("head") = document.head;
    document.write("<body>");
    for(each in w.document.getElementsByTagName("head"))
        document.write("<p>" + each + "</p>");
    document.write("</body>");

    //w.document.getElementsByTagName("body").innerHTML = document.body.innerHTML; 
    //w.document.getElementsByTagName("div") = document.;
    
    w.document.close();
    //page.head = document.getElementByTagName("head");

    //itemPage.document.getElementsByTagName(head);


    // Display new customized item page
    //var page = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
    //return page;
}






function displayItemsByAllTypes() {
   // window.addEventListener("load", createItemPage(items[0]), false);
    window.open(createItemPage(items[0]));
}

function displayItemsByType(type) {
    // Search through items based on type
    // Save items that are exact type and use loop to create and display 
    // these items
    window.addEventListener("load", createItemPage(items[0]), false);
}

// Choose a random item in items to display
function getRandomItem() {

}

function trackDisplays() {
    // Maybe use sessionStorage to keep track of which items 
    // have been displayed so far
    // Or randomize them based on types 
}





// Search for specific items based on page name (id in items)
function searchItems(str) {
    document.writeln("<p>" + str + "</p>");
    document.writeln("<p>" + typeof(str) + "</p>");
    for(var item in items) {
        document.writeln("<p>" + item + ": " + items[item].id + "</p>");
        if(items[item].id == str) {
            document.writeln("<p>Item has been found!</p>");
        } else {
            document.writeln("<p>This is not the item you are searching for.</p>");
        }
    }
}

function addToCart() {
    
    
}

function checkout() {
    var w = window.open("shopping_cart.html", "_blank","fullscreen=yes");

    w.document.open();

    
}
