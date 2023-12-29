import { Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', loadChildren:()=> import('./feature/home/home.routes').then(m=>m.HomeRoutes)},
    {path: 'login', component: LoginComponent}
];
