import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test',
    loadComponent: () => import('./pages/test/test.component').then(c => c.TestComponent)
  },
  {
    path: 'post',
    loadComponent: () => import('./pages/post/post.component').then(c => c.PostComponent)
  }
];
