import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, catchError, throwError, Observable } from 'rxjs';
import { AppointmentItem } from '../common/model/appointmentItem.model';
import { HttpClient } from '@angular/common/http';
import { AppointmentRequestDto } from '../common/dto/appointment-request-dto.model';
import { Appointment } from '../common/model/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseUrl = 'http://localhost:8080/api/appointments';
  appointmentItems: AppointmentItem[] = [];
  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  storage: Storage = sessionStorage;

  constructor(private http: HttpClient) {
    let data = JSON.parse(this.storage.getItem('appointmentItems')!);
    if (data != null) {
      this.appointmentItems = data;
    }
    this.computeTotals();
  }

  persistAppointmentItems() {
    this.storage.setItem('appointmentItems', JSON.stringify(this.appointmentItems));
  }

  addToAppointment(theAppointmentItem: AppointmentItem) {

    if (this.appointmentItems.length > 0) {
      this.appointmentItems = [];
    }

    this.appointmentItems.push(theAppointmentItem);

    this.computeTotals();
  }

  computeTotals() {
    let totalPriceValue: number = 0;
    for (let currentAppointmentItem of this.appointmentItems) {
      totalPriceValue += currentAppointmentItem.price;
    }
    this.totalPrice.next(totalPriceValue);
    this.logAppointmentData(totalPriceValue);
    this.persistAppointmentItems();
  }

  logAppointmentData(totalPriceValue: number) {
    console.log('Contents of the appointment:');
    for (let tempAppointmentItem of this.appointmentItems) {
      const subTotalPrice = tempAppointmentItem.price;
      console.log(
        `name: ${tempAppointmentItem.name}, price=${tempAppointmentItem.price}, subTotalPrice=${subTotalPrice}`
      );
    }

    console.log(
      `totalPrice: ${totalPriceValue.toFixed(2)}`);
    console.log('----');
  }

  remove(theAppointmentItem: AppointmentItem) {
    const itemIndex = this.appointmentItems.findIndex(
      (tempCartItem) => tempCartItem.id === theAppointmentItem.id
    );
    if (itemIndex > -1) {
      this.appointmentItems.splice(itemIndex, 1);
      this.computeTotals();
    }
  }

  addAppointment(appointmentRequestDto: AppointmentRequestDto) {
    return this.http.post<AppointmentRequestDto>(`${this.baseUrl}`, appointmentRequestDto);
  }

  updateAppointmentById(id: number, updatedAppointment: any) {
    this.http.put<any>(`${this.baseUrl}/${id}`, updatedAppointment)
      .subscribe(
        response => {
          console.log('Update appointment response:', response);
          alert("Appointment updated successfully!")
        },
        error => {
          console.error('Error updating appointment:', error);
          alert("Appointment was not updated!")
        }
      );
  }

  deleteAppointmentById(id: number): Observable<void> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getAppointmentsById(id: number): any {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  clearItems() {
    this.appointmentItems = [];
    this.totalPrice.next(0);
    sessionStorage.removeItem('appointmentItems');
  }
}
