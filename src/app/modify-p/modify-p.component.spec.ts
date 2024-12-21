import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPComponent } from './modify-p.component';

describe('ModifyPComponent', () => {
  let component: ModifyPComponent;
  let fixture: ComponentFixture<ModifyPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyPComponent]
    });
    fixture = TestBed.createComponent(ModifyPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
