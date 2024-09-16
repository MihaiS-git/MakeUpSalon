import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';
import { AppointmentService } from '../../services/appointment.service';
import { TreatmentService } from '../../services/treatment.service';
import { DatePipe } from '@angular/common';
import { Person } from '../../common/model/person.model';
import { Appointment } from '../../common/model/appointment.model';
import { Role } from '../../common/model/role.enum';
import { User } from '../../common/model/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [DatePipe]
})
export class AccountComponent implements OnInit {
  appointment: Appointment;
  appointments: Appointment[] = [];
  appointmentsForm: FormGroup;
  appointmentsSubscription: Subscription = null;
  changePasswordForm: FormGroup;
  editPersonalDataForm: FormGroup;
  errorMessage = '';
  isLoggedIn = false;
  person: Person;
  role: Role;
  user: User;
  selectedFile: File;

  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private appointmentService: AppointmentService,
    private treatmentService: TreatmentService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.initForms();
  }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isLoggedIn = !!user;
      if (user) {
        this.user = user;
        this.role = user.role;
        const personId = user.personId;
        this.loadPersonDetails(personId).subscribe(() => {
          this.loadCurrentUserAppointments(personId);
        });
      }
    });

    this.appointmentsForm.valueChanges.subscribe(value => {

    });
  }

  private initForms(): void {
    this.changePasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/), Validators.minLength(8)]],
      confirmationPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/), Validators.minLength(8)]]
    });

    this.editPersonalDataForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      pictureUrl: ['', Validators.required]
    });

    this.appointmentsForm = this.fb.group({
      appointmentsFA: this.fb.array([])
    });
  }

  private loadPersonDetails(personId: number): Observable<any> {
    return this.accountService.getPersonById(personId).pipe(
      catchError(err => {
        console.error('Error fetching person details:', err);
        return of(null);
      }),
      tap(resData => {
        if (resData) {
          this.person = resData;
          this.editPersonalDataForm.patchValue({
            firstName: this.person.firstName,
            lastName: this.person.lastName,
            phoneNumber: this.person.phoneNumber,
            dateOfBirth: this.person.dateOfBirth,
            address: this.person.address,
            pictureUrl: this.person.pictureUrl
          });
        } else {
          console.error('Person details not found.');
        }
      })
    );
  }

  private loadCurrentUserAppointments(personId: number): void {
    this.accountService.getPersonById(personId).pipe(
      catchError(err => {
        console.error('Error fetching person details:', err);
        return of(null);
      }),
      tap(resData => {
        if (resData) {
          this.person = resData;
          console.log(resData);

          this.editPersonalDataForm.patchValue({
            firstName: this.person.firstName,
            lastName: this.person.lastName,
            phoneNumber: this.person.phoneNumber,
            dateOfBirth: this.person.dateOfBirth,
            address: this.person.address,
            pictureUrl: this.person.pictureUrl
          });

          if (this.role === 'EMPLOYEE' && this.person.employeeAppointmentIds) {
            console.log("this.person.employeeAppointmentIds: ", this.person.employeeAppointmentIds);

            this.loadAppointments(this.person.employeeAppointmentIds);
          } else if (this.role === 'CUSTOMER' && this.person.customerAppointmentIds) {
            console.log("this.person.employeeAppointmentIds: ", this.person.employeeAppointmentIds);

            this.loadAppointments(this.person.customerAppointmentIds);
          }
        } else {
          console.error('Person details not found.');
        }
      })
    ).subscribe();
  }


  private loadAppointments(appointmentIds: number[]): void {
    const appointmentRequests = appointmentIds.map(id => {
      return this.appointmentService.getAppointmentsById(id);
    });
    console.log("appointmentRequests: ", appointmentRequests);


    forkJoin(appointmentRequests).pipe(
      map(results => results.flat()),
      tap(appointments => {
        this.appointments = appointments;
        this.populateAppointments();
      }),
      catchError(err => {
        this.errorMessage = 'Error loading appointments';
        console.error('Error loading appointments:', err);
        return of([]);
      })
    ).subscribe();
  }

  private populateAppointments(): void {
    const observables = this.appointments.map(appointment => {
      console.log("treatmentId:", appointment.treatmentId);

      return forkJoin({
        appointment: of(appointment),
        treatment: this.treatmentService.getTreatmentById(appointment.treatmentId),
        customer: this.accountService.getPersonById(appointment.customerId),
        employee: this.accountService.getPersonById(appointment.employeeId)
      });
    });

    forkJoin(observables).pipe(
      tap(results => {
        const populatedAppointments = results.map(({ appointment, treatment, customer, employee }) => ({
          ...appointment,
          treatment,
          customer,
          employee
        }));
        this.setAppointmentsFormArray(populatedAppointments);
      }),
      catchError(err => {
        this.errorMessage = 'Error populating appointments';
        console.error('Error populating appointments:', err);
        return of([]);
      })
    ).subscribe();
  }

  private setAppointmentsFormArray(appointments: any[]): void {
    const appointmentFormGroups = appointments.map(appointment =>
      this.fb.group({
        appointmentId: [appointment.appointmentId || null, Validators.required],
        customerFirstName: [appointment.customer?.firstName || '', Validators.required],
        customerLastName: [appointment.customer?.lastName || '', Validators.required],
        startDateTime: [appointment.startDateTime || null, Validators.required],
        endDateTime: [appointment.endDateTime || null, Validators.required],
        dateCreated: [new Date(appointment.dateCreated) || null, Validators.required],
        approvalStatus: [appointment.approvalStatus || null, Validators.required],
        employeeFirstName: [appointment.employee?.firstName || '', Validators.required],
        employeeLastName: [appointment.employee?.lastName || '', Validators.required],
        treatmentName: [appointment.treatment?.name || ''],

        customerId: [appointment.customer?.personId || null],
        employeeId: [appointment.employee?.personId || null],
        treatmentId: [appointment.treatmentId || null, Validators.required]
      })
    );

    const appointmentFormArray = this.fb.array(appointmentFormGroups);
    this.appointmentsForm.setControl('appointmentsFA', appointmentFormArray);
  }

  onSubmitPDF(): void {
    const updatedPerson = { ...this.editPersonalDataForm.value, dateOfBirth: this.datePipe.transform(this.editPersonalDataForm.value.dateOfBirth, 'yyyy-MM-dd') };
    updatedPerson.personId = this.person.personId;

    this.accountService.updatePerson(updatedPerson.personId, updatedPerson).subscribe(
      response => {
        console.log('Person updated:', response);
        alert('Person details updated successfully.');
        this.router.navigate(['']);
      },
      error => {
        console.error('Error updating person:', error);
        alert('Error updating person.');
      }
    );
  }

  onSubmitChangePasswordForm(): void {
    const { newPassword, confirmationPassword } = this.changePasswordForm.value;

    if (newPassword !== confirmationPassword) {
      alert('New password and confirm password do not match!');
      return;
    }

    this.authService.changePasswordWithId(newPassword, confirmationPassword, this.user.userId).subscribe(
      () => {
        console.log('Password changed successfully.');
        alert('Password changed successfully.');
        this.router.navigate(['']);
      },
      error => {
        console.error('Error changing password:', error);
        alert('Error changing password.');
      }
    );
  }

  updateAppointment(index: number): void {
    const appointmentGroup = (this.appointmentsForm.get('appointmentsFA') as FormArray).at(index) as FormGroup;

    if (!appointmentGroup) {
      console.error('Error: Appointment group is undefined.');
      alert('Error updating appointment.');
      return;
    }

    const appointmentId = appointmentGroup.get('appointmentId')?.value;

    if (!appointmentId) {
      console.error('Error: Appointment ID control is undefined.');
      alert('Error updating appointment.');
      return;
    }

    const updatedAppointment: any = {
      customerId: appointmentGroup.get('customerId')?.value,
      startDateTime: this.datePipe.transform(new Date(appointmentGroup.get('startDateTime')?.value), 'yyyy-MM-dd HH:mm:ss'),
      approvalStatus: appointmentGroup.get('approvalStatus')?.value,
      employeeId: appointmentGroup.get('employeeId')?.value,
      treatmentId: appointmentGroup.get('treatmentId')?.value
    };

    this.appointmentService.updateAppointmentById(appointmentId, updatedAppointment);
  }

  deleteAppointment(index: number): void {
    const appointmentsArray = this.appointmentsForm.get('appointmentsFA') as FormArray;
    const appointmentGroup = appointmentsArray.at(index) as FormGroup;

    if (appointmentGroup) {
      const appointmentIdControl = appointmentGroup.get('appointmentId');
      if (appointmentIdControl) {
        const appointmentId = appointmentIdControl.value;
        this.appointmentService.deleteAppointmentById(appointmentId).subscribe(
          () => {
            console.log('Appointment deleted successfully.');
            alert('Appointment deleted successfully.');
            appointmentsArray.removeAt(index);
          },
          error => {
            console.error('Error deleting appointment:', error);
            alert('Error deleting appointment.');
          }
        );
      } else {
        console.error('Error: Appointment ID control is undefined.');
        alert('Error deleting appointment.');
      }
    } else {
      console.error('Error: Appointment group is undefined.');
      alert('Error deleting appointment.');
    }
  }

  isModified(index: number): boolean {
    const appointmentsArray = this.appointmentsForm.get('appointmentsFA') as FormArray;
    const appointmentGroup = appointmentsArray.at(index) as FormGroup;
    const startDateTimeControl = appointmentGroup.get('startDateTime');
    const approvalStatusControl = appointmentGroup.get('approvalStatus');

    return startDateTimeControl.dirty || startDateTimeControl.touched || approvalStatusControl.dirty || approvalStatusControl.touched;
  }
}
