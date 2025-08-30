import { Component, inject } from '@angular/core';
import { WorkdayStore } from './workday.page.store';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './workday.page.component.html',
  styleUrl: './workday.page.component.css',
  providers: [WorkdayStore],
})
export class WorkdayPageComponent {
    readonly store = inject(WorkdayStore)
}
