import { Component, OnInit, NgModule } from '@angular/core';
import { TsaAPIService } from '../services/tsa-api.service';
import { NgxChartsModule } from '@swimlane/ngx-charts'


@Component({
  selector: 'app-flightdata-list',
  templateUrl: './flightdata-list.component.html',
  styleUrls: ['./flightdata-list.component.css']
})
export class FlightdataListComponent implements OnInit {
  
  constructor(
    private tsaAPIService: TsaAPIService
    ) { 
    }
    
  flights: any;

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Time";
  showYAxisLabel = true;
  yAxisLabel = "Flights";

  // colorScheme = {
  //   domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"]
  // };

  ngOnInit(): void {
    // this.flights = [];

    this.tsaAPIService.getTSACheckpoint().subscribe(
      res => {
        console.log(res)
        this.flights = res
      }
    )
  }

}
