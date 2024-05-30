import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'category/:name',
    loadComponent: () => import('./pages/category/category.component').then((m) => m.CategoryComponent),
  },
];
