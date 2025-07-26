import { inject, Injectable } from '@angular/core';
import { AuthenticationService } from '@app/core/authentication.service';
import { User, Visitor } from '@app/core/entity/user.interface';
import { UserService } from '@app/core/port/user.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserUseCaseService {

  readonly #authenticationService = inject(AuthenticationService);
  readonly #userService = inject(UserService)

  // 1. authenticate the new user
  async execute(visitor: Visitor): Promise<User|Error> {
    const name = visitor.name;
    const email = visitor.email;
    const password = visitor.password;

   const authResponse = await firstValueFrom(this.#authenticationService.register( email, password ));

  // add the JWT token and email to local storage(in session storage)
    const jwtToken = authResponse.jwtToken;
    const id = authResponse.userId;

    localStorage.setItem('jwtToken', jwtToken);
    localStorage.setItem('email', email);

    // Create a user object with the necessary details in the database
    const user: User = {
      id,
      name,
      email

    };
    // Create the user in the system
    await firstValueFrom(this.#userService.create(user,jwtToken));

    // Return the created user
    return user;

  }
}
