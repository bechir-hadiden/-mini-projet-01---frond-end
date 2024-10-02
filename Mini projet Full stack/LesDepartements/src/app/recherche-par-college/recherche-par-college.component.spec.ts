import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParCollegeComponent } from './recherche-par-college.component';

describe('RechercheParCollegeComponent', () => {
  let component: RechercheParCollegeComponent;
  let fixture: ComponentFixture<RechercheParCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheParCollegeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheParCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
