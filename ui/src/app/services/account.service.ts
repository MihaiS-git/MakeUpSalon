import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../common/model/person.model';
import { Employee } from '../common/model/employee.model';
import { Appointment } from '../common/model/appointment.model';
import { PersonDto } from '../common/dto/personDto.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = 'http://localhost:8080/api/persons'

  constructor(private http: HttpClient) { }

  getAllPersons(): Observable<Person[]> {
    return this.http.get<Array<Person>>(`${this.baseUrl}`);
  }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<any>(`${this.baseUrl}/id/${id}`);
  }

  updatePerson(id: number, person: PersonDto): Observable<Person> {
    return this.http.put<Person>(`${this.baseUrl}/id/${id}`, person);
  }

  getAppointmentsByPersonId(id: number): Observable<Array<Appointment>>  {
    return this.http.get<Array<Appointment>>(`${this.baseUrl}/id/${id}/appointments`);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

}
