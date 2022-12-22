import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingOfThievesComponent } from './king-of-thieves.component';

describe('KingOfThievesComponent', () => {
  let component: KingOfThievesComponent;
  let fixture: ComponentFixture<KingOfThievesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingOfThievesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KingOfThievesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
