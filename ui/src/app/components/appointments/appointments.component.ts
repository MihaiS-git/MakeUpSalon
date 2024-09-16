import { Component, Input, OnInit } from '@angular/core';
import { Treatment } from '../../common/model/treatment.model';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent implements OnInit {
newAppointmentForm: any;
onSubmitNAF() {
throw new Error('Method not implemented.');
}
  @Input() treatment: Treatment;

  ngOnInit(): void {

  }


}
