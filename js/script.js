let count = 0;
const display = document.getElementById("heart-count");

document.getElementsByClassName("heart-btn").addEventListener("click", function () {
  count++;
  display.textContent = count;
});

// let count = 0;
// const button = document.getElementById("heart-btn");
// const display = document.getElementById("heart-count");

// button.addEventListener("click", () => {
//   count++;
//   display.textContent = count;
// });

// const items = document.querySelectorAll("heart-btn");
// const itemCountDisplay = document.getElementById("heart-count");
// itemCountDisplay.textContent = items.length;
