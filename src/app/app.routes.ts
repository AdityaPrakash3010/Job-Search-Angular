import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./jobSearch/jobSearch.module').then((m) => m.JobSearchModule),
  },
];
