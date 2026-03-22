import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'accueil',
        loadComponent: () => import("./accueil.component/accueil.component").then(m => m.AccueilComponent)
    },
    {
        path:'',
        redirectTo: 'accueil',
        pathMatch: 'full'
    }
];
