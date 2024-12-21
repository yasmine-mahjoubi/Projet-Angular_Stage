import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiscalityComponent } from './fiscality.component';

describe('FiscalityComponent', () => {
  let component: FiscalityComponent;
  let fixture: ComponentFixture<FiscalityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiscalityComponent]
    });
    fixture = TestBed.createComponent(FiscalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
