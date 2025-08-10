import { Routes } from "@angular/router";
import { DashboardPageComponent } from "./dashboard/dashboard.page.component";
import { PlanningPageComponent } from "./planning/planning.page.component";
import { WorkdayPageComponent } from "./workday/workday.page.component";
import { ProfilPageComponent } from "./profil/profil.page.component";
import { SettingsPageComponent } from "./settings/settings.page.component";



export const membershipRoutes: Routes = [
	{
		path: 'dashboard',
		title: 'Dashboard',
		component: DashboardPageComponent,
	},
	{
		path: 'planning',
		title: 'Planning',
		component: PlanningPageComponent,
	},
	{
		path: 'workday',
		title: 'Workday',
		component: WorkdayPageComponent,
	},
	{
		path: 'profil',
		title: 'Profile',
		component: ProfilPageComponent,
	},
	{
		path: 'settings',
		title: 'Settings',
		component: SettingsPageComponent,
	},
]
