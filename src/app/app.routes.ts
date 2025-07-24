import { Routes } from '@angular/router';
import { HomePageComponent } from './visitor/home/home.page.component';
import { SignupPageComponent } from './visitor/signup/signup.page.component';
import { LoginPageComponent } from './visitor/login/login.page.component';

export const routes: Routes = [
  {
    path: 'signup',
    component: SignupPageComponent,
    title: 'Sign Up',
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title: 'Log In',
  },
  {
    path: '',
    component: HomePageComponent,
    title: 'Productivity Planner',
  },
];
