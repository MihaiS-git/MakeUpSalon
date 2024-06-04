import { Component, OnInit } from '@angular/core';
import { Treatment } from '../../../common/model/treatment.model';
import { TreatmentService } from '../../../services/treatment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treatment-list',
  templateUrl: './treatment-list.component.html',
  styleUrl: './treatment-list.component.css'
})
export class TreatmentListComponent implements OnInit {
  treatments: Treatment[] = [];
  errorMessage: string = "";

  constructor(private treatmentService: TreatmentService, private router: Router) { }

  ngOnInit(): void {
    this.getTreatments();
  }

  getTreatments() {
    this.treatmentService.getTreatments()
      .subscribe({
        next: (treatments) => {
          this.treatments = treatments;
        },
        error: (err: any) => {
          this.errorMessage = err
        },
        complete: () => {
        }
      })
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

  close() {
    this.router.navigate(['']);
  }
}
