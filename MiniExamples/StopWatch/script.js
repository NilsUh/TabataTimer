var timerInterval;
var seconds = 0;
var minutes = 0;
var hours = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateTimer() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  var timeString = padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds);
  document.getElementById("timer").textContent = timeString;
}

function padNumber(number) {
  return number.toString().padStart(2, "0");
}

