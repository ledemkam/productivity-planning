// All Constants
export const MAXIMUN_POMODORO_DURATION = 5; // in seconds (25 minutes)

// Model for task
export interface Task {
  type: TaskType;
  title: string;
  status: Status;
  pomodoroCount: PomodoroCount;
  pomodoroList: PomodoroList;
  statusEmoji: string;
}
export type Status = 'Not started' | 'In progress' | 'Done';
export type TaskType = 'Hit the target' | 'Get things done';
export type TaskList = Task[];

// Model for pomodoro
export type PomodoroList =
  | [number]
  | [number, number]
  | [number, number, number]
  | [number, number, number, number]
  | [number, number, number, number, number];
export type PomodoroCount = 1 | 2 | 3 | 4 | 5;

//tasks Methods
export function isHitTheTargetTask(task: Task): boolean {
  return task.type === 'Hit the target';
}
export function isGetThingsDoneTask(task: Task): boolean {
  return task.type === 'Get things done';
}
export function getActiveTask(taskList: TaskList): Task | undefined {
  return taskList.find((task) => !isTaskCompleted(task));
}

export function getActiveTaskIndex(taskList: TaskList): number | -1 {
  return taskList.findIndex((task) => !isTaskCompleted(task));
}
export function isTaskCompleted(task: Task): boolean {
  if (isGetThingsDoneTask(task)) {
    return task.status === 'Done';
  }

  // Hit the target task
  return task.pomodoroList.every((pomodoro) => isPomodoroCompleted(pomodoro));
}

export function isTaskInProgress(task: Task): boolean {
  if (isGetThingsDoneTask(task)) {
    return task.status === 'In progress';
  }
  // Hit the target task: true si au moins un pomodoro est en cours
  return task.pomodoroList.some((pomodoro) => isPomodoroInProgress(pomodoro));
}
//pomodoro Methods
export function isPomodoroCompleted(pomodoro: number): boolean {
  return pomodoro === MAXIMUN_POMODORO_DURATION;
}

export function isPomodoroInProgress(pomodoro: number): boolean {
  return pomodoro !== MAXIMUN_POMODORO_DURATION && pomodoro !== 0;
}

export function isPomodoroNotStarted(pomodoro: number): boolean {
  return pomodoro === 0;
}

export function getActivePomodoroIndex(task: Task): number | -1 {
  return task.pomodoroList.findIndex(
    (pomodoro) => !isPomodoroCompleted(pomodoro)
  );
}

export function createPomodoroList(count: PomodoroCount): PomodoroList {
  switch (count) {
    case 1:
      return [0];
    case 2:
      return [0, 0];
    case 3:
      return [0, 0, 0];
    case 4:
      return [0, 0, 0, 0];
    case 5:
      return [0, 0, 0, 0, 0];
  }
}
export function getPomodoroEmojiStatus(pomodoro: number): string {
  if (isPomodoroCompleted(pomodoro)) {
    return '☑️';
  }

  if (isPomodoroInProgress(pomodoro)) {
    return '🔄';
  }

  // Not started
  return '⏸️';
}

export function getPomodoroListEmojiStatus(
  pomodoroList: PomodoroList
): string[] {
  return pomodoroList.map((pomodoro) => getPomodoroEmojiStatus(pomodoro));
}

/* View model methods */
export function getTaskEmojiStatus(task: Task): string {
  if (isTaskCompleted(task)) {
    return '✅';
  }

  if (isTaskInProgress(task)) {
    return '🔄';
  }

  // Not started
  return '🏁';
}

