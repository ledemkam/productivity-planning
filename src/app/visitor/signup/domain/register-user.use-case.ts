import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { Router } from '@angular/router';
import { User, Visitor } from '../../../core/entity/user.interface';
import { AuthenticationService } from '../../../core/port/authentication.service';
import { UserService } from '../../../core/port/user.service';
import { UserStore } from '../../../core/store/user.store';
import { EmailAlreadyTakenError } from './email-already-taken.error';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserUseCase {
  readonly #authenticationService = inject(AuthenticationService);
  readonly #userService = inject(UserService);
  readonly #userStore = inject(UserStore);
  readonly #router = inject(Router);

  async execute(visitor: Visitor): Promise<void> {
    // 1. Authenticate new visitor
    const { name, email, password } = visitor;
    const registerResponse = await firstValueFrom(
      this.#authenticationService.register(email, password),
    );

    if (registerResponse instanceof EmailAlreadyTakenError) {
      throw registerResponse;
    }

    // 2. Add credentials information in webapp storage
    const {
      userId: id,
      jwtToken,
      jwtRefreshToken,
      expiresIn,
    } = registerResponse;

    localStorage.setItem('jwtToken', jwtToken);
    localStorage.setItem('jwtRefreshToken', jwtRefreshToken);
    localStorage.setItem('expiresIn', expiresIn);

    // 3. Create new user in database
    const user: User = { id, name, email };
    await firstValueFrom(this.#userService.create(user, jwtToken));

    // 4. Add user in app store
    this.#userStore.load(user);

    // 5. Redirect user to dashboard
    this.#router.navigate(['/app/dashboard']);
  }
}
