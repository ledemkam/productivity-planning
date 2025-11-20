import { computed, DestroyRef, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  MAXIMUN_POMODORO_DURATION,
  Task,
  TaskList,

} from './task.model';

interface WorkdayState {
  date: string;
  taskList: TaskList;
  progress: number;
  mode: 'edit' | 'execution';
}

const getEmptyTask = (): Task => ({
  type: 'Hit the target',
  title: 'Nouvelle tâche',
  status: 'Not started',
  pomodoroCount: 1,
  pomodoroList: [0],
});

const WORKDAY_TASK_LIMIT = 6

export const WorkdayStore = signalStore(
  withState<WorkdayState>({
    date: '2019-02-28',
    taskList: [getEmptyTask()],
    progress: 0,
    mode: 'edit',
  }),
  withProps(() => ({
    destroyRef: inject(DestroyRef),
  })),
  withComputed((state) => {
    const taskCount = computed(() => state.taskList().length);
    const isButtonDisplayed = computed(() => taskCount() < WORKDAY_TASK_LIMIT);
    const hasNoTaskPlanned = computed(() => taskCount() === 0);
    const hasTaskPlanned = computed(() => taskCount() > 0);
    const isEditmode = computed(() => state.mode() === 'edit');
    const isExecutionMode = computed(() => state.mode() === 'execution');
    const pomodoroProgress = computed(() => {
      return Math.floor((state.progress() / MAXIMUN_POMODORO_DURATION) * 100);
    })

    return {
      taskCount,
      isButtonDisplayed,
      hasNoTaskPlanned,
      hasTaskPlanned,
      isEditmode,
      isExecutionMode,
      pomodoroProgress,
    };
  }),
  withMethods(({destroyRef, ...store}) => ({
    startWorkday() {
      patchState(store, { mode: 'execution' });
      console.log("start");
      timer(0, 1000)
      .pipe(takeUntilDestroyed(destroyRef))
      .subscribe((elapsedSeconds: number) => {
        patchState(store, () => {
          console.log('elapsedSecond', elapsedSeconds);

          return { progress: elapsedSeconds };
        });
      });
    },

    addTask() {
      patchState(store, (state) => ({
        taskList: [...state.taskList, getEmptyTask()],
      }));
    },
    removeTask($index: number) {
      patchState(store, (state) => ({
        taskList: state.taskList.toSpliced($index, 1),
      }));
    },
    updateDate(event: Event) {
      const date = (event.target as HTMLInputElement).value;
      patchState(store, () => ({ date }));
    },
    updateTask(index: number, updatedTask: Task) {
      patchState(store, (state) => {
        const taskList: TaskList = state.taskList.toSpliced(
          index,
          1,
          updatedTask,
        );
        return { taskList };
      });
    },
  })),
);
