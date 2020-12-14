const api = new ApiService("http://localhost:3000/boroughs");
const apiTwo = new ApiService("http://localhost:3000/comments");
const trailsContainer = document.getElementById("tails");

document.addEventListener("DOMContentLoaded", () => {
  BoroughButton.retrieveBoroughs();
  // TrailComponent.getButtonClick();
});
