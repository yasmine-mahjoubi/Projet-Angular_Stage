import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedHomeNavComponent } from './connected-home-nav.component';

describe('ConnectedHomeNavComponent', () => {
  let component: ConnectedHomeNavComponent;
  let fixture: ComponentFixture<ConnectedHomeNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectedHomeNavComponent]
    });
    fixture = TestBed.createComponent(ConnectedHomeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
