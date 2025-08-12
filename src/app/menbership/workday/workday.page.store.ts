import { signalStore, withState } from '@ngrx/signals';

interface Pomodoro {
  status: 'Not started' | 'In progress' | 'Done';
}

type PomodoroList =
  | [Pomodoro]
  | [Pomodoro, Pomodoro]
  | [Pomodoro, Pomodoro, Pomodoro]
  | [Pomodoro, Pomodoro, Pomodoro, Pomodoro]
  | [Pomodoro, Pomodoro, Pomodoro, Pomodoro, Pomodoro];

interface Task {
  type: 'Hit the target' | 'Get things done';
  title: string;
  pomodoroList: PomodoroList;
}

type taskList =
  | []
  | [Task]
  | [Task, Task]
  | [Task, Task, Task]
  | [Task, Task, Task, Task]
  | [Task, Task, Task, Task, Task]
  | [Task, Task, Task, Task, Task, Task];

interface WorkdayState {
  date: string;
  taskList: taskList;
}

const initialState: WorkdayState = {};

export const WorkdayStore = signalStore(withState(initialState));
