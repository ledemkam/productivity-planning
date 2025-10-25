import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { WorkdayStore } from './workday.page.store';
import { TaskfieldDumbComponent } from './taskfield/taskfield.dumb.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TaskfieldDumbComponent],
  templateUrl: './workday.page.component.html',
  styleUrl: './workday.page.component.css',
  providers: [WorkdayStore],
})
export class WorkdayPageComponent {
    readonly store = inject(WorkdayStore)
}
