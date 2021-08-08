import { Component, OnInit } from '@angular/core';
import { FrameworkService } from '../service/framework.service';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.scss']
})
export class FrameworkComponent implements OnInit {
  title = 'sapuiframework';
  //bind data from API and set respective variable to true to show the task details and progress
  task1 = false;
  task2 = false;
  task3 = false;
  task4 = false;
  
  constructor(public frameworkService: FrameworkService) { }

  ngOnInit(): void {
    //Call API to get data for all tasks.
    this.frameworkService.getAllTasks().subscribe((res) => {
      
    });
  }

  //TODO test cases..
  showDetails(task) {
    switch (task) {
      case 1:
        //API call to get task details
        this.frameworkService.getTaskDetails(task).subscribe((res) => {
          // this.frameworkService.getTaskDetails(task);
          this.task1 = true;
        });        
        break;
      case 2:
        this.frameworkService.getTaskDetails(task).subscribe((res) => {
          this.task2 = true;
        });
        break;
      case 3:
        this.frameworkService.getTaskDetails(task).subscribe((res) => {
          this.task3 = true;
        });
        break;
      case 4:
        this.frameworkService.getTaskDetails(task).subscribe((res) => {
          this.task4 = true;
        });
        break;
    }
  }
}
