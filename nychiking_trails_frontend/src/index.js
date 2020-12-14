const api = new ApiService("http://localhost:3000");
const trailsContainer = document.getElementById("tails");

document.addEventListener("DOMContentLoaded", () => {
  BoroughButton.retrieveBoroughs();
});
