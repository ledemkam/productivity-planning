import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskfieldDumbComponent } from './taskfield/taskfield.dumb.component';
import { WorkdayStore } from './workday.page.store';
import { TaskReadonlyDumbComponent } from "./task-readonly/task-readonly.dumb.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TaskfieldDumbComponent, TaskReadonlyDumbComponent], // Import du composant
  templateUrl: './workday.page.component.html',
  styleUrl: './workday.page.component.css',
  providers: [WorkdayStore],
})
export class WorkdayPageComponent {
  readonly store = inject(WorkdayStore);
}
