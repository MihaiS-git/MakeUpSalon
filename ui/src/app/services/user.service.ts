import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../common/model/user.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Role } from '../common/model/role.enum';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8080/api/users'

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  getUserByEmail(email: string, headers: HttpHeaders): Observable<any> {
    return this.http.get<User>(`${this.baseUrl}/${email}`, { headers });
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getUsersByRole(role: string): Observable<User[]>  {
    return this.http.get<User[]>(`${this.baseUrl}/role/${role}`);
  }

}
