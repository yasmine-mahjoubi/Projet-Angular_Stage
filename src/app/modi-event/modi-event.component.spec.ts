import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiEventComponent } from './modi-event.component';

describe('ModiEventComponent', () => {
  let component: ModiEventComponent;
  let fixture: ComponentFixture<ModiEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModiEventComponent]
    });
    fixture = TestBed.createComponent(ModiEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
