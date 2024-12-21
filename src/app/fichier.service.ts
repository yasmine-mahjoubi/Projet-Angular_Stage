import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FichierService {

  constructor() { }

  generateFile(data: any): void {
    const content = this.formatData(data);
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'declaration.txt');
  }

  private formatData(data: any): string {
    let formattedData = '';
    data.forEach((record: any) => {
      formattedData += this.formatRecord(record);
    });
    return formattedData;
  }

  private formatRecord(record: any): string {
    switch (record.code) {
      case 'DECEMP00':
        return `${record.code}|${record.field1}|${record.field2}|${record.field3}|${record.field4}\n`;
      // Ajouter les cas pour les autres types d'enregistrements ici...
      default:
        return `${record.code}|${record.value1}|${record.value2}|${record.value3}|${record.value4}\n`;
    }
  }
}
