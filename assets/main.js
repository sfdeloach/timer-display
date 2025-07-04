import "./style.css";

window.onload = function () {
  const time = {
    initial: 0,
    current: 0,
    getSeconds() {
      return this.current;
    },
    setSeconds(val) {
      this.current = val;
    },
    tick() {
      this.current--;
    },
    toString() {
      return (
        String(~~(this.current / 60)) +
        ":" +
        String(this.current % 60).padStart(2, "0")
      );
    },
  };

  let intervalID = null;

  const settingsPage = document.getElementById("settingsPage");
  const timerPage = document.getElementById("timerPage");

  const timerButton = document.getElementById("timerButton");
  const settingsButton = document.getElementById("settingsButton");
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const resetButton = document.getElementById("resetButton");

  const inputs = document.querySelectorAll(".time-input");
  const display = document.getElementById("display");

  function stopTimer() {
    if (intervalID !== null) {
      clearInterval(intervalID);
      intervalID = null;
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      time.current =
        (parseInt(inputs[0].value) || 0) * 60 +
        (parseInt(inputs[1].value) || 0);
      time.initial = time.current;
    });
  });

  timerButton.addEventListener("click", () => {
    display.innerText = time.toString();

    settingsPage.classList.add("hidden");
    settingsPage.classList.remove("show");
    timerPage.classList.add("show");
    timerPage.classList.remove("hidden");
  });

  settingsButton.addEventListener("click", () => {
    stopTimer();
    timerPage.classList.add("hidden");
    timerPage.classList.remove("show");
    settingsPage.classList.add("show");
    settingsPage.classList.remove("hidden");
  });

  startButton.addEventListener("click", () => {
    if (intervalID === null) {
      intervalID = setInterval(() => {
        if (time.current > 0) {
          time.current--;
          display.innerText = time.toString();
          if (time.current >= 60) {
            display.classList.remove("danger", "warning", "pulse");
          } else if (15 <= time.current && time.current < 60) {
            display.classList.add("warning");
            display.classList.remove("danger", "pulse");
          } else if (0 < time.current && time.current < 15) {
            display.classList.add("danger");
            display.classList.remove("warning", "pulse");
          } else {
            display.classList.add("danger", "pulse");
            display.classList.remove("warning");
          }
        } else {
          clearInterval(intervalID);
          intervalID = null;
        }
      }, 1000);
    }
  });

  stopButton.addEventListener("click", stopTimer);

  resetButton.addEventListener("click", () => {
    clearInterval(intervalID);
    intervalID = null;
    display.classList.remove("danger", "warning", "pulse");
    time.current = time.initial;
    display.innerText = time.toString();
  });
};
