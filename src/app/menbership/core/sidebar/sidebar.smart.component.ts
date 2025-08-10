import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sidebar.smart.component.html',
  styleUrl: './sidebar.smart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarSmartComponent {

}
