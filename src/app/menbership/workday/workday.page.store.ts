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
  type PomodoroCountType = 1 | 2 | 3 | 4 | 5;
interface Task {
  type: TaskType;
  title: string;
  pomodoroCount: PomodoroCountType;
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
    removeTask($index: number): void {
      patchState(store, (state) => ({
        taskList: state.taskList.filter((_, index) => index !== $index)
      }));
    },
    updateDate(event: Event): void {
      const date: string = (event.target as HTMLInputElement).value;
      patchState(store, () => ({
        date
      }))
    },
    updateTaskType($index:number, event: Event) : void {
      const type: TaskType = (event.target as HTMLSelectElement).value as TaskType;

      patchState(store, (state) => {
        const taskToUpdate = { ...state.taskList[$index], type};
        const updatedTaskList = state.taskList.toSpliced($index, 1, taskToUpdate);
        return {taskList: updatedTaskList };
      })
    },
    updateTaskTitle($index:number, event: Event): void {
      const title: string = (event.target as HTMLInputElement).value;

      patchState(store, (state) => {
        const taskToUpdate = { ...state.taskList[$index], title};
        const updatedTaskList = state.taskList.toSpliced($index, 1, taskToUpdate);
        return {taskList: updatedTaskList };
      })
    },
    updateTaskPomodoroCount($index:number, event: Event): void {
      const pomodoroCount: PomodoroCountType = Number((event.target as HTMLSelectElement).value) as PomodoroCountType;

      patchState(store, (state) => {
        const taskToUpdate = { ...state.taskList[$index], pomodoroCount};
        const updatedTaskList = state.taskList.toSpliced($index, 1, taskToUpdate);
        return {taskList: updatedTaskList };
      })
    },

  }))
);
