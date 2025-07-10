import { switchMap } from 'rxjs';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationService } from './core/authentication.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


 readonly #AuthentificationService = inject(AuthenticationService)

onLogin(){
   const email = 'ericmuster@gmail.com'
   const password = 'azerty'

  console.log('Tentative de connexion...');

  this.#AuthentificationService.login(
   email,
   password
  ).pipe(
    switchMap((response) => {
       const {email, localId, idToken} = response;
    return this.#AuthentificationService.save(email, localId, idToken)
    })
  ).subscribe(response => console.log(response))
}
  }


