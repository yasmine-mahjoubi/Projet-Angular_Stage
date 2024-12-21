import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabBoardComponent } from './collab-board.component';

describe('CollabBoardComponent', () => {
  let component: CollabBoardComponent;
  let fixture: ComponentFixture<CollabBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollabBoardComponent]
    });
    fixture = TestBed.createComponent(CollabBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
