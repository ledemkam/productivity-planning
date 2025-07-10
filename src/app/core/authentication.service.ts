import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.dev';
import { Observable} from 'rxjs';


interface FirebaseResponseSingUp {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
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


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  readonly #http = inject(HttpClient)

  register(email: string, password: string): Observable<FirebaseResponseSingUp> {
      const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseConfig.apiKey}`;
      const body = {
        email,
        password,
        returnSecureToken: true
      };
      return this.#http.post<FirebaseResponseSingUp>(url, body);

     }

   login(email: string, password: string): Observable<FirebaseResponseSingIn> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`;
    const body = {
      email,
      password,
      returnSecureToken: true
    };
    return this.#http.post<FirebaseResponseSingIn>(url, body);
  }

   save(email: string, userId: string, bearerToken: string): Observable<unknown> {
    const baseUrl =
    `https://firestore.googleapis.com/v1/projects/${environment.firebaseConfig.projectId}/databases/(default)/documents`
    const userFirestoreCollectionId = 'users';
    const url = `${baseUrl}/${userFirestoreCollectionId}?key=${environment.firebaseConfig.apiKey}&documentId=${userId}`;

    const body = {
      fields: {

        email: { stringValue: email },
      }
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${bearerToken}`
    })
    const options = { headers}

    return this.#http.post(url, body, options)


  }
}
