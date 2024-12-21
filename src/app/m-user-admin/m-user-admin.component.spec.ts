import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MUserAdminComponent } from './m-user-admin.component';

describe('MUserAdminComponent', () => {
  let component: MUserAdminComponent;
  let fixture: ComponentFixture<MUserAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MUserAdminComponent]
    });
    fixture = TestBed.createComponent(MUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
