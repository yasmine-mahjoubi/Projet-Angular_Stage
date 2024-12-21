import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-fichier-declaration',
  templateUrl: './fichier-declaration.component.html',
  styleUrls: ['./fichier-declaration.component.scss']
})
export class FichierDeclarationComponent implements OnInit {
  fichierDeclarationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.fichierDeclarationForm = this.fb.group({
      enregistrements: this.fb.array([]) // Initialize the array to hold multiple enregistrements
    });
  }

  ngOnInit(): void {
    this.addEnregistrement(); // Initial call to add an enregistrement
  }

  get enregistrements(): FormArray {
    return this.fichierDeclarationForm.get('enregistrements') as FormArray;
  }

  addEnregistrement(): void {
    const enregistrementGroup = this.fb.group({
      field1: ['', Validators.required],
      field2: ['', Validators.required],
      field3: ['', Validators.required],
      field4: ['', Validators.required],
      value1: ['', Validators.required],
      value2: ['', Validators.required]
    });

    this.enregistrements.push(enregistrementGroup);
  }

  onSubmit(): void {
    console.log(this.fichierDeclarationForm.value);
    this.generateTextFile();
  }

  generateTextFile(): void {
    const enregistrements = this.fichierDeclarationForm.value.enregistrements;
    let fileContent = '';

    enregistrements.forEach((enregistrement: any, index: number) => {
      fileContent += `Enregistrement ${index + 1}\n`;
      fileContent += `Field1: ${enregistrement.field1}\n`;
      fileContent += `Field2: ${enregistrement.field2}\n`;
      fileContent += `Field3: ${enregistrement.field3}\n`;
      fileContent += `Field4: ${enregistrement.field4}\n`;
      fileContent += `Value1: ${enregistrement.value1}\n`;
      fileContent += `Value2: ${enregistrement.value2}\n\n`;
    });

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'declaration.txt');
  }
}
