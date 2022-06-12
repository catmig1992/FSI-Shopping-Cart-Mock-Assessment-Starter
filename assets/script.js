//create a variable to hold the quantity
let quantity = 1;

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
