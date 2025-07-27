import { Injectable } from '@angular/core';
import { EmailAlreadyTakenError } from '@app/visitor/signup/email-already-taken.error';
import { Observable } from 'rxjs';
import { AuthenticationServiceFirebase } from '../adapter/authentication-firebase.service';

export type RegisterResponse = RegisterPayload | EmailAlreadyTakenError;
export interface RegisterPayload {
  jwtToken: string;
  jwtRefreshToken: string;
  expiresIn: string;
  userId: string;
}

export interface LoginResponse {
  jwtToken: string;
  jwtRefreshToken: string;
  expiresIn: string;
  UserId: string;
  isRegistered: boolean;
}

@Injectable({
  providedIn: 'root',
  useClass: AuthenticationServiceFirebase,
})
export abstract class AuthenticationService {
  abstract register(
    email: string,
    password: string,
  ): Observable<RegisterResponse>;

  abstract login(email: string, password: string): Observable<LoginResponse>;

   /**
 * Retrieves a new JWT token using the provided refresh token.
 *
 * @param refreshToken - The refresh token used to obtain a new JWT.
 * @returns An Observable that emits the new JWT token as a string.
 */
  abstract refreshToken(refreshToken: string): Observable<{ jwtToken: string, userId: string }>;
}
