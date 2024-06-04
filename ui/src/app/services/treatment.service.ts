import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Treatment } from '../common/model/treatment.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  private baseUrl = 'http://localhost:8080/api/treatments'

  constructor(private http: HttpClient) { }

  getTreatments(): Observable<Treatment[]> {
    return this.http.get<Array<Treatment>>(`${this.baseUrl}`);
  }

  getTreatmentById(id: number) {
    return this.http.get<Treatment>(`${this.baseUrl}/${id}`);
  }

  getEmployeesByTreatmentId(id: number) {
    return this.http.get<any>(`${this.baseUrl}/${id}/persons`);
  }
}
