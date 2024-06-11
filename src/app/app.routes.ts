import { Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { authGuard } from './auth-guard/auth.guard';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent,  canActivate: [authGuard]},

    //no existe la ruta
    { path: '**', redirectTo: '', pathMatch: 'full' }
];