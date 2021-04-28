import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightdataListComponent } from './flightdata-list.component';

describe('FlightdataListComponent', () => {
  let component: FlightdataListComponent;
  let fixture: ComponentFixture<FlightdataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightdataListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightdataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
