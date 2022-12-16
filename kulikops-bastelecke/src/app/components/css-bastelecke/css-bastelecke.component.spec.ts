import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssBasteleckeComponent } from './css-bastelecke.component';

describe('CssBasteleckeComponent', () => {
  let component: CssBasteleckeComponent;
  let fixture: ComponentFixture<CssBasteleckeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssBasteleckeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssBasteleckeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
