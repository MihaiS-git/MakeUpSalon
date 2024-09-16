import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Role } from '../../common/model/role.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  role: Role;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.isLoggedIn = !!user;
      this.role = user.role;
    });

    const userData = localStorage.getItem('userData');
    if (userData) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    this.authService.logout();
  }
}
