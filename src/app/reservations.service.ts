import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation, ReservationList } from './app.interfaces';


const RESERVATIONS_API = 'http://localhost:8080/api/reservations'

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
}
