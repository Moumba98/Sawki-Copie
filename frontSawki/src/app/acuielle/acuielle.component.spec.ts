import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuielleComponent } from './acuielle.component';

describe('AcuielleComponent', () => {
  let component: AcuielleComponent;
  let fixture: ComponentFixture<AcuielleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcuielleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcuielleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

