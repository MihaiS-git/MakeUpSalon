import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTreatmentsComponent } from './employee-treatments.component';

describe('EmployeeTreatmentsComponent', () => {
  let component: EmployeeTreatmentsComponent;
  let fixture: ComponentFixture<EmployeeTreatmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeTreatmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeTreatmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
