import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Activity } from './types';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private _httpClient: HttpClient) {}

  /* Create a method to get one activity*/
  getActivity(activityID: string): Observable<Activity>{
    return this._httpClient.get<Activity>(API + "/id/" + activityID);
  }

  /* Create a method to get all activity*/
  getAllActivites(): Observable<Activity[]>{
    return this._httpClient.get<Activity[]>(API);
  }
}

/* JSON API */
const API = "https://orangevalleycaa.org/api/videos";
