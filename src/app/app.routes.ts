import { Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { DashboardComponent } from './views/admin/dashboard/dashboard.component';
import { authGuard } from './auth-guard/auth.guard';
import { AdminComponent } from './layouts/admin/admin.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},

    {
        path: "admin",
        component: AdminComponent,
        children: [
            { path: "dashboard", component: DashboardComponent },
            { path: "", redirectTo: "dashboard", pathMatch: "full" },
        ],
        canActivate: [authGuard]
    },

    //no existe la ruta
    { path: '**', redirectTo: '', pathMatch: 'full' }
];