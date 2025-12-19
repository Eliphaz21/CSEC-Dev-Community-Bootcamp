// Select elements
const statusText = document.getElementById("statusText");
const toggleBtn = document.getElementById("toggleBtn");

// State variable
let isOn = false;

// Click event
toggleBtn.addEventListener("click", function () {
  if (isOn) {
    statusText.textContent = "OFF";
    isOn = false;
  } else {
    statusText.textContent = "ON";
    isOn = true;
  }
});
