import { Component, inject } from '@angular/core';
import { UserStore } from '../../core/store/user.store';

@Component({
  imports: [],
  templateUrl: './dashboard.page.component.html',
  styleUrl: './dashboard.page.component.css',
})
export class DashboardPageComponent {
  readonly store = inject(UserStore);
}
