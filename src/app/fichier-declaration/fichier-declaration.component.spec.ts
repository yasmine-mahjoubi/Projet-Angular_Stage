import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichierDeclarationComponent } from './fichier-declaration.component';

describe('FichierDeclarationComponent', () => {
  let component: FichierDeclarationComponent;
  let fixture: ComponentFixture<FichierDeclarationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FichierDeclarationComponent]
    });
    fixture = TestBed.createComponent(FichierDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
