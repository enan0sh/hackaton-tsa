import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flightdata',
  templateUrl: './flightdata.component.html',
  styleUrls: ['./flightdata.component.css']
})
export class FlightdataComponent implements OnInit {

  @Input() flight: any;

  //TODO service
  constructor() { 
  }


  ngOnInit(): void {

  }

}
