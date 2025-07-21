import { Routes } from '@angular/router';
import { HomePageComponent } from './visitor/home/home.page.component';
import { SignupPageComponent } from './visitor/signup/signup.page.component';

export const routes: Routes = [
  {
    path: 'signup',
    component: SignupPageComponent,
    title: 'Sign Up',
  },
  {
    path: '',
    component: HomePageComponent,
    title: 'Productivity Planner',
  },
];
