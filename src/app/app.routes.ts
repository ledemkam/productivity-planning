import { Routes } from '@angular/router';
import { ShellLayoutComponent } from './menbership/core/shell/shell.layout.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./visitor/home/home.page.component').then(
        (c) => c.HomePageComponent,
      ),
    title: 'Productivity Planner',
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./visitor/signup/signup.page.component').then(
        (c) => c.SignupPageComponent,
      ),
    title: 'Sign Up',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./visitor/login/login.page.component').then(
        (c) => c.LoginPageComponent,
      ),
    title: 'Log In',
  },
  {
    path: 'app',
    component: ShellLayoutComponent,
    loadChildren: () =>
      import('./menbership/menbership.routes').then(
        (routes) => routes.membershipRoutes,
      ),
  },
];
