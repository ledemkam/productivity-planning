import { inject, Injectable } from '@angular/core';
import { AuthenticationService } from '@app/core/authentication.service';
import { User, Visitor } from '@app/core/entity/user.interface';
import { UserService } from '@app/core/port/user.service';
import { UserStore } from '@app/core/store/user.store';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterUserUseCaseService {
  readonly #authenticationService = inject(AuthenticationService);
  readonly #userService = inject(UserService);
  readonly #userStore = inject(UserStore);
  readonly #router = inject(Router);

  async execute(visitor: Visitor): Promise<void> {
    // 1. authenticate the new user
    const { name, email, password } = visitor;
    const registerResponse = await firstValueFrom(
      this.#authenticationService.register(email, password),
    );

    // Check if the registration was successful
    if (registerResponse instanceof Error) {
      throw registerResponse; // Return the error if registration failed
    }

    //2. add the JWT token and email to local storage(in session storage)
    const {
      userId: id,
      jwtToken,
      jwtRefreshToken,
      expiresIn,
    } = registerResponse;

    localStorage.setItem('jwtToken', jwtToken);
    localStorage.setItem('jwtRefreshToken', jwtRefreshToken);
    localStorage.setItem('expiresIn', expiresIn);

    //3.Create a user object with the necessary details in the database
    const user: User = {
      id,
      name,
      email,
    };
    //4. Create the user in the system
    await firstValueFrom(this.#userService.create(user, jwtToken));

    //5. Add the new user in app store
    this.#userStore.load(user);

    // 6.  redirect to home page
    this.#router.navigate(['/']);
  }
}
