import { Component, OnInit } from '@angular/core';
import { faLightbulb, faDiceFour, faRecycle, faChartBar, faPlane, faClipboardList, faBezierCurve, faFutbol } from '@fortawesome/free-solid-svg-icons';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  taskdetails = [];
  mainTitle = '' ;
  faCoffee = faLightbulb;
  faLightbulb = faLightbulb;
  faDiceFour = faDiceFour;
  faRecycle = faRecycle;
  faChartBar = faChartBar;
  faPlane = faPlane;
  faClipboardList = faClipboardList;
  faBezierCurve = faBezierCurve;
  faFutbol = faFutbol;
  

  constructor(private _details:DetailsService) { 
      
  }

  ngOnInit() {
  this._details.getdetais().subscribe(data => {
    this.taskdetails = JSON.parse(JSON.stringify(data));
  });
  
  this.mainTitle = this._details.title;
  }

}
 