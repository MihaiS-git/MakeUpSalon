import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { RecoverComponent } from './components/recover/recover.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { TreatmentsComponent } from './components/treatments/treatments.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { ProfessionalsComponent } from './components/professionals/professionals.component';
import { AdminComponent } from './components/admin/admin.component';
import { TreatmentListComponent } from './components/treatments/treatment-list/treatment-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfessionalsDetailComponent } from './components/professionals/professionals-detail/professionals-detail.component';
import { ProfessionalsListComponent } from './components/professionals/professionals-list/professionals-list.component';
import { EmployeeTreatmentsComponent } from './components/professionals/employee-treatments/employee-treatments.component';
import { ResetPasswordComponent } from './components/recover/reset-password/reset-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'recover', component: RecoverComponent, children: [
      {path: 'reset-password', component: ResetPasswordComponent},
      {path: 'reset-password/:token', component: ResetPasswordComponent}
  ] },
  {
    path: 'treatments', component: TreatmentsComponent, children: [
      { path: '', redirectTo: 'treatment-list', pathMatch: 'full' },
      { path: 'treatment-list', component: TreatmentListComponent },
    ]
  },
  {
    path: 'professionals', component: ProfessionalsComponent, children: [
      { path: '',  redirectTo: 'professionals-list', pathMatch: 'full' },
      { path: 'professionals-list', component:  ProfessionalsListComponent },
      { path: 'professionals-detail', component:  ProfessionalsDetailComponent },
      { path: ':employeeId/treatments', component: EmployeeTreatmentsComponent },
    ]
  },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
