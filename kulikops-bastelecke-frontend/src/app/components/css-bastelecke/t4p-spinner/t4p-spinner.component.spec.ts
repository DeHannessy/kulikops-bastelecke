import { ComponentFixture, TestBed } from '@angular/core/testing';

import { T4pSpinnerComponent } from './t4p-spinner.component';

describe('T4pSpinnerComponent', () => {
  let component: T4pSpinnerComponent;
  let fixture: ComponentFixture<T4pSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ T4pSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(T4pSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
