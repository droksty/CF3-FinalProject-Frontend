export interface Reservation {
  id: string;
  reference: string;
  reservationDate: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  totalPrice: number;
}

export function datesToString(reservation: Reservation) {
  reservation.reservationDate = reservation.reservationDate.toString();
  reservation.checkIn = reservation.checkIn.toString();
  reservation.checkOut = reservation.checkOut.toString();
  if (reservation.checkOut < reservation.checkIn) {
    console.log("CheckOut cannot be BEFORE CheckIn. Fix this.")
  }
  return reservation;
}

export interface ReservationList {
  dataFromAPI: Reservation[];
}

export interface MenuItem {
  text: string;
  link: string;
}

export interface Alert {
  type?: 'primary' | 'info' | 'success' | 'danger' | 'warning';
  heading?: string;
  text: string;
}

export interface APIError {
  message: string
}