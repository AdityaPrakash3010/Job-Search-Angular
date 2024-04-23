import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './jobSearch.routing.module';
import { JobSearchComponent } from './jobSearch.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    JobSearchComponent,
    HttpClientModule,
  ],
})
export class JobSearchModule {}
