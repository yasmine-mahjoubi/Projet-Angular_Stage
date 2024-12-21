import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectedNotHomeNavComponent } from './disconnected-not-home-nav.component';

describe('DisconnectedNotHomeNavComponent', () => {
  let component: DisconnectedNotHomeNavComponent;
  let fixture: ComponentFixture<DisconnectedNotHomeNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisconnectedNotHomeNavComponent]
    });
    fixture = TestBed.createComponent(DisconnectedNotHomeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
