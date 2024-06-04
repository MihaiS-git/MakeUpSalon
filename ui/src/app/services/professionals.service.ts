import { Injectable } from '@angular/core';
import { Employee } from '../common/model/employee.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {
  baseUrl = 'http://localhost:8080/api/persons';
  private employee: Employee | null = null;

  constructor(private http: HttpClient) { }

  setSelectedEmployee(employee: Employee) {
    this.employee = employee;
  }

  getSelectedEmployee(): Employee | null {
    return this.employee;
  }

  getTreatmentsByEmployeeId(id: number) {
    return this.http.get<any>(`${this.baseUrl}/id/${id}/treatments`);
  }


}
