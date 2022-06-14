//create a variable to hold the quantity
let quantity = 1;

let price = 15;

//show quantity update
function updateQuantity(displayQuantity) {
  let quantity = document.querySelector(".total-quantity");
  quantity.innerHTML = displayQuantity;
}

//quantity down button
quantityDownBtn = document.querySelector("#quantity-down");
quantityDownBtn.addEventListener("click", function (e) {
  if (quantity > 0) {
    //quantity cannot drop below 0
    quantity--; //decrease quantity by 1
  }
  updateQuantity(`Quantity ${quantity}`);
});

//quantity up button
quantityUpBtn = document.querySelector("#quantity-up");
quantityUpBtn.addEventListener("click", function () {
  quantity++; //increase quantity by 1
  updateQuantity(`Quantity ${quantity}`);
});

//remove button
let cartImage = document.querySelector(".cart-item-image");
let cartInfo = document.querySelector(".cart-item-info");

let removeBtn = document.querySelector(".remove");
removeBtn.addEventListener("click", function (r) {
  cartImage.remove();
  cartInfo.remove();
  document.querySelector(".cart-item").append(`Continue shopping!`);
});

//checkout button
let totalPrice = quantity * price;

let checkoutBtn = document.querySelector(".btn-checkout");
checkoutBtn.addEventListener("click", function (c) {
  document
    .querySelector(".cart-checkout")
    .append(`Total amount: $ ${totalPrice}`);
});
