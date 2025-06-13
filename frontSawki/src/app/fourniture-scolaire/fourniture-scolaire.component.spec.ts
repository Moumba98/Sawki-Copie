import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournitureScolaireComponent } from './fourniture-scolaire.component';

describe('FournitureScolaireComponent', () => {
  let component: FournitureScolaireComponent;
  let fixture: ComponentFixture<FournitureScolaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FournitureScolaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FournitureScolaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
