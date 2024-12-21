import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieManuelComponent } from './saisie-manuel.component';

describe('SaisieManuelComponent', () => {
  let component: SaisieManuelComponent;
  let fixture: ComponentFixture<SaisieManuelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaisieManuelComponent]
    });
    fixture = TestBed.createComponent(SaisieManuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
