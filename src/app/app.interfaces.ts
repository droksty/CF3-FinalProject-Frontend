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
    console.log("Fix this.")
  }
  return reservation;
}

export interface MenuItem {
  text: string;
  link: string;
}

export interface ReservationList {
  dataFromAPI: Reservation[];
}