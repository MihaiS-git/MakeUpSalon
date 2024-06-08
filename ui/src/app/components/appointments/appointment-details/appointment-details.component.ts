import { AuthService } from './../../../services/auth.service';
import { AccountService } from './../../../services/account.service';
import { AppointmentService } from './../../../services/appointment.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppointmentItem } from '../../../common/model/appointmentItem.model';
import { Router } from '@angular/router';
import { User } from '../../../common/model/user.model';
import { catchError, of, Subscription, tap } from 'rxjs';
import { AppointmentRequestDto } from '../../../common/dto/appointment-request-dto.model';
import { Status } from '../../../common/model/status.enum';
import { TreatmentService } from '../../../services/treatment.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css'],
  providers: [DatePipe],
})
export class AppointmentDetailsComponent implements OnInit, OnDestroy {
  appointmentItems: AppointmentItem[] = [];
  appointmentItem: AppointmentItem;
  totalPrice: number = 0.0;
  /* startDate: Date; */
  startDate: '';
  personId: number;
  employeeId: number;
  user: User;
  isLoggedIn = false;
  private authSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private accountService: AccountService,
    private appointmentService: AppointmentService,
    private treatmentService: TreatmentService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.listAppointmentDetails();
    this.authSubscription = this.authService.user.subscribe((user) => {
      this.isLoggedIn = !!user;
      if (user) {
        this.user = user;
        this.loadPersonDetails(user.personId);
      } else {
        this.clearTable();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  loadPersonDetails(personId: number) {
    this.accountService
      .getPersonById(personId)
      .pipe(
        catchError((err) => {
          console.error('Error fetching person details:', err);
          return of(null);
        }),
        tap((resData) => {
          if (resData) {
            this.personId = resData.personId;
          } else {
            console.error('Person details not found.');
          }
        })
      )
      .subscribe();
  }

  listAppointmentDetails() {
    this.appointmentItems = this.appointmentService.appointmentItems;
    this.appointmentItem = this.appointmentItems[0];
    this.appointmentService.totalPrice.subscribe(
      (data) => (this.totalPrice = data)
    );
    this.appointmentService.computeTotals();
  }

  remove(theAppointmentItem: AppointmentItem) {
    this.appointmentService.remove(theAppointmentItem);
  }

  book() {
    this.treatmentService
      .getEmployeesByTreatmentId(this.appointmentItem.id)
      .subscribe(
        (res) => {
          this.employeeId = res[0].personId;

          const appointmentRequestDto: AppointmentRequestDto = {
            customerId: this.user.personId,
            /* startDateTime: this.datePipe.transform(new date(this.startDate), 'yyyy-MM-dd HH:mm:ss'), */
            startDateTime: this.startDate,
            approvalStatus: Status.PENDING,
            employeeId: this.employeeId,
            treatmentId: this.appointmentItem.id,
          };

          this.appointmentService
            .addAppointment(appointmentRequestDto)
            .subscribe({
              next: (res) => {
                if (res) {
                  console.log('Appointment created successfully');
                  alert('Appointment created successfully.');
                }
              },
              error: (err) => {
                console.log('Failed to create Appointment', err);
                alert(
                  'Not able to create an appointment with the selected data.'
                );
              },
            });
          this.clearTable();
          this.router.navigate(['']);
        },
        (error) => {
          console.error('Error creating new appointment:', error);
          alert('Error creating new appointment.');
        }
      );
  }

  clearTable() {
    sessionStorage.removeItem('appointmentItems');
    this.startDate = null;
    this.totalPrice = 0.0;
    this.appointmentItems = [];
    this.appointmentItem = null;
    this.appointmentService.appointmentItems = [];
    this.appointmentService.clearItems();
    console.log('Table cleared');
  }

  close() {
    this.router.navigate(['']);
  }
}
