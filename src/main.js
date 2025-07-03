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

  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      time.current =
        (parseInt(inputs[0].value) || 0) * 60 +
        (parseInt(inputs[1].value) || 0);
    });
  });

  timerButton.addEventListener("click", () => {
    time.initial = time.current;
    display.innerText = time.toString();

    settingsPage.classList.add("hidden");
    timerPage.classList.remove("hidden");
  });

  settingsButton.addEventListener("click", () => {
    timerPage.classList.add("hidden");
    settingsPage.classList.remove("hidden");
    // TODO: set input fields to current time
  });

  startButton.addEventListener("click", () => {
    intervalID = setInterval(() => {
      if (time.current > 0) {
        time.current--;
        display.innerText = time.toString();
        // TODO: change colors
      } else {
        clearInterval(intervalID);
      }
    }, 1000);
  });

  stopButton.addEventListener("click", () => {
    clearInterval(intervalID);
  });

  resetButton.addEventListener("click", () => {
    clearInterval(intervalID);
    time.current = time.initial;
    display.innerText = time.toString();
  });
};
