function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(product + " added to cart!");
}
function checkout() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  alert("Order Confirmed! Items: " + cart.join(", "));
  localStorage.clear();
  document.getElementById('cart-list').innerHTML = "";
}
window.onload = function() {
  if (document.getElementById('cart-list')) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-list').innerHTML = cart.map(item => "<li>" + item + "</li>").join("");
  }
  if (document.getElementById('cart')) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart').innerText = cart.join(", ");
  }
}
