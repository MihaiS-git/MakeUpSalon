import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isLoggedIn = false;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.isLoggedIn = params['isLoggedIn'];
    });
   }

  ngOnInit(): void {

  }

}
