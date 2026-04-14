// CART FUNCTION
function addToCart(name, price) {
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push({
name: name,
price: price
});
localStorage.setItem("cart", JSON.stringify(cart));
alert(name + " added to cart!");
}
// EXISTING FUNCTION
function addToCart(name, price) {
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push({
name: name,
price: price
});
localStorage.setItem("cart", JSON.stringify(cart));
alert(name + " added to cart!");
}
// ✅ ADD NEW FUNCTION HERE
function addToCartWithSize(name, price, sizeId) {
let size = document.getElementById(sizeId).value;
if(size === "") {
alert("Please select size!");
return;
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.push({
name: name,
price: price,
size: size
});
localStorage.setItem("cart", JSON.stringify(cart));
alert(name + " (" + size + ") added to cart!");
}
// DISPLAY CART
function displayCart() {
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let table = document.getElementById("cartTable");
let total = 0;
table.innerHTML = `
<tr>
<th>Product</th>
<th>Size</th>
<th>Price</th>
<th>Remove</th>
</tr>
`;
cart.forEach((item, index) => {
total += item.price;
table.innerHTML += `
<tr>
<td>${item.name}</td>
<td>${item.size || '-'}</td>
<td>₹${item.price}</td>
<td><button onclick="removeItem(${index})">Remove</button></td>
</tr>
`;
});
document.getElementById("totalAmount").innerText = "Total: ₹" + total;
}
// REMOVE item
function removeItem(index) {
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart.splice(index, 1);
localStorage.setItem("cart", JSON.stringify(cart));
displayCart();
}
// ADMIN PANEL
function addProduct(){
let name = document.getElementById("pname").value;
let price = document.getElementById("pprice").value;
let image = document.getElementById("pimage").value;
let products = JSON.parse(localStorage.getItem("products")) || [];
products.push({name, price, image});
localStorage.setItem("products", JSON.stringify(products));
alert("Product Added");
loadProducts();
}
function loadProducts(){
let products = JSON.parse(localStorage.getItem("products")) || [];
let container = document.getElementById("productList");
container.innerHTML = "";
products.forEach(product => {
container.innerHTML += `
<div>
<img src="${product.image}" width="80">
<p>${product.name} - ₹${product.price}</p>
</div>
`;
});
}
// PRODUCT POPUP
function showProduct(name, price, desc) {
document.getElementById("pName").innerText = name;
document.getElementById("pPrice").innerText = "Price: ₹" + price;
document.getElementById("pDesc").innerText = desc;
document.getElementById("productModal").style.display = "block";
}
function closeModal() {
document.getElementById("productModal").style.display = "none";
}
