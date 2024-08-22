const xButton = document.querySelector("#x");
const okButton = document.querySelector(".ok-button");
const message = document.querySelector(".message");

xButton.addEventListener("mouseenter", () => {
  if (xButton.classList.contains("left-x")) {
    xButton.textContent = "OK";
  } else {
    xButton.classList.add("left-x");
  }
});

xButton.addEventListener("mouseleave", () => {
  xButton.textContent = "X";
});


xButton.addEventListener("click", displayThankYouMessage);

okButton.addEventListener("click", displayThankYouMessage);

function displayThankYouMessage() {
  message.textContent = "THANK YOU FOR YOUR LIFE, HOME, AND CAR";
  xButton.style.display = "none";
  okButton.style.display = "none";
}
