import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InclureParamComponent } from './inclure-param.component';

describe('InclureParamComponent', () => {
  let component: InclureParamComponent;
  let fixture: ComponentFixture<InclureParamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InclureParamComponent]
    });
    fixture = TestBed.createComponent(InclureParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
