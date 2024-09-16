import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalsDetailComponent } from './professionals-detail.component';

describe('ProfessionalsDetailComponent', () => {
  let component: ProfessionalsDetailComponent;
  let fixture: ComponentFixture<ProfessionalsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfessionalsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
