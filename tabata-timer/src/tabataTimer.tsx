export class TabataTimer {
  rounds: number;
  setsPerRound: number;
  roundBreakDuration: number;
  setDuration: number;
  setBreakDuration: number;
  preStartInterval: number;
  timeElapsed: number;
  timeRemaining: number;

  constructor(
    rounds: number,
    setsPerRound: number,
    roundBreakDuration: number,
    setDuration: number,
    setBreakDuration: number
  ) {
    this.rounds = rounds;
    this.setsPerRound = setsPerRound;
    this.roundBreakDuration = roundBreakDuration;
    this.setDuration = setDuration;
    this.setBreakDuration = setBreakDuration;
    this.preStartInterval = 10;

    this.timeElapsed = 0;
    this.timeRemaining = 0;
    this.updateRemainingTime();
  }

  updateRemainingTime(): void {
    this.timeRemaining =
      this.preStartInterval +
      this.rounds * this.setsPerRound * this.setDuration +
      (this.rounds - 1) * this.roundBreakDuration +
      (this.setsPerRound - 1) * this.rounds * this.setBreakDuration;
  }

  getRemainingTime(): number {
    return this.timeRemaining;
  }

  onSettingsChanged(name: string, newValue: number) {
    if (name === "Rounds") {
      this.rounds = newValue;
      console.log(this.rounds);
    } else if (name === "Sets/Round") {
      this.setsPerRound = newValue;
    } else if (name === "Round Break Duration") {
      this.roundBreakDuration = newValue;
    } else if (name === "Set Duration") {
      this.setDuration = newValue;
    } else if (name === "Set Break Duration") {
      this.setBreakDuration = newValue;
    } else {
      console.log("Unknown setting with name: " + name);
    }

    this.updateRemainingTime();
  }
}
