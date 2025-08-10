import { Routes } from '@angular/router';
import { HomePageComponent } from './visitor/home/home.page.component';
import { SignupPageComponent } from './visitor/signup/signup.page.component';
import { LoginPageComponent } from './visitor/login/login.page.component';
import { DashboardPageComponent } from './menbership/dashboard/dashboard.page.component';

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
    path: 'app/dashboard',
    component: DashboardPageComponent,
    title: 'Dashboard',
  },
  {
    path: '',
    component: HomePageComponent,
    title: 'Productivity Planner',
  },
];
