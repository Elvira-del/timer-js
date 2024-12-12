document.addEventListener("DOMContentLoaded", () => {
  const timers = document.querySelector(".timer__list");
  const inputTimer = document.querySelector(".timer__input");
  const addTimerButton = document.querySelector(".timer__button");

  function createTimer(duration) {
    const timerItem = document.createElement("li");
    timerItem.classList.add("timer__item");

    const timeDisplay = document.createElement("span");
    timeDisplay.textContent = `Осталось ${duration} сек.`;

    const timerButtons = document.createElement("div");
    timerButtons.classList.add("timer__buttons");

    const stopButton = document.createElement("button");
    stopButton.classList.add("stop-button");
    stopButton.textContent = "Остановить";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Удалить";

    timerButtons.appendChild(stopButton);
    timerButtons.appendChild(deleteButton);
    timerItem.appendChild(timeDisplay);
    timerItem.appendChild(timerButtons);
    timers.appendChild(timerItem);

    let remainingTime = duration;
    let isRunning = true;

    async function updateTimer() {
      while (remainingTime > 0 && isRunning) {
        timeDisplay.textContent = `Осталось ${remainingTime} сек.`;
        remainingTime--;

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      if (remainingTime <= 0) {
        timerItem.remove();
      }
    }

    updateTimer();

    stopButton.addEventListener("click", () => {
      isRunning = !isRunning;
      stopButton.textContent = isRunning ? "Остановить" : "Продолжить";
      if (isRunning) updateTimer();
    });

    deleteButton.addEventListener("click", () => {
      isRunning = false;
      timerItem.remove();
    });
  }

  addTimerButton.addEventListener("click", () => {
    const duration = parseInt(inputTimer.value, 10);
    if (!isNaN(duration) && duration > 0) {
      createTimer(duration);
      inputTimer.value = "";
    } else {
      alert("Введите корректное время в секундах!");
    }
  });
});
