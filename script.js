
let total = 0;

function login() {
    let user = document.getElementById("username").value;

    if (user === "") {
        alert("Please enter your name");
        return;
    }

    window.location.href = "menu.html";
}

function addToCart(item, price) {
    let cart = document.getElementById("cart");
    let totalAmount = document.getElementById("total");

    let li = document.createElement("li");
    li.textContent = item + " - £" + price.toFixed(2);

    cart.appendChild(li);

    total = total + price;
    totalAmount.textContent = total.toFixed(2);
}