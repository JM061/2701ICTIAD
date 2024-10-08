import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'new-account',
    loadComponent: () => import('./new-account/new-account.page').then( m => m.NewAccountPage)
  },
  {
    path: 'destinations',
    loadComponent: () => import('./destinations/destinations.page').then( m => m.DestinationsPage)
  },
];
