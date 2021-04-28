import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightdataListComponent } from './flightdata-list/flightdata-list.component'

const routes: Routes = [
  {
    path: 'flightdata-list',
    component: FlightdataListComponent
  },
  {
    path: '',
    redirectTo: '/flightdata-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
