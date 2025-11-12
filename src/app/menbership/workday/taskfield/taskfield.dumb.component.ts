import {
  ChangeDetectionStrategy,
  Component,

  input,
  model,
  output,
} from '@angular/core';
import { PomodoroCount, Task, TaskType } from '../workday.page.store';

@Component({
  selector: 'app-taskfield',
  templateUrl: './taskfield.dumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
   host: {
    class: 'card',
    '[attr.data-testid]': '`task-${index()}`',
  },
})
export class TaskfieldDumbComponent {
  readonly task = model.required<Task>();
  readonly index = input.required<number>();

  readonly taskUpdated = output<Task>();
  readonly taskRemoved = output<void>();

  updateTaskType(type: string): void {
      const task: Task = { ...this.task(), type: type as TaskType };
      this.taskUpdated.emit(task);
    }

    updateTitle(title: string): void {
      const task: Task = { ...this.task(), title };
      this.taskUpdated.emit(task);
    }

    updatePomodoroCount(pomodoroCount: string): void {
      const task: Task = {
        ...this.task(),
        pomodoroCount: Number(pomodoroCount) as PomodoroCount,
      };
      this.taskUpdated.emit(task);
    }


}
