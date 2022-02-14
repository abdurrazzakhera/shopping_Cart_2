function updateProduct(product, price, isIncrease) {
  const input = document.getElementById(product + "_Number");
  const inputNumber = parseInt(input.value);
  if (isIncrease == true) {
    producInputNumber = inputNumber + 1;
  } else if (inputNumber > 0) {
    producInputNumber = inputNumber - 1;
  }
  input.value = producInputNumber;
  const productPrice = document.getElementById(product + "_price");
  productPrice.innerText = producInputNumber * price;
}
//update phone price
document.getElementById("phone_Plus").addEventListener("click", function () {
  updateProduct("phone", 1219, true);
});
document.getElementById("phone_Minus").addEventListener("click", function () {
  updateProduct("phone", 1219, false);
});
//update case price
document.getElementById("case_Plus").addEventListener("click", function () {
  updateProduct("case", 59, true);
});
document.getElementById("case_Minus").addEventListener("click", function () {
  updateProduct("case", 59, false);
});
