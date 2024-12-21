import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comptabilite',
  templateUrl: './comptabilite.component.html',
  styleUrls: ['./comptabilite.component.scss']
})
export class ComptabiliteComponent {
  constructor(private router: Router) { }

  goToFiscality() {
    this.router.navigate(['/userbord']);
  }

}
