import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  wtask = {
    task:'Work',
    data:'10% done'
  }
  dtask = {
    task:'Deployment',
    data:'10% done'
  }
  mtask = {
    task:'Monitor',
    data:'10% done'
  }
  framework='SAP FRAMEWORK';
  constructor() { }

  ngOnInit(): void {
  }

}
