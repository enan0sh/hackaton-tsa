import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flightdata-list',
  templateUrl: './flightdata-list.component.html',
  styleUrls: ['./flightdata-list.component.css']
})
export class FlightdataListComponent implements OnInit {

  constructor() { }

  flights: [Object];

  ngOnInit(): void {
    this.flights = [
      {
        name: 'Dummy',
        description: 'Some description'
      }
    ];
  }

}
