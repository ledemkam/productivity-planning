import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarSmartComponent } from '../sidebar/sidebar.smart.component';

@Component({
  standalone: true,
  imports: [RouterOutlet,SidebarSmartComponent],
  templateUrl: './shell.layout.component.html',
  styleUrl: './shell.layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
    'class': 'shell d-flex vh-100'
  }
})
export class ShellLayoutComponent {
   isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
