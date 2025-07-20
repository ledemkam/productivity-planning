import { ChangeDetectionStrategy, Component,  computed,  inject,  signal} from '@angular/core';
import { AuthenticationService } from '../../core/authentication.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserStore } from '../../core/store/user.store';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.page.component.html',
  styleUrl: './signup.page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupPageComponent {
  readonly store = inject(UserStore)
  //readonly toastr = inject(ToastrService);
  readonly authenticationService = inject(AuthenticationService);
  readonly  name = signal('')
  readonly email = signal('')
  readonly password = signal('')
  readonly confirmPassword = signal('')
  readonly isPasswordMatch = computed(
    () => this.password() === this.confirmPassword()
  );

  readonly isLoading = signal(false);

  onSubmit() {
    console.log("form submitted");
  
  }

}


