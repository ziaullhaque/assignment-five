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

// clear history and coins section
let coins = 100;
const coinCount = document.getElementById("coin-count");
const callHistory = document.getElementById("card-container");
const clearHistoryBtn = document.getElementById("clear-history");

// update coins
function currentCoins() {
  coinCount.innerText = coins;
  // coinCount.textContent = coins;
}

// time local
function getTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

// call and coin delete
function callCard(event) {
  if (coins < 20) {
    // alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে 20 কয়েন লাগবে");
    alert(
      "❌ You don't have enough coins. You need at least 20 coins to make a call."
    );
    return;
  }

  coins = coins - 20;
  currentCoins();

  const card = event.currentTarget.closest(".card");
  const serviceName = card.querySelector(".service-name").innerText;
  const serviceNumber = card.querySelector(".service-number").innerText;
  const time = getTime();

  alert(`📞 Calling ${serviceName} ${serviceNumber}...`);

  // history add
  const cardHistory = document.createElement("div");
  cardHistory.className =
    "flex justify-between bg-[#FAFAFA] items-center py-3 mx-3 rounded-2xl mb-3";

  cardHistory.innerHTML = `
    <div class="px-3">
      <h1 class="inter font-semibold text-xl">${serviceName}</h1>
      <p class="font-medium text-xl hind-madurai text-[#5C5C5C]">${serviceNumber}</p>
    </div>
    <div class="px-3">
      <p class="font-medium text-xl hind-madurai">${time}</p>
    </div>
  `;

  callHistory.appendChild(cardHistory);
}

// history clear
function clearHistory() {
  callHistory.innerHTML = "";
}

// call button
document.querySelectorAll(".calling").forEach(function (btn) {
  btn.addEventListener("click", callCard);
});

clearHistoryBtn.addEventListener("click", clearHistory);
currentCoins();
