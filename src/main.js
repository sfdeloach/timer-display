import "./style.css";

window.onload = function () {
  const time = { initial: [3, 0], current: [0, 0] };

  let intervalID = null;

  const settingsPage = document.getElementById("settingsPage");
  const timerPage = document.getElementById("timerPage");

  const timerButton = document.getElementById("timerButton");
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const settingsButton = document.getElementById("settingsButton");

  const minutesDisplay = document.getElementById("minutesDisplay");
  const secondsDisplay = document.getElementById("secondsDisplay");

  timerButton.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".time-input");
    time.initial[0] = parseInt(inputs[0].value) || 0;
    time.initial[1] = parseInt(inputs[1].value) || 0;

    minutesDisplay.innerText = String(time.initial[0]);
    secondsDisplay.innerText = String(time.initial[1]).padStart(2, "0");

    settingsPage.classList.add("hidden");
    timerPage.classList.remove("hidden");
  });

  startButton.addEventListener("click", () => {
    intervalID = setInterval(() => {
      console.log("tick");
    }, 1000);
  });

  stopButton.addEventListener("click", () => {
    clearInterval(intervalID);
  });

  settingsButton.addEventListener("click", () => {
    timerPage.classList.add("hidden");
    settingsPage.classList.remove("hidden");
  });
};
