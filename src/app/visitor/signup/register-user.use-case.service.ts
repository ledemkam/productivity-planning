import { inject, Injectable } from '@angular/core';
import { AuthenticationService } from '@app/core/authentication.service';
import { User, Visitor } from '@app/core/entity/user.interface';
import { UserService } from '@app/core/port/user.service';
import { UserStore } from '@app/core/store/user.store';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserUseCaseService {

  readonly #authenticationService = inject(AuthenticationService);
  readonly #userService = inject(UserService)
  readonly #userStore = inject(UserStore);

  // 1. authenticate the new user
  async execute(visitor: Visitor): Promise<User|Error> {
    const name = visitor.name;
    const email = visitor.email;
    const password = visitor.password;

   const authResponse = await firstValueFrom(this.#authenticationService.register( email, password ));

  //2. add the JWT token and email to local storage(in session storage)
    const jwtToken = authResponse.jwtToken;
    const id = authResponse.userId;

    localStorage.setItem('jwtToken', jwtToken);
    localStorage.setItem('email', email);

    //3.Create a user object with the necessary details in the database
    const user: User = {
      id,
      name,
      email

    };
    //4. Create the user in the system
    await firstValueFrom(this.#userService.create(user,jwtToken));

    //5. Add the new user in app store
    this.#userStore.register(user);

    // Return the created user
    return user;

  }
}
