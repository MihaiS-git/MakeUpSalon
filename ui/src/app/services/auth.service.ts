import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../common/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = "http://localhost:8080/api/auth";
  user = new BehaviorSubject<User>(null);
  _user: User;
  _email: string;

  constructor(private http: HttpClient, private router: Router, private userService: UserService) {
    this.checkLoginStatus();
  }

  register(user: any) {
    this._user = user;
    console.log(user);

    return this.http.post<any>(`${this.baseUrl}/register`, user)
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleRegistration(resData.token);
        })
      );
  }

  handleRegistration(token: any) {
    const userData = {
      sToken: token,
      user: this._user
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  login(email: string, password: string) {
    this._email = email;
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(resData.token, email);
        }),
      );
  }

  handleAuthentication(token: any, email: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    this.userService.getUserByEmail(email, headers)
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this._user = resData;
          this.user.next(this._user);

          const userData = {
            sToken: token,
            user: this._user
          };
          localStorage.setItem('userData', JSON.stringify(userData));
        })
      ).subscribe();
  }

  handleError(errorRes: HttpErrorResponse) {
    let errorMessage = errorRes.message;
    console.log('Auth Service: ', errorMessage);
    return throwError(errorMessage);
  }

  getToken(): string | null {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      return parsedUserData.sToken || null;
    }
    return null;
  }

  getUser(email: string): Observable<User> {
    const token = this.getToken();
    if (!token) {
      return throwError('No token found!');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.userService.getUserByEmail(email, headers);
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
  }

  changePassword(email: string) {
    return this.http.patch<any>(`${this.baseUrl}/recover-password/email/${email}`, { });
  }

  changePasswordWithId(newPassword: string, confirmationPassword: string, userId: number) {
    return this.http.patch<any>(`${this.baseUrl}/recover-password/id/${userId}`, { newPassword, confirmationPassword });
  }

  checkLoginStatus(): boolean {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      this.user.next(parsedUserData.user);
      return true;
    } else {
      this.user.next(null);
      return false;
    }
  }

  verifyTokenAndChangePassword(token: string, newPassword: string, confirmationPassword: string ): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/reset-password?token=${token}`, {newPassword, confirmationPassword});
  }
}
