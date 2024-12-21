import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectedHomeNavComponent } from './disconnected-home-nav.component';

describe('DisconnectedHomeNavComponent', () => {
  let component: DisconnectedHomeNavComponent;
  let fixture: ComponentFixture<DisconnectedHomeNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisconnectedHomeNavComponent]
    });
    fixture = TestBed.createComponent(DisconnectedHomeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
