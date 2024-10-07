enum TaskTypeEnum {
  PreStart,
  Set,
  SetBreak,
  RoundBreak,
}

export class TabataTask {
  duration: number;
  taskType: TaskTypeEnum;

  constructor(duration: number, tastType: TaskTypeEnum) {
    this.duration = duration;
    this.taskType = tastType;
  }

  getTaskName(): string {
    //ToDo: Make this more flexible to additional task types
    let taskName: string;
    if (this.taskType == TaskTypeEnum.PreStart) {
      taskName = "Pre Start";
    } else if (this.taskType == TaskTypeEnum.Set) {
      taskName = "Set";
    } else if (this.taskType == TaskTypeEnum.SetBreak) {
      taskName = "Set Break";
    } else if (this.taskType == TaskTypeEnum.RoundBreak) {
      taskName = "Round Break";
    } else {
      taskName = "Unknown";
    }

    return taskName;
  }
}

export class TabataTimer {
  rounds: number;
  setsPerRound: number;
  roundBreakDuration: number;
  setDuration: number;
  setBreakDuration: number;
  preStartInterval: number;
  timeElapsed: number;
  timeRemaining: number;
  taskList: TabataTask[];

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
    this.taskList = [];

    this.updateRemainingTime();
    this.updateTaskList();
  }

  updateRemainingTime(): void {
    this.timeRemaining =
      this.preStartInterval +
      this.rounds * this.setsPerRound * this.setDuration +
      (this.rounds - 1) * this.roundBreakDuration +
      (this.setsPerRound - 1) * this.rounds * this.setBreakDuration;
  }

  updateTaskList(): void {
    let setIdx = 0;
    let roundIdx = 0;
    this.taskList = [];

    for (roundIdx = 0; roundIdx < this.rounds; roundIdx++) {
      for (setIdx = 0; setIdx < this.setsPerRound; setIdx++) {
        this.taskList.push(new TabataTask(this.setDuration, TaskTypeEnum.Set));
        if (setIdx < this.setsPerRound - 1) {
          this.taskList.push(
            new TabataTask(this.setBreakDuration, TaskTypeEnum.SetBreak)
          );
        }
      }

      if (roundIdx < this.rounds - 1) {
        this.taskList.push(
          new TabataTask(this.roundBreakDuration, TaskTypeEnum.RoundBreak)
        );
      }
    }
  }

  getRemainingTime(): number {
    return this.timeRemaining;
  }

  getTaskListNames(): string[] {
    return this.taskList.map((task) => task.getTaskName());
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
    this.updateTaskList();
  }
}
