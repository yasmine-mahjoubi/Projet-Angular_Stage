import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-affichage-form',
  templateUrl: './affichage-form.component.html',
  styleUrls: ['./affichage-form.component.scss']
})
export class AffichageFormComponent {
   constructor(private router: Router,private location: Location) {}
  onCheckboxChange(event: any) {
    if (event.checked) {
      this.router.navigate(['/affForm']);
    }
  }
  onCheckboxChange2(event: any) {
    if (event.checked) {
      this.router.navigate(['/inclureP']);
    }
  }
  goBack() {
    this.location.back();
  }
   addFields() {
    const container = document.createElement('div');
    container.classList.add('row');

    const compteTTC = `
      <div class="col-md-4 mt-4">
        <label for="validationDefault02" class="form-label">Compte TTC</label>
        <input type="text" class="form-control" id="validationDefault02" value="" required />
      </div>
    `;
    const compteTVA = `
      <div class="col-md-4 mt-4">
        <label for="validationDefault02" class="form-label">Compte TVA</label>
        <input type="text" class="form-control" id="validationDefault02" value="" required />
      </div>
    `;
    
    const tauxTVA = `
      <div class="col-md-4 mt-4">
        <label for="validationDefault04" class="form-label">Taux TVA</label>
        <select class="form-select" id="validationDefault04" required>
          <option>7%</option>
          <option>13%</option>
          <option>19%</option>
          <option>exonere</option>
          <option>export</option>
          <option>suspension</option>
        </select>
      </div>
    `;

    container.innerHTML = compteTTC + tauxTVA+compteTVA;
    document.getElementById('dynamic-fields')?.appendChild(container);
  }

}




  