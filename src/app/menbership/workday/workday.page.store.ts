import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

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
  pomodoroCount: 1 | 2 | 3 | 4 | 5;
  pomodoroList: PomodoroList;
}

type TaskList = Task[];

interface WorkdayState {
  date: string;
  taskList: TaskList;
}

const getEmptyTask = (): Task => ({
  type: 'Hit the target',
  title: 'neue Aufgabe',
  pomodoroCount: 1,
  pomodoroList: [{ status: 'Not started' }],
});

const initialState: WorkdayState = {
  date: '',
  taskList: [getEmptyTask()],
};

export const WorkdayStore = signalStore(
  withState<WorkdayState>(initialState),
  withMethods((store) => ({
    onAddTask() {

    patchState(store,(state) => ({
      ...state,
      taskList: [...state.taskList, getEmptyTask()]
    }))
    }
  }))
);
