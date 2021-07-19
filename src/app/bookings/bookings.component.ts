import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})

export class BookingsComponent implements OnInit {

  constructor() { }

  bookings = Bookings;

  ngOnInit(): void {
  }

  deleteBooking(booking: Booking) : void {
    var index = Bookings.indexOf(booking);
    Bookings.splice(index,1);
  }

}
