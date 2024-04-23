import { Component, OnInit } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JobData } from '../../job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'job-view',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './jobView.component.html',
  styleUrl: './jobView.component.scss',
})
export class JobViewComponent implements OnInit {
  jobData?: JobData;

  constructor(
    private service: JobService,
    private _location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let jobId = this.route.snapshot.paramMap.get('id');
    if (jobId) {
      this.getJobById(parseInt(jobId));
    }
  }

  getJobById(jobId: number) {
    this.service.getJobById(jobId).subscribe({
      next: (data: JobData) => {
        this.jobData = data;
      },
      error: (error) => {
        console.log('something went wrong while fething data', error);
      },
    });
  }

  goback() {
    this._location.back();
  }
}
