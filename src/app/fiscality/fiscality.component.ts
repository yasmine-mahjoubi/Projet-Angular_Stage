
import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
  selector: 'app-fiscality',
  templateUrl: './fiscality.component.html',
  styleUrls: ['./fiscality.component.scss']
})
export class FiscalityComponent {
  constructor(private router: Router) { }

  goToFiscality() {
    this.router.navigate(['/userbord']);
  }
}
