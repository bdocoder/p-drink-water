let amount = 0;
const litersPerCup = 0.25;
const goal = 2;

/** @type {NodeListOf<HTMLButtonElement>} */
const cups = document.querySelectorAll(".cup");
/** @type {HTMLDivElement} */
const percentage = document.querySelector("#percentage");
/** @type {HTMLSpanElement} */
const drunk = document.querySelector("#drunk");
/** @type {HTMLSpanElement} */
const remaining = document.querySelector("#remaining");

function updateUI() {
  percentage.style.width = (amount * 100) / goal + "%";
  if (amount === goal) percentage.classList.add("rounded-r-lg");
  else percentage.classList.remove("rounded-r-lg");
  drunk.textContent = (amount * 100) / goal + "%";
  remaining.textContent = goal - amount + "L remaining";
  cups.forEach((cup2, key2) => {
    if ((key2 + 1) * litersPerCup <= amount) cup2.classList.add("active");
    else cup2.classList.remove("active");
  });
}

cups.forEach((cup, key) => {
  cup.addEventListener("click", () => {
    const nextAmount = litersPerCup * (key + 1);
    if (nextAmount === amount) amount -= litersPerCup;
    else amount = nextAmount;
    updateUI();
  });
});

updateUI();
