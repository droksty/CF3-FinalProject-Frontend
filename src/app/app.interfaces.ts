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