import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

     // eslint-disable-next-line no-unused-private-class-members
     readonly #http = inject(HttpClient)
}
