import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EmailAlreadyTakenError } from '@app/visitor/signup/email-already-taken.error';
import { environment } from '@env/environment';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import {
    AuthenticationService,
    LoginResponse,
    RegisterResponse,
} from '../port/authentication.service';

interface FirebaseResponseSingUp {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

interface FirebaseResponseSingIn {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
}

/**
 *
 * @see https://firebase.google.com/docs/reference/rest/auth?hl=de
 */

@Injectable()
export class AuthenticationServiceFirebase implements AuthenticationService {
  readonly #http = inject(HttpClient);

  register(email: string, password: string): Observable<RegisterResponse> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`;
    const body = {
      email,
      password,
      returnSecureToken: true,
    };
    return this.#http.post<FirebaseResponseSingUp>(url, body).pipe(
      map((response) => ({
        jwtToken: response.idToken,
        jwtRefreshToken: response.refreshToken,
        expiresIn: response.expiresIn,
        userId: response.localId,
      })),
      catchError((error) => {
        if (error.error.error.message === 'EMAIL_EXISTS') {
          return of(new EmailAlreadyTakenError(email));
        }

        return throwError(() => error);
      }),
    );
  }

  login(email: string, password: string): Observable<LoginResponse> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`;
    const body = {
      email,
      password,
      returnSecureToken: true,
    };
    return this.#http.post<FirebaseResponseSingIn>(url, body).pipe(
      map((response) => ({
        jwtToken: response.idToken,
        jwtRefreshToken: response.refreshToken,
        expiresIn: response.expiresIn,
        UserId: response.localId,
        isRegistered: response.registered,
      })),
    );
  }
}
