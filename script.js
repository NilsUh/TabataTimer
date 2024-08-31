function playBell() {
  audioBellTriple.play();
}

function playPings() {
  audioHammerPings.play();
}

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

function setInputsDisabled(setValue) {
  /* enable inputs */
  document.getElementById("nrSetsInput").disabled = setValue;
  document.getElementById("breakLengthSetsInput").disabled = setValue;
  document.getElementById("nrRepsPerSetInput").disabled = setValue;
  document.getElementById("secsPerRepInput").disabled = setValue;
  document.getElementById("breakLengthRepsInput").disabled = setValue;
}

class CTabataTimerElement {
  constructor(secs, color, repIdx, setIdx, type) {
    this.timeRemaining = secs;
    this.isRunning = false;
    this.color = color;
    this.repIdx = repIdx;
    this.setIdx = setIdx;
    this.type = type;
  }

  start() {
    this.setTimerDisplay();
  }

  decrease() {
    let successDecrease = false;
    if (this.timeRemaining > 0) {
      this.timeRemaining--;
      this.setTimerDisplay();
      successDecrease = true;
    }

    if (this.type == "break" && this.timeRemaining == 2) {
      playBell();
    }

    if (this.type == "repetion" && this.timeRemaining == 4) {
      playPings();
    }

    return successDecrease;
  }

  getRepIdx() {
    return this.repIdx;
  }

  getSetIdx() {
    return this.setIdx;
  }

  setTimerDisplay() {
    document.getElementById("timer-display").textContent = this.timeRemaining.toString();
    document.getElementById("timer-display").style.backgroundColor = this.color;
  }
}

class CTabataTimer {
  constructor(nrSets, secSetsBreak, nrReps, secReps, secRepsBreak) {
    this.nrSets = nrSets;
    this.set = 0;
    this.secSetsBreak = secSetsBreak;
    this.nrReps = nrReps;
    this.rep = 0;
    this.secReps = secReps;
    this.secRepsBreak = secRepsBreak;
    this.preStartInterval = 10;
    this.timeElapsed = 0;
    this.timeRemaining = this.preStartInterval + nrSets * nrReps * secReps + (nrSets - 1) * secSetsBreak + (nrReps - 1) * nrSets * secRepsBreak - 1;
    this.intervalId = null;

    this.timerListIdx = 0;
    this.timerList = [];
    this.timerList.push(new CTabataTimerElement(this.preStartInterval - 1, "yellow", 0, 0, "break"));
    let repIdx = 0;
    let setIdx = 0;
    for (setIdx = 0; setIdx < this.nrSets; setIdx++) {
      for (repIdx = 0; repIdx < this.nrReps; repIdx++) {
        this.timerList.push(new CTabataTimerElement(secReps - 1, "red", repIdx, setIdx, "repetion"));
        if (repIdx < this.nrReps - 1) {
          this.timerList.push(new CTabataTimerElement(secRepsBreak - 1, "green", repIdx, setIdx, "break"));
        }
      }

      if (setIdx < this.nrSets - 1) {
        this.timerList.push(new CTabataTimerElement(secSetsBreak - 1, "green", this.nrReps - 1, setIdx, "break"));
      }
    }

    this.setDisplays();
    this.start();
  }

  start() {
    setInputsDisabled(true);
    document.getElementById("run-button").disabled = true;
    document.getElementById("pause-resume-button").disabled = false;
    document.getElementById("stop-button").disabled = false;

    this.timerListIdx = 0;
    this.resume();
  }

  resume() {
    document.getElementById("pause-resume-button").textContent = "Pause";

    this.timerList[this.timerListIdx].start();
    this.intervalId = setInterval(this.intervalFunction.bind(this), 1000);
  }

  pause() {
    if (!this.isPaused()) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      document.getElementById("pause-resume-button").textContent = "Resume";
    }
  }

  stop() {
    setInputsDisabled(false);
    document.getElementById("run-button").disabled = false;
    document.getElementById("pause-resume-button").disabled = true;
    document.getElementById("stop-button").disabled = true;
    this.resetDisplays();

    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  isPaused() { return this.intervalId == null; }

  setDisplays() {
    const [minutesRemaining, secondsRemaining] = this.calcMinSec(this.timeRemaining);
    const [minutesElapsed, secondsElapsed] = this.calcMinSec(this.timeElapsed);
    const progress = this.timeElapsed / (this.timeElapsed + this.timeRemaining) * 100.0;

    document.getElementById("set-display").textContent = this.set.toString() + "/" + this.nrSets.toString();
    document.getElementById("rep-display").textContent = this.rep.toString() + "/" + this.nrReps.toString();
    document.getElementById("time-remaining-display").textContent = pad(minutesRemaining, 2) + ":" + pad(secondsRemaining, 2);
    document.getElementById("time-elapsed-display").textContent = pad(minutesElapsed, 2) + ":" + pad(secondsElapsed, 2);
    document.getElementById("progress-display").textContent = progress.toFixed(1).toString() + "%";
  }

  resetDisplays() {
    document.getElementById("set-display").textContent = "-/-";
    document.getElementById("rep-display").textContent = "-/-";
    document.getElementById("time-remaining-display").textContent = "--/--";
    document.getElementById("time-elapsed-display").textContent = "--/--";
    document.getElementById("progress-display").textContent = "-- %";
  }

  calcMinSec(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return [mins, secs];
  }

  intervalFunction() {
    if (this.timeRemaining > 0) {
      if (!this.timerList[this.timerListIdx].decrease()) {
        this.timerList[++this.timerListIdx].start();
        this.rep = this.timerList[this.timerListIdx].getRepIdx() + 1;
        this.set = this.timerList[this.timerListIdx].getSetIdx() + 1;
      }
      this.timeRemaining--;
      this.timeElapsed++;
      this.setDisplays();
    } else {
      this.stop();
    }
  }
}

function runCallback() {
  audioBellTriple = new Audio("audio/bell_triple.wav");
  audioHammerPings = new Audio("audio/hammer_pings.wav");

  /* read inputs */
  let nrSets = document.getElementById("nrSetsInput").value;
  let secSetsBreak = document.getElementById("breakLengthSetsInput").value;
  let nrReps = document.getElementById("nrRepsPerSetInput").value;
  let secReps = document.getElementById("secsPerRepInput").value;
  let secRepsBreak = document.getElementById("breakLengthRepsInput").value;

  tabataTimer = new CTabataTimer(nrSets, secSetsBreak, nrReps, secReps, secRepsBreak);
}

function pauseCallback() {
  console.log("Hello from pauseCallback()!");

  if (tabataTimer) {
    if (tabataTimer.isPaused()) {
      tabataTimer.resume();
    } else {
      tabataTimer.pause();
    }
  }
}

function stopCallback() {
  if (tabataTimer) {
    tabataTimer.stop();
    tabataTimer = null;
  }
}

var tabataTimer = null;
var audioBellTriple = null;
var audioHammerPings = null;

document.getElementById("pause-resume-button").disabled = true;
document.getElementById("stop-button").disabled = true;

document.getElementById("run-button").addEventListener("click", runCallback);
document.getElementById("pause-resume-button").addEventListener("click", pauseCallback);
document.getElementById("stop-button").addEventListener("click", stopCallback);