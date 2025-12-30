/**
 * PHAG Interactive Logic
 * Handles Stripe redirects and QR Lightbox
 */

function checkout(productId) {
  // Mapping your specific Product IDs to your live Stripe Links
  const paymentLinks = {
    prod_ThELYVj3Q9PlEe: "https://buy.stripe.com/28E9AT3SubXh9rF414cMM03",
    prod_ThEIjxsQ5cXkCq: "https://buy.stripe.com/3cI3cvagS8L5dHV414cMM00",
    // Update the link below if you get a 3rd unique Stripe URL
    prod_Tgyq6AoVo3hXp6: "https://buy.stripe.com/3cI3cvagS8L5dHV414cMM00",
  };

  const link = paymentLinks[productId];

  if (link) {
    window.open(link, "_blank");
  } else {
    alert("Payment link not found!");
  }
}

// Controls the QR Code Zoom (Lightbox)
function openFullQR() {
  const overlay = document.getElementById("qrOverlay");
  if (overlay) overlay.style.display = "flex";
}

function closeFullQR() {
  const overlay = document.getElementById("qrOverlay");
  if (overlay) overlay.style.display = "none";
}

console.log("PHAG Site Fully Functional");
