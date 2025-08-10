import { Routes } from '@angular/router';
import { ShellLayoutComponent } from './menbership/core/shell/shell.layout.component';


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
    path: 'app',
    component: ShellLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./menbership/dashboard/dashboard.page.component').then(c => c.DashboardPageComponent),
        title: 'Dashboard',
      },
      {
        path: 'planning',
        loadComponent: () => import('./menbership/planning/planning.page.component').then(c => c.PlanningPageComponent),
        title: 'Planning',
      },
      {
        path: 'profil',
        loadComponent: () => import('./menbership/profil/profil.page.component').then(c => c.ProfilPageComponent),
        title: 'Profil',
      },
      {
        path: 'settings',
        loadComponent: () => import('./menbership/settings/settings.page.component').then(c => c.SettingsPageComponent),
        title: 'Settings',
      },
      {
        path: 'workday',
        loadComponent: () => import('./menbership/workday/workday.page.component').then(c => c.WorkdayPageComponent),
        title: 'Workday',
      },
  {
    path: '',
    loadComponent: () => import('./visitor/home/home.page.component').then(c => c.HomePageComponent),
    title: 'Productivity Planner',
  },
    ]
  },

];
