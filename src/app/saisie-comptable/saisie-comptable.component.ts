import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface DataItem {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-saisie-comptable',
  templateUrl: './saisie-comptable.component.html',
  styleUrls: ['./saisie-comptable.component.scss'] 
})
export class SaisieComptableComponent {
  cellContent = "Contenu long pour tester l'affichage complet au survol avec un tooltip.";

  constructor(private snackBar: MatSnackBar) {}

  isTextOverflow(cellContent: string): boolean {
    // Vérifie si le texte dépasse la largeur du champ
    const element = document.createElement('span');
    element.textContent = cellContent;
    element.style.visibility = 'hidden';
    element.style.position = 'absolute';
    element.style.whiteSpace = 'nowrap';
    document.body.appendChild(element);
    const isOverflowing = element.offsetWidth > document.getElementById('this.value').clientWidth;
    document.body.removeChild(element);
    return isOverflowing;
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  
  step = 1;
  selectedYear: number | null = null;
  selectedMonth: string | null = null;
  years = [2021, 2022, 2023, 2024];
  months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  dataList = [
    { name: 'Chiffre d\'affaires', selected: false },
    { name: 'Achats', selected: false },
    { name: 'Banques', selected: false },
    { name: 'Salaires', selected: false }
  ];
  selectedData: string | null = null;
  selectedMode: string | null = null;

  // Sample Data
  caData = [];
  achatsData = [];
  banquesData = [];
  salairesData = [];

  ngOnInit() {}

  onYearChange() {
    this.selectedMonth = null;
  }

  onMonthChange() {
    if (this.selectedYear && this.selectedMonth) {
      this.nextStep();
    }
  }

  onDataSelect(data: any) {
    const allDeselected = this.dataList.every(d => !d.selected);
    if (!allDeselected) {
      this.nextStep();
    }
  }

  selectTab(dataName: string) {
    this.selectedData = dataName;
  }

  setMode(mode: string) {
    this.selectedMode = mode;
  }

  addRow() {
    if (this.selectedData === 'Chiffre d\'affaires') {
      this.caData.push({});  // Add new empty row
    } else if (this.selectedData === 'Achats') {
      this.achatsData.push({});  // Add new empty row
    } else if (this.selectedData === 'Salaires') {
      this.salairesData.push({});  // Add new empty row
    }
  }

  isNextEnabled() {
    if (this.step === 1) {
      return this.selectedYear !== null && this.selectedMonth !== null;
    } else if (this.step === 2) {
      return this.dataList.some(data => data.selected);
    }
    return true;
  }

  nextStep() {
    if (this.isNextEnabled()) {
      this.step++;
    }
  }

  previousStep() {
    this.step--;
  }

  saveData() {
    // Save data logic based on selected data type
    if (this.selectedData === 'Chiffre d\'affaires') {
      console.log('Saving CA data', this.caData);
    } else if (this.selectedData === 'Achats') {
      console.log('Saving Achats data', this.achatsData);
    } else if (this.selectedData === 'Salaires') {
      console.log('Saving Salaires data', this.salairesData);
    }
  }

  reset() {
    this.step = 1;
    this.selectedYear = null;
    this.selectedMonth = null;
    this.dataList.forEach(data => data.selected = false);
    this.selectedData = null;
    this.selectedMode = null;
    this.caData = [];
    this.achatsData = [];
    this.banquesData = [];
    this.salairesData = [];
  }
}