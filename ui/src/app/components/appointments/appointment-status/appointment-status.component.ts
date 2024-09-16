import { Component } from '@angular/core';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-appointment-status',
  templateUrl: './appointment-status.component.html',
  styleUrl: './appointment-status.component.css'
})
export class AppointmentStatusComponent {
  totalPrice: number = 0.0;

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.updateAppointmentStatus();
  }

  updateAppointmentStatus() {
    this.appointmentService.totalPrice.subscribe(
      data => this.totalPrice = data
    );
  }
}
