import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/core/authentication.service';
import { Visitor } from '@app/core/entity/user.interface';
import { UserStore } from '@app/core/store/user.store';
import { EmailAlreadyTakenError } from './email-already-taken.error';
import { RegisterUserUseCaseService } from './register-user.use-case.service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.page.component.html',
  styleUrl: './signup.page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupPageComponent {
  readonly store = inject(UserStore);
  readonly authenticationService = inject(AuthenticationService);
  readonly #registerUserUseCase = inject(RegisterUserUseCaseService);
  readonly #router = inject(Router);

  readonly isLoading = signal(false);
  readonly name = signal('');
  readonly email = signal('');
  readonly password = signal('');
  readonly confirmPassword = signal('');
  readonly isPasswordMatch = computed(
    () => this.password() === this.confirmPassword(),
  );
  readonly emailAlreadyTakenError = signal<EmailAlreadyTakenError | null>(null);
  readonly isEmailAlreadyTaken = computed(
    () => this.emailAlreadyTakenError()?.email === this.email(),
  );

  //workflow user authentication
  onSubmit() {
    // 1.infos collection(collecte donnees)
    this.isLoading.set(true);
    const visitor: Visitor = {
      name: this.name(),
      email: this.email(),
      password: this.password(),
    };
    // 2. execute the use case(traitement metier)
    this.#registerUserUseCase
      .execute(visitor)
      .then(() => {
        // 3. redirect to home page after successful registration
        this.#router.navigate(['/']);
      })
      .catch((error) => {
        this.isLoading.set(false);
        const isEmailAlreadyTaken = error instanceof EmailAlreadyTakenError;
        if (isEmailAlreadyTaken) {
          this.emailAlreadyTakenError.set(error);
        }
      });
  }
}
