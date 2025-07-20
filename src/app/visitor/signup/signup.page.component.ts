import { ChangeDetectionStrategy, Component,  computed,  inject,  signal } from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';
@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.page.component.html',
  styleUrl: './signup.page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupPageComponent {
  //readonly toastr = inject(ToastrService);
  readonly authenticationService = inject(AuthenticationService);
  readonly  name = signal('')
  readonly email = signal('')
  readonly password = signal('')
  readonly confirmPassword = signal('')

  readonly isPasswordsMatchValid = computed(()  =>
  () => this.password() === this.confirmPassword() && this.password().length > 0
  )

  onSubmit() {
    console.log("form submitted");
    this.authenticationService.register(this.email(), this.password())
    
  }

}


