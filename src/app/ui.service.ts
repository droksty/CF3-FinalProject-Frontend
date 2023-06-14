import { Injectable } from '@angular/core';
import { Alert } from './app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  alerts: Alert[] = [];

  newAlert(alert: Alert) {
    this.alerts.push(alert);
  }

  alertDismiss(index: number) {
    this.alerts.splice(index, 1);
  }
}
