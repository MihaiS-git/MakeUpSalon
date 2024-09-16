import { Component, OnInit } from '@angular/core';
import { Employee } from '../../../common/model/employee.model';
import { Treatment } from '../../../common/model/treatment.model';
import { ProfessionalsService } from '../../../services/professionals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../services/employee.service';


@Component({
  selector: 'app-employee-treatments',
  templateUrl: './employee-treatments.component.html',
  styleUrl: './employee-treatments.component.css'
})
export class EmployeeTreatmentsComponent implements OnInit {
  employee: Employee | null = null;
  employeeId: number;
  treatments: Treatment[] = [];
  errorMessage = '';

  constructor(private professionalsService: ProfessionalsService, private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {
    this.employeeId = this.employeeService.getSelectedEmployeeId();
    this.getEmployeeAndTreatments(this.employeeId);
  }

  getEmployeeAndTreatments(employeeId: number) {
    this.employee = this.professionalsService.getSelectedEmployee();
    if (this.employee && this.employee.personId === employeeId) {
      this.getTreatments(employeeId);
    } else {
      this.errorMessage = 'Employee not found';
    }
  }

  getTreatments(employeeId: number) {
    this.professionalsService.getTreatmentsByEmployeeId(employeeId)
      .subscribe({
        next: (treatments) => {
          this.treatments = treatments;
        },
        error: (err: any) => {
          this.errorMessage = err;
        },
        complete: () => { }
      });
  }

  sortByNameAscending() {
    this.treatments.sort((a, b) => a.name.localeCompare(b.name));
  }

  sortByNameDescending() {
    this.treatments.sort((a, b) => b.name.localeCompare(a.name));
  }

  sortByPriceAscending() {
    this.treatments.sort((a, b) => a.price - b.price);
  }

  sortByPriceDescending() {
    this.treatments.sort((a, b) => b.price - a.price);
  }

  back() {
    this.router.navigate(['/professionals/professionals-list']);
  }

  close() {
    this.router.navigate(['']);
  }
}
