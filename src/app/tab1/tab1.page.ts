import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../types';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  /** Create a property that will hold all the data  */
  activityList: Observable<Activity[]>;

  constructor(activityService: ActivityService) {
    setTimeout(()=>{
      this.activityList = activityService.getAllActivites();
    }, 3000); 
  }
}
