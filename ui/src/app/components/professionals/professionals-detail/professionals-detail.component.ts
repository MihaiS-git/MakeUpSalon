import { EmployeeService } from './../../../services/employee.service';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfessionalsService } from '../../../services/professionals.service';

@Component({
  selector: 'app-professionals-detail',
  templateUrl: './professionals-detail.component.html',
  styleUrl: './professionals-detail.component.css'
})
export class ProfessionalsDetailComponent {
  @Input() employee: any;
  @Input() index: any;
  employeeId: number;

  constructor(private router: Router, private professionalsService: ProfessionalsService, private employeeService: EmployeeService) { }

  showEmployeeTreatmentsList() {
    this.professionalsService.setSelectedEmployee(this.employee);
    this.employeeId = this.employee.personId;
    this.employeeService.setSelectedEmployeeId(this.employeeId);
    this.router.navigate([`/professionals/${this.employeeId}/treatments`]);
  }

}
