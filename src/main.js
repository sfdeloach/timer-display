import "./style.css";

window.onload = function () {
  const time = {
    initial: null,
    current: null,
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
  const startButton = document.getElementById("startButton");
  const stopButton = document.getElementById("stopButton");
  const settingsButton = document.getElementById("settingsButton");

  const display = document.getElementById("display");

  timerButton.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".time-input");

    time.initial =
      (parseInt(inputs[0].value) || 0) * 60 + (parseInt(inputs[1].value) || 0);
    time.current = time.initial;

    display.innerText = time.toString();

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
