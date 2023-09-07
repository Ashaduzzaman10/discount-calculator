let billAmount = 0;
const discountCouponCode = "dis30";

function updateTotalBill() {
  const totalAmountElement = document.getElementById("total-amount");
  totalAmountElement.textContent = `$ ${billAmount.toFixed(2)}`;
}

document.getElementById("bill-enter").addEventListener("click", function () {
  const myBillElement = document.getElementById("input-bill");
  const myTotalBillString = myBillElement.value;
  const myBill = parseFloat(myTotalBillString);

  if (!isNaN(myBill)) {
    billAmount = myBill;
    updateTotalBill();
    myBillElement.value = "";
    console.log("Bill amount updated:", billAmount);
  } else {
    console.log("Invalid bill amount.");
  }
});

document.getElementById("coupon").addEventListener("click", function () {
  const couponInput = document.getElementById("coupon-id");
  const enteredCouponCode = couponInput.value;

  if (enteredCouponCode === discountCouponCode) {
    billAmount = billAmount - billAmount * 0.3;
    updateTotalBill();
    console.log("Discount applied. Updated bill amount:", billAmount);
  } else {
    console.log("Invalid coupon code.");
  }
});

document.getElementById("payButton").addEventListener("click", function () {
  document.write("thank you ")
});
