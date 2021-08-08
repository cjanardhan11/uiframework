import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { HttpBaseService } from '/http-base.service';

@Injectable({
  providedIn: 'root'
})
//extends HttpBaseService for error handling and base uri settings
export class FrameworkService  {

  constructor() { }
  getTaskDetails(taskID): Observable<any> {
    //API to implement and get task details..
    return null
  }
  getAllTasks(): Observable<any> {
    //API to implement and get all tasks..
    return null
  }
  
}
