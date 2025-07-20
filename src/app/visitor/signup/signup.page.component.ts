import { ChangeDetectionStrategy, Component,  computed,  signal } from '@angular/core';
@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.page.component.html',
  styleUrl: './signup.page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupPageComponent {
  //readonly toastr = inject(ToastrService);

  readonly  name = signal('')
  readonly email = signal('')
  readonly password = signal('')
  readonly confirmPassword = signal('')

  readonly isPasswordsMatchValid = computed(()  =>
  () => this.password() === this.confirmPassword() && this.password().length > 0
  )

}
