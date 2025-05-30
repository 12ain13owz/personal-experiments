import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorFieldComponent } from './error-field.component';

describe('ErrorFieldComponent', () => {
  let component: ErrorFieldComponent;
  let fixture: ComponentFixture<ErrorFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
