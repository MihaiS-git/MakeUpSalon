import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { RecoverComponent } from './components/recover/recover.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { ProfessionalsComponent } from './components/professionals/professionals.component';
import { AdminComponent } from './components/admin/admin.component';
import { AccountService } from './services/account.service';
import { TreatmentDetailComponent } from './components/treatments/treatment-detail/treatment-detail.component';
import { TreatmentListComponent } from './components/treatments/treatment-list/treatment-list.component';
import { AppointmentDetailsComponent } from './components/appointments/appointment-details/appointment-details.component';
import { AppointmentStatusComponent } from './components/appointments/appointment-status/appointment-status.component';
import { AppointmentCardComponent } from './components/appointments/appointment-card/appointment-card.component';
import { ProfessionalsDetailComponent } from './components/professionals/professionals-detail/professionals-detail.component';
import { ProfessionalsListComponent } from './components/professionals/professionals-list/professionals-list.component';
import { AppointmentService } from './services/appointment.service';
import { ProfessionalsService } from './services/professionals.service';
import { TreatmentService } from './services/treatment.service';
import { EmployeeTreatmentsComponent } from './components/professionals/employee-treatments/employee-treatments.component';
import { ResetPasswordComponent } from './components/recover/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RecoverComponent,
    RegisterComponent,
    AccountComponent,
    TreatmentsComponent,
    NotFoundComponent,
    AppointmentsComponent,
    ProfessionalsComponent,
    AdminComponent,
    TreatmentDetailComponent,
    TreatmentListComponent,
    AppointmentDetailsComponent,
    AppointmentStatusComponent,
    AppointmentCardComponent,
    ProfessionalsDetailComponent,
    ProfessionalsListComponent,
    EmployeeTreatmentsComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    AccountService,
    AppointmentService,
    ProfessionalsService,
    TreatmentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
