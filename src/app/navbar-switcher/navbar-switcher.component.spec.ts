import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSwitcherComponent } from './navbar-switcher.component';

describe('NavbarSwitcherComponent', () => {
  let component: NavbarSwitcherComponent;
  let fixture: ComponentFixture<NavbarSwitcherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarSwitcherComponent]
    });
    fixture = TestBed.createComponent(NavbarSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
