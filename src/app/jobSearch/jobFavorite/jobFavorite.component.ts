import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Job } from '../../job';
import { RouterLink } from '@angular/router';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'job-favorite',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './jobFavorite.component.html',
  styleUrl: './jobFavorite.component.scss',
})
export class JobFavoriteComponent implements OnInit {
  favoriteJobs: Job[] = [];

  constructor() {}

  ngOnInit() {
    
    // Check if "favs" exists in localStorage, if not initialize it as an empty array
    const favsFromLocalStorage = localStorage.getItem('favs');
    if (favsFromLocalStorage) {
      this.favoriteJobs = JSON.parse(favsFromLocalStorage);
    } else {
      this.favoriteJobs = [];
      localStorage.setItem('favs', JSON.stringify([]));
    }

    JobService.favoriteData = this.favoriteJobs;
    this.favoriteJobs = JobService.favoriteData;
  }
}
