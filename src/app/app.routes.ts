import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./modules/home/home.module').then((m)=> m.HomeModule) },
    { path: 'home', loadComponent: () => import('./modules/home/home.module').then((m)=> m.HomeModule) }
];
