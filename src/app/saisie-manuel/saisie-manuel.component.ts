import { Component } from '@angular/core';

interface Salary {
  type: string;
  otherType?: string;
  matricule: string;
  nomPrenom: string;
  natureContrat: string;
  ficheContrat: string;
  salaireBrut: number;
  salaireNet: number;
}

@Component({
  selector: 'app-saisie-manuel',
  templateUrl: './saisie-manuel.component.html',
  styleUrls: ['./saisie-manuel.component.scss']
})
export class SaisieManuelComponent {
  step: number = 3;
  selectedData: string = 'Banques';
  salaryType: string = '';
  otherSalaryType: string = '';

  dataList: { name: string, selected: boolean }[] = [
    { name: "Chiffre d'affaires", selected: false },
    { name: "Achats", selected: false },
    { name: "Banques", selected: true },
    { name: "Salaires", selected: false }
  ];

  salaries: Salary[] = [{
    type: '',
    matricule: '',
    nomPrenom: '',
    natureContrat: '',
    ficheContrat: '',
    salaireBrut: 0,
    salaireNet: 0
  }];

  onDataSelect(data: { name: string; selected: boolean }) {
    if (data.selected) {
      this.selectedData = data.name;
    }
  }

  onSalaryTypeChange(index: number) {
    const salary = this.salaries[index];
    if (salary.type !== 'autre') {
      salary.otherType = '';
    }
  }

  addSalary() {
    this.salaries.push({
      type: '',
      matricule: '',
      nomPrenom: '',
      natureContrat: '',
      ficheContrat: '',
      salaireBrut: 0,
      salaireNet: 0
    });
  }

  deleteSalary(index: number) {
    this.salaries.splice(index, 1);
  }

  calculateTotal(field: 'salaireBrut' | 'salaireNet'): number {
    let total = 0;
    for (const salary of this.salaries) {
      total += salary[field];
    }
    return total;
  }

  reset() {
    this.salaryType = ''; // Réinitialiser le type de salaire sélectionné
  
    // Réinitialiser les valeurs des salaires
    this.salaries = [{
      type: '',
      matricule: '',
      nomPrenom: '',
      natureContrat: '',
      ficheContrat: '',
      salaireBrut: 0,
      salaireNet: 0
    }];
  }
}
