// All Constants
export const MAXIMUN_POMODORO_DURATION = 5; // in seconds (25 minutes)

// Model for task
export interface Task {
  type: TaskType;
  title: string;
  status: Status;
  pomodoroCount: PomodoroCount;
  pomodoroList: PomodoroList;
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
export function isTaskCompleted(task: Task): boolean {
  if (isGetThingsDoneTask(task)) {
    return task.status === 'Done';
  }
  return task.pomodoroList.every((pomo) => isPomodoroCompleted(pomo));
}

//pomodoro Methods
export function isPomodoroCompleted(pomodoro: number): boolean {
  return pomodoro === MAXIMUN_POMODORO_DURATION;
}

export function getActivePomodoroIndex(task: Task): number | -1 {
  return task.pomodoroList.findIndex(
    (pomodoro) => !isPomodoroCompleted(pomodoro),
  );
}
