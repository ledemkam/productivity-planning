import { Routes } from '@angular/router';
import { HomePageComponent } from './visitor/home/home.page.component';
import { SignupPageComponent } from './visitor/signup/signup.page.component';
import { LoginPageComponent } from './visitor/login/login.page.component';
import { DashboardPageComponent } from './menbership/dashboard/dashboard.page.component';
import { PlanningPageComponent } from './menbership/planning/planning.page.component';
import { SettingsPageComponent } from './menbership/settings/settings.page.component';
import { ProfilPageComponent } from './menbership/profil/profil.page.component';
import { WorkdayPageComponent } from './menbership/workday/workday.page.component';

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
    path: 'app/planning',
    component: PlanningPageComponent,
    title: 'Planning',
  },
   {
    path: 'app/profil',
    component: ProfilPageComponent,
    title: 'Profil',
  },
   {
    path: 'app/settings',
    component: SettingsPageComponent,
    title: 'Settings',
  },
   {
    path: 'app/workday',
    component: WorkdayPageComponent,
    title: 'Workday',
  },
  {
    path: '',
    component: HomePageComponent,
    title: 'Productivity Planner',
  },
];
