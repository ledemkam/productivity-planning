import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

interface Pomodoro {
  status: 'Not started' | 'In progress' | 'Done';
}

type PomodoroList =
  | [Pomodoro]
  | [Pomodoro, Pomodoro]
  | [Pomodoro, Pomodoro, Pomodoro]
  | [Pomodoro, Pomodoro, Pomodoro, Pomodoro]
  | [Pomodoro, Pomodoro, Pomodoro, Pomodoro, Pomodoro];

  type TaskType = 'Hit the target' | 'Get things done';
interface Task {
  type: TaskType;
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
  type: 'Hit the target' ,
  title: 'neue Aufgabe',
  pomodoroCount: 1,
  pomodoroList: [{ status: 'Not started' }],
});

const initialState: WorkdayState = {
  date: '',
  taskList: [getEmptyTask()],
};

const WorkDayTaskLimit = 6;

export const WorkdayStore = signalStore(
  withState<WorkdayState>(initialState),
  withComputed((state) => {
   const taskCount = computed(() => state.taskList().length);
   const isButtonDisplayed = computed(() => taskCount() < WorkDayTaskLimit);

   return {
     taskCount,
     isButtonDisplayed
   };
  }),
  withMethods((store) => ({
    onAddTask() {
      patchState(store, (state) => ({
        taskList: [...state.taskList, getEmptyTask()]
      }))
    },
    updateTaskType($index:number, type: TaskType) {
      patchState(store, (state) => {
        const taskToUpdate = { ...state.taskList[$index], type };
        const updatedTaskList = state.taskList.toSpliced($index, 1, taskToUpdate);
        return { ...state, taskList: updatedTaskList };
      })
    }
  }))
);
