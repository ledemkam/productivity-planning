import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'signup',
    loadComponent: () => import('./visitor/signup/signup.page.component').then(c => c.SignupPageComponent),
    title: 'Sign Up',
  },
  {
    path: 'login',
    loadComponent: () => import('./visitor/login/login.page.component').then(c => c.LoginPageComponent),
    title: 'Log In',
  },
   {
    path: 'app/dashboard',
    loadComponent: () => import('./menbership/dashboard/dashboard.page.component').then(c => c.DashboardPageComponent),
    title: 'Dashboard',
  },
   {
    path: 'app/planning',
    loadComponent: () => import('./menbership/planning/planning.page.component').then(c => c.PlanningPageComponent),
    title: 'Planning',
  },
   {
    path: 'app/profil',
    loadComponent: () => import('./menbership/profil/profil.page.component').then(c => c.ProfilPageComponent),
    title: 'Profil',
  },
   {
    path: 'app/settings',
    loadComponent: () => import('./menbership/settings/settings.page.component').then(c => c.SettingsPageComponent),
    title: 'Settings',
  },
   {
    path: 'app/workday',
    loadComponent: () => import('./menbership/workday/workday.page.component').then(c => c.WorkdayPageComponent),
    title: 'Workday',
  },
  {
    path: '',
    loadComponent: () => import('./visitor/home/home.page.component').then(c => c.HomePageComponent),
    title: 'Productivity Planner',
  },
];
