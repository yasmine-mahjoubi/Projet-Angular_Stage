import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageFormComponent } from './affichage-form.component';

describe('AffichageFormComponent', () => {
  let component: AffichageFormComponent;
  let fixture: ComponentFixture<AffichageFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AffichageFormComponent]
    });
    fixture = TestBed.createComponent(AffichageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
