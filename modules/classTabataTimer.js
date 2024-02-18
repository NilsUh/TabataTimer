export class CTabataTimer {
  constructor(startTimeInSeconds) {
    this.startTime = startTimeInSeconds;
    this.remainingTime = startTimeInSeconds;
    this.timerId = null;
  }

  startCountdown() {
    this.timerId = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        clearInterval(this.timerId);
      }
    }, 1000);
  }

  toStr() {
    const minutes = Math.floor(this.remainingTime / 60);
    const seconds = this.remainingTime % 60;
    return `${minutes} minutes ${seconds} seconds`;
  }
}