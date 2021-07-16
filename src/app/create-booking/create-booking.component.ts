import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  booking: Booking = {
    id: 100,
    name: "Your Name",
    roomNumber: 100,
    startDate: new Date(),
    endDate: new Date()
  }

  ngOnInit(): void {   
    if(this.router.url != '/create'){
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      var bookingById = Bookings.find(x => x.id == id)!;
      this.booking = bookingById;
    }    
  }

  save(): void {
    Bookings.push(this.booking);
    this.router.navigate(['bookings']);
  }

  dateChanged(event: Event, isStart: boolean){
    var val = (event.target as HTMLInputElement).value;

    if(isStart){
      this.booking.startDate = new Date(val);
    } else {
      this.booking.endDate = new Date(val);
    }
  }
}
