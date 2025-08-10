import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './shell.layout.component.html',
  styleUrl: './shell.layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellLayoutComponent {

}
