var nrSets;
var secSetsBreak;
var nrReps;
var secReps;
var secRepsBreak;

var secTotal;
var secRemaining;
var secElapsed;

var set = 1;
var rep = 1;

function run() {
  /* read inputs */
  nrSets = document.getElementById("nrSetsInput").value;
  secSetsBreak = document.getElementById("breakLengthSetsInput").value;
  nrReps = document.getElementById("nrRepsPerSetInput").value;
  secReps = document.getElementById("secsPerRepInput").value;
  secRepsBreak = document.getElementById("breakLengthRepsInput").value;

  /* disable inputs */
  document.getElementById("nrSetsInput").disabled = true;
  document.getElementById("breakLengthSetsInput").disabled = true;
  document.getElementById("nrRepsPerSetInput").disabled = true;
  document.getElementById("secsPerRepInput").disabled = true;
  document.getElementById("breakLengthRepsInput").disabled = true;

  /* calculate training time */
  secTotal = nrSets * nrReps * secReps + (nrSets - 1) * secSetsBreak + (nrReps - 1) * secRepsBreak;
  secRemaining = secTotal;
  secElapsed = 0;
  progress = secElapsed / secTotal;

  /* initial update of displays */
  document.getElementById("set-display").textContent = set.toString() + "/" + nrSets.toString();
  document.getElementById("rep-display").textContent = rep.toString() + "/" + nrReps.toString();
  document.getElementById("time-remaining-display").textContent = secRemaining.toString();
  document.getElementById("time-elapsed-display").textContent = secElapsed.toString();
  document.getElementById("progress-display").textContent = progress.toString() + "%";
}
