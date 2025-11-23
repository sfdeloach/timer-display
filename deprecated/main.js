window.onload = function () {
  const time = {
    initial: 0,
    current: 0,
    size: 600,
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
    fontSize() {
      return String(this.size) + "px";
    },
  };

  let intervalID = null;

  const settingsPage = document.getElementById("settingsPage");
  const inputs = document.querySelectorAll(".timeInput");

  const timerPage = document.getElementById("timerPage");
  const display = document.getElementById("display");
  const timerBtn = document.getElementById("timerBtn");
  const settingsBtn = document.getElementById("settingsBtn");
  const startBtn = document.getElementById("startBtn");
  const stopBtn = document.getElementById("stopBtn");
  const resetBtn = document.getElementById("resetBtn");
  const increaseBtn = document.getElementById("increaseBtn");
  const decreaseBtn = document.getElementById("decreaseBtn");

  function startTimer() {
    const boundaries = [0, 20, 60];
    if (intervalID === null) {
      intervalID = setInterval(() => {
        if (time.current > 0) {
          time.current--;
          display.innerText = time.toString();
          if (time.current > boundaries[2]) {
            display.classList.remove("danger", "warning", "pulse");
          } else if (
            boundaries[1] < time.current &&
            time.current <= boundaries[2]
          ) {
            display.classList.add("warning");
            display.classList.remove("danger", "pulse");
          } else if (
            boundaries[0] < time.current &&
            time.current <= boundaries[1]
          ) {
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
  }

  function stopTimer() {
    if (intervalID !== null) {
      clearInterval(intervalID);
      intervalID = null;
    }
  }

  function resetTimer() {
    clearInterval(intervalID);
    intervalID = null;
    display.classList.remove("danger", "warning", "pulse");
    time.current = time.initial;
    display.innerText = time.toString();
  }

  function increaseFontSize() {
    time.size += 12;
    display.style.fontSize = time.fontSize();
  }

  function decreaseFontSize() {
    time.size -= 12;
    display.style.fontSize = time.fontSize();
  }

  document.addEventListener("keypress", (e) => {
    switch (e.key) {
      case "G":
      case "g":
        startTimer();
        break;
      case "S":
      case "s":
        stopTimer();
        break;
      case "R":
      case "r":
        resetTimer();
        break;
      case "+":
        increaseFontSize();
        break;
      case "-":
        decreaseFontSize();
        break;
      default:
        break;
    }
  });

  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      time.current =
        (parseInt(inputs[0].value) || 0) * 60 +
        (parseInt(inputs[1].value) || 0);
      time.initial = time.current;
    });
  });

  timerBtn.addEventListener("click", () => {
    display.innerText = time.toString();
    display.style.fontSize = time.fontSize();

    settingsPage.classList.add("hidden");
    settingsPage.classList.remove("show");
    timerPage.classList.add("show");
    timerPage.classList.remove("hidden");
  });

  settingsBtn.addEventListener("click", () => {
    stopTimer();
    timerPage.classList.add("hidden");
    timerPage.classList.remove("show");
    settingsPage.classList.add("show");
    settingsPage.classList.remove("hidden");
  });

  startBtn.addEventListener("click", startTimer);
  stopBtn.addEventListener("click", stopTimer);
  resetBtn.addEventListener("click", resetTimer);
  increaseBtn.addEventListener("click", increaseFontSize);
  decreaseBtn.addEventListener("click", decreaseFontSize);
};
