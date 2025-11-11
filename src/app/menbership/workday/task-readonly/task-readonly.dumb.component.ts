import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task-readonly',
  imports: [],
  templateUrl: './task-readonly.dumb.component.html',
  styleUrl: './task-readonly.dumb.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskReadonlyDumbComponent {

}
