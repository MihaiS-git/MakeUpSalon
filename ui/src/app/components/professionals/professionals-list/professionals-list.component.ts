import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { UserService } from '../../../services/user.service';
import { User } from '../../../common/model/user.model';
import { Person } from '../../../common/model/person.model';
import { switchMap, catchError, of, forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professionals-list',
  templateUrl: './professionals-list.component.html',
  styleUrl: './professionals-list.component.css'
})
export class ProfessionalsListComponent implements OnInit {
  usersEmployees: User[] = [];
  employees: Person[] = [];
  errorMessage: string = "";

  constructor(private userService: UserService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeesAndPersons();
  }

  getEmployeesAndPersons() {
    this.userService.getUsersByRole('EMPLOYEE').pipe(
      switchMap(users => {
        this.usersEmployees = users;
        const personObservables = users.map(user =>
          this.accountService.getPersonById(user.userId).pipe(
            catchError(err => {
              this.errorMessage = err;
              console.log(err);
              return of(null);
            })
          )
        );
        return forkJoin(personObservables);
      }),
    ).subscribe({
      next: (persons: (Person | null)[]) => {
        this.employees = persons.filter((person): person is Person => person !== null);
      },
      error: (err: any) => {
        this.errorMessage = err;
        console.log(err);
      }
    });
  }

  sortByNameAscending() {
    this.employees.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }

  sortByNameDescending() {
    this.employees.sort((a, b) => b.firstName.localeCompare(a.firstName));
  }

  close() {
    this.router.navigate(['']);
  }
}
