import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'job-search',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './jobSearch.component.html',
  styleUrl: './jobSearch.component.scss',
})
export class JobSearchComponent {}
