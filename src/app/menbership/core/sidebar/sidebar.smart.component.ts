import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.smart.component.html',
  styleUrl: './sidebar.smart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarSmartComponent {

}
