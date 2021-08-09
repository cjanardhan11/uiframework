import { Component, OnInit } from '@angular/core';
import { faSearch, faHashtag, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  faSearch = faSearch;
  faHashtag = faHashtag;
  faClock = faClock;
  faCheckCircle = faCheckCircle;

  constructor() { }

  ngOnInit(): void {
  }

}

