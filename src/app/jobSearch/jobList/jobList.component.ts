import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Job } from '../../job';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'job-list',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf, NgClass],
  templateUrl: './jobList.component.html',
  styleUrl: './jobList.component.scss',
})
export class JobListComponent implements OnInit {
  job_list: Job[] = [];
  jobId!: number;
  favoriteJobs: Job[] = [];

  constructor(private service: JobService) {}

  ngOnInit() {
    // Check if "favs" exists in localStorage, if not initialize it as an empty array
    const favsFromLocalStorage = localStorage.getItem('favs');
    if (favsFromLocalStorage) {
      this.favoriteJobs = JSON.parse(favsFromLocalStorage);
    } else {
      this.favoriteJobs = [];
      localStorage.setItem('favs', JSON.stringify([]));
    }
    this.getAlljob();

    JobService.favoriteData = this.favoriteJobs;
  }

  getAlljob() {
    this.service.getAllJobs().subscribe({
      next: (data: Job[]) => {
        this.job_list = data;
        const favoriteJobs = JobService.favoriteData;
        if (favoriteJobs?.length) {
          this.favoriteJobs = favoriteJobs;
        }
        if (this.favoriteJobs?.length) {
          for (let i = 0; i < this.favoriteJobs.length; i++) {
            const job = this.job_list.find(
              (item) => item.id === this.favoriteJobs[i].id
            );
            if (job !== undefined) {
              job.isfavorite = true;
            }
          }
        }
      },
      error: (error) => {
        console.error('Something Went wrong in job search list', error);
      },
    });
  }

  toggleFavorite(job: Job) {
    const index = this.favoriteJobs.findIndex(
      (favJob: Job) => favJob.id === job.id
    );
    if (index !== -1) {
      job.isfavorite = false;
      this.favoriteJobs.splice(index, 1);
    } else {
      this.favoriteJobs.push(job);
      job.isfavorite = true;
    }
    // Update localStorage with the latest favoriteJobs array
    localStorage.setItem('favs', JSON.stringify(this.favoriteJobs));
    JobService.favoriteData = this.favoriteJobs;
  }
}