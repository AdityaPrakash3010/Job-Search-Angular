import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobSearchComponent } from './jobSearch.component';
import { JobListComponent } from './jobList/jobList.component';
import { JobViewComponent } from './jobView/jobView.component';
import { JobFavoriteComponent } from './jobFavorite/jobFavorite.component';

const routes: Routes = [
  {
    path: '',
    component: JobSearchComponent,
    children: [
      {
        path: 'job-list',
        component: JobListComponent,
      },
      {
        path: 'job-view/:id',
        component: JobViewComponent,
      },
      {
        path: 'job-favorite',
        component: JobFavoriteComponent,
      },
      {
        path: '',
        redirectTo: '/job-list',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
