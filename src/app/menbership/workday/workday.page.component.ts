import { Component, inject } from '@angular/core';
import { WorkdayStore } from './workday.page.store';
import { JsonPipe } from '@angular/common';

@Component({
  standalone: true,
  imports: [JsonPipe],// to remove later
  templateUrl: './workday.page.component.html',
  styleUrl: './workday.page.component.css',
  providers: [WorkdayStore],
})
export class WorkdayPageComponent {
    readonly store = inject(WorkdayStore)
}
