import { Component, Input, OnInit } from '@angular/core';
import { Treatment } from '../../../common/model/treatment.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentItem } from '../../../common/model/appointmentItem.model';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-treatment-detail',
  templateUrl: './treatment-detail.component.html',
  styleUrl: './treatment-detail.component.css'
})
export class TreatmentDetailComponent implements OnInit {
  @Input() treatment: Treatment;
  @Input() index: number;

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

  }

  select() {
    const theAppointmentItem = new AppointmentItem(this.treatment);
    this.appointmentService.addToAppointment(theAppointmentItem);
    this.router.navigate(['/appointments']);
  }

}
