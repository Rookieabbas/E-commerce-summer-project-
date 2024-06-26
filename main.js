//cart active
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// open cart
cartIcon.onclick =  ()=>{
    cart.classList.add("active");
}

//close cart
closeCart.onclick =  ()=>{
    cart.classList.remove("active");
}

// cart working
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

// making function
function ready() {
    //remove items from cart
    var removeCartButtons = document.getElementsByClassName("cart-remove")
    console.log(removeCartButtons)
    for (let i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    // quantity changes
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (let i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    //add to cart
    var addcart = document.getElementsByClassName("add-cart")
    for (let i = 0; i < addcart.length; i++) {
        var button = addcart[i];
        button.addEventListener("click",addCartClicked);
    } 
}

// Remove cart item
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotal();
}

//quaantity changes 
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}
//add to cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText
    var price = shopProducts.getElementsByClassName("price")[0].innerText
    // var productImg = shopProducts.getElementsByClassName("product-img")[0].src
    addProductToCart(title,price,);
    updateTotal();
}

//add product to cart

function addProductToCart(title,price) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box")
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (let i = 0; i <cartItemsNames.length; i++) {
        alert("You have alredy add this item");
        return;
    }
}
var cartBoxContent ='<img src="samsungf14.jpg" alt="" class="cart-img"></img><><div class="detail-box"><div class="cart-product-title" >earbuds</div><div class="cart-price">$25</div><input type="number" value="1" class="cart-quantity"></div></><>/'
                      

cartShopBox.innerHtml = cartboxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
















//Update total

function updateTotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = document.getElementsByClassName("cart-box");
    var total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var quantity = quantityElement.value;
        total = total + price*quantity;
        //if decimal price 
        total = Math.round(total*100)/100;

        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
        
    }

}