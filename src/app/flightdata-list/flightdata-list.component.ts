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
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Time";
  showYAxisLabel = true;
  yAxisLabel = "Flights";
  timeline: boolean = true;
  legend: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;

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
  legendTitle: string = 'Days';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

 onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
