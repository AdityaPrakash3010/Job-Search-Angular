import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Job, JobData } from '../job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private url = './jobs';
  private static _favoriteData: Job[];

  constructor(private http: HttpClient) {}

  public static get favoriteData(): Job[] {
    return JobService._favoriteData;
  }

  public static set favoriteData(data: Job[]) {
    JobService._favoriteData = data;
  }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.url);
  }

  getJobById(id: number): Observable<JobData> {
    return this.http.get<JobData>(`${this.url}/${id}`);
  }
}
