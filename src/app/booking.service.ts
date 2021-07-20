import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient:HttpClient) { }

  bookingsUrl :string = "/api/bookings";

  getBookings() : Observable<Booking[]>{
    var response = this.httpClient.get<Booking[]>(this.bookingsUrl);
    return response;
  }

  deleteBooking(booking: Booking) : Observable<Booking> {
    var response = this.httpClient.delete<Booking>(this.bookingsUrl + "/" + booking.id);
    return response;
  }

  getBookingById(id: number) : Booking {
    var bookingById = Bookings.find(x => x.id == id)!;
    return bookingById;
  }

  addBooking(booking: Booking) : void {
    Bookings.push(booking);
  }

  updateBooking(booking: Booking) : void {
    var currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;
  }
}
