import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '@app/core/authentication.service';
import { RegisterUserUseCaseService } from './register-user.use-case.service';
import { UserStore } from '@app/core/store/user.store';
import { Visitor } from '@app/core/entity/user.interface';
import { Router } from '@angular/router';

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


  readonly name = signal('');
  readonly email = signal('');
  readonly password = signal('');
  readonly confirmPassword = signal('');
  readonly isPasswordMatch = computed(
    () => this.password() === this.confirmPassword(),
  );

  //workflow user authentication
 onSubmit() {
  // 1.infos collection(collecte donnees)
  const visitor: Visitor = {
    name: this.name(),
    email: this.email(),
    password: this.password(),
  }
  // 2. execute the use case(traitement metier)
  this.#registerUserUseCase.execute(visitor)
  .then(() => {
    // 3. redirect to home page after successful registration
    this.#router.navigate(['/']);
  });
 }
}
