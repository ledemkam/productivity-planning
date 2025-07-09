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
  ).subscribe({
    next: (response) => {
      console.log('Connexion réussie:', response);
    },
    error: (error) => {
      console.error('Erreur de connexion:', error);
    }
  });
}
  }


