import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.smart.component.html',
  styleUrl: './navbar.smart.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarSmartComponent {}
