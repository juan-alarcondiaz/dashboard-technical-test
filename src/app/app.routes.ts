import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () => import('./core/layouts/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard').then(m => m.Dashboard)
      }
    ]
  },
  {
    path: '',
    loadComponent: () => import('./core/layouts/minimal-layout/minimal-layout').then(m => m.MinimalLayout),
    children: [
      { path: '**', loadComponent: () => import('./not-found/not-found').then(m => m.NotFound) },
    ]
  }
];
