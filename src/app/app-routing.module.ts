import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';

const routes: Routes = [
  {
    path:'bookings', component:BookingsComponent
  },
  {
    path:'createBooking', component:CreateBookingComponent
  },
  {
    path:'', redirectTo:'bookings', pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
