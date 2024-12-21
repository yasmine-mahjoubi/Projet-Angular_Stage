import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedNotHomeNavComponent } from './connected-not-home-nav.component';

describe('ConnectedNotHomeNavComponent', () => {
  let component: ConnectedNotHomeNavComponent;
  let fixture: ComponentFixture<ConnectedNotHomeNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectedNotHomeNavComponent]
    });
    fixture = TestBed.createComponent(ConnectedNotHomeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
