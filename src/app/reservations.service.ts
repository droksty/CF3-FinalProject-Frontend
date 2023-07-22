import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation, ReservationList } from './app.interfaces';


const RESERVATIONS_API = 'https://cf3-final-project.onrender.com/api/reservations'

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) {}


  insertReservation(reservation: Reservation) {
    return this.http.post<Reservation>(`${RESERVATIONS_API}/`, reservation);
  }

  updateReservation(reservation: Reservation) {
    return this.http.put<Reservation>(`${RESERVATIONS_API}/`, reservation);
  }

  deleteReservation(id: string) {
    return this.http.delete(`${RESERVATIONS_API}/${id}`, {responseType: "text"})
  }

  findReservation(reference: string) {
    return this.http.get<Reservation>(`${RESERVATIONS_API}/${reference}`)
  }

  findAll() {
    return this.http.get<ReservationList>(`${RESERVATIONS_API}/?guestName=`)
  }

  findAllByGuestName(guestName: string) {
    return this.http.get<ReservationList>(`${RESERVATIONS_API}/?guestName=${guestName}`)
  }

  findAllByDatesBetween(checkInFrom: string, checkInTo: string) {
    return this.http.get<ReservationList>(`${RESERVATIONS_API}/filter/datesBetween?dateFrom=${checkInFrom}&dateTo=${checkInTo}`)
  }

  findAllByCheckIn(checkIn: string) {
    return this.http.get<ReservationList>(`${RESERVATIONS_API}/filter/checkIn?checkIn=${checkIn}`)
  }

  findAllByCheckOut(checkOut: string) {
    return this.http.get<ReservationList>(`${RESERVATIONS_API}/filter/checkOut?checkOut=${checkOut}`)
  }

  findAllByRoomType(roomType: string) {
    return this.http.get<ReservationList>(`${RESERVATIONS_API}/filter/roomType?roomType=${roomType}`)
  }
}
