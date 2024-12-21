import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inclure-param',
  templateUrl: './inclure-param.component.html',
  styleUrls: ['./inclure-param.component.scss']
})
export class InclureParamComponent {
  constructor(private router: Router) {}
  onCheckboxChange(event: any) {
    if (event.checked) {
      this.router.navigate(['/inclureP']);
    }
  }
  onCheckboxChange2(event: any) {
    if (event.checked) {
      this.router.navigate(['/affForm']);
    }
  }

}
