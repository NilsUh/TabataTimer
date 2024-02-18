class CTabataTimer {
  constructor(nrSets, secSetsBreak, nrReps, secReps, secRepsBreak) {
    this.nrSets = nrSets;
    this.set = 0;
    this.secSetsBreak = secSetsBreak;
    this.nrReps = nrReps;
    this.rep = 0;
    this.secReps = secReps;
    this.secRepsBreak = secRepsBreak;
    this.timeElapsed = 0;
    this.timeRemaining = nrSets * nrReps * secReps + (nrSets - 1) * secSetsBreak + (nrReps - 1) * secRepsBreak;
    this.timerId = null;

    this.setDisplays();
    this.startCountdown();
  }

  startCountdown() {
    this.timerId = setInterval(() => {
      if (this.timeRemaining > 0) {
        this.timeRemaining--;
        this.timeElapsed++;
        this.setDisplays();
      } else {
        clearInterval(this.timerId);
      }
    }, 1000);
  }

  setDisplays() {
    const [minutesRemaining, secondsRemaining] = this.calcMinSec(this.timeRemaining);
    const [minutesElapsed, secondsElapsed] = this.calcMinSec(this.timeElapsed);
    const progress = this.timeElapsed / (this.timeElapsed + this.timeRemaining);

    document.getElementById("set-display").textContent = this.set.toString() + "/" + this.nrSets.toString();
    document.getElementById("rep-display").textContent = this.rep.toString() + "/" + this.nrReps.toString();
    document.getElementById("time-remaining-display").textContent = minutesRemaining.toString() + ":" + secondsRemaining.toString();
    document.getElementById("time-elapsed-display").textContent = minutesElapsed.toString() + ":" + secondsElapsed.toString();
    document.getElementById("progress-display").textContent = progress.toString() + "%";
  }

  calcMinSec(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return [mins, secs];
  }
}

function run() {
  /* read inputs */
  var nrSets = document.getElementById("nrSetsInput").value;
  var secSetsBreak = document.getElementById("breakLengthSetsInput").value;
  var nrReps = document.getElementById("nrRepsPerSetInput").value;
  var secReps = document.getElementById("secsPerRepInput").value;
  var secRepsBreak = document.getElementById("breakLengthRepsInput").value;

  /* disable inputs */
  document.getElementById("nrSetsInput").disabled = true;
  document.getElementById("breakLengthSetsInput").disabled = true;
  document.getElementById("nrRepsPerSetInput").disabled = true;
  document.getElementById("secsPerRepInput").disabled = true;
  document.getElementById("breakLengthRepsInput").disabled = true;

  tabataTimer = new CTabataTimer(nrSets, secSetsBreak, nrReps, secReps, secRepsBreak);
};


document.getElementById("run-botton").addEventListener("click", run);
