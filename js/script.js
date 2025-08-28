// heart count
let count = 0;
let hearts = document.getElementsByClassName("heart-btn");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    count++;
    document.getElementById("heart-count").innerText = count;
  });
}

//copying

let copyCount = 0;
document.querySelectorAll(".copy").forEach(function (copyButton) {
  copyButton.addEventListener("click", function () {
    const targetElement = copyButton
      .closest(".card")
      .querySelector(".num-copy");
    const textToCopy = targetElement.textContent.trim();
    navigator.clipboard.writeText(textToCopy).then(function () {
      alert("Number Copied! : " + textToCopy);

      copyCount++;
      document.getElementById("count-copy").innerText = copyCount;
    });
  });
});
