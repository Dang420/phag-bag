function redirectToPay() {
  // Replace the link below with your actual CashApp or PayPal link
  window.open("https://yourpaymentlinkhere.com", "_blank");
}

function openFullQR() {
  document.getElementById("qrOverlay").style.display = "flex";
}

function closeFullQR() {
  document.getElementById("qrOverlay").style.display = "none";
}
