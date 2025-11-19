// All Constants
export const WORKDAY_TASK_LIMIT = 6;
export const DEFAULT_POMODORO_DURATION = 5; // in seconds (25 minutes)

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
export interface Pomodoro {
  currentTime: number;
  duration: number;
}
export type PomodoroList = Pomodoro[];
export type PomodoroCount = 1 | 2 | 3 | 4 | 5;



//tasks Methods
export function isHitTheTargetTask(task: Task): boolean {
  return task.type === 'Hit the target';
}
export function   isGetThingsDoneTask(task: Task): boolean {
  return task.type === 'Get things done';
}
export function getActiveTask(taskList:TaskList): Task | undefined {
  return taskList.find((task) => !isTaskCompleted(task));
}
export function   isTaskCompleted(task: Task): boolean {
      if (isGetThingsDoneTask(task)) {
        return task.status === 'Done';
      }
     return task.pomodoroList.every((pomo) => isPomodoroCompleted(pomo),
        );

    }

//pomodoro Methods
export function isPomodoroCompleted(pomodoro: Pomodoro): boolean {
  return pomodoro.currentTime === pomodoro.duration;
}
export function   getActivePomodoro(task: Task): Pomodoro | undefined {
  return task.pomodoroList.find(pomo => !isPomodoroCompleted(pomo));
}




