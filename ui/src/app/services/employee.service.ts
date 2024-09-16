import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeId: number;

  constructor() { }

  setSelectedEmployeeId(id: number) {
    this.employeeId = id;
  }

  getSelectedEmployeeId() {
    return this.employeeId;
  }
}
