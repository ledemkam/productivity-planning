import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { Observable } from 'rxjs';



/**
 *
 * @see https://firebase.google.com/docs/reference/rest/auth?hl=de
 */


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  
  readonly #http = inject(HttpClient)
  
  register(email: string, password: string): Observable<unknown> {
      const apiKey = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`;
      const body = {
        email,
        password,
        returnSecureToken: true
      };
      return this.#http.post(apiKey, body);

     }
}
