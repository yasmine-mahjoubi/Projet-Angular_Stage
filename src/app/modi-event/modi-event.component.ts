import { Component } from '@angular/core';

@Component({
  selector: 'app-modi-event',
  templateUrl: './modi-event.component.html',
  styleUrls: ['./modi-event.component.scss']
})
export class ModiEventComponent {
  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(file.name); // Handle the selected file
    }
  }
  openExcelFile(): void {
    // Remplacez l'URL par l'URL de votre fichier Excel
    const excelFileUrl =  'https://docs.google.com/spreadsheets/d/1K7UGA3Kte-UQ6Ajh5cSyABW0BLatuodvR1jhE-8ttvo/edit?usp=sharing';

    // Ouvre le fichier Excel dans un nouvel onglet ou une nouvelle fenêtre
    window.open(excelFileUrl, '_blank');
  }
}
