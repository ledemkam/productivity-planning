import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationServiceFirebase } from './authentication-firebase.service';
import { EmailAlreadyTakenError } from '@app/visitor/signup/email-already-taken.error';


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


}
