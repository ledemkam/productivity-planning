import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [],
  templateUrl: './shell.layout.component.html',
  styleUrl: './shell.layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellLayoutComponent {

}
