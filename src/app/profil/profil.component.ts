import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  user: any;

  constructor(private sanitizer: DomSanitizer){}
  get userDetails() {
    return [
      { imgSrc: 'assets/female.png', altText: 'Madame', label: 'Civilité', value: this.user.civilite, isDate: false },
      { imgSrc: 'assets/user-type.png', altText: 'Nature utilisateur', label: 'Nature utilisateur', value: this.user.nature, isDate: false },
      { imgSrc: 'assets/created-at.png', altText: 'Créé le(heure GMT)', label: 'Créé le(heure GMT)', value: this.user.created, isDate: true },
      { imgSrc: 'assets/last-modified.png', altText: 'Dernière modification', label: 'Dernière modification(heure GMT)', value: this.user.updated, isDate: true },
      { imgSrc: 'assets/phone.png', altText: 'Numéro mobile', label: 'Numéro mobile', value: this.user.mobile, isDate: false },
      { imgSrc: 'assets/utilisateur.png', altText: 'Type utilisateur', label: 'Type utilisateur', value: this.user.usertype, isDate: false },
      { imgSrc: 'assets/company.png', altText: 'Raison sociale', label: 'Raison sociale', value: this.user.raisonsociale, isDate: false },
      { imgSrc: 'assets/email.png', altText: 'Email', label: 'Email', value: this.user.email, isDate: false },
      { imgSrc: 'assets/client-code.png', altText: 'Code client', label: 'Code client', value: this.user.clientcode, isDate: false },
      { imgSrc: 'assets/activity.png', altText: 'Nature Activité', label: 'Nature Activité', value: this.user.natureactivite, isDate: false },
      { imgSrc: 'assets/sub-activity.png', altText: 'Sous-Activité', label: 'Sous-Activité', value: this.user.sousactivite, isDate: false },
      { imgSrc: 'assets/activity.png', altText: 'Spécialité', label: 'Spécialité', value: this.user.specialite, isDate: false },
      { imgSrc: 'assets/activity.png', altText: 'Sous-Spécialité', label: 'Sous-Spécialité', value: this.user.sousspecialite, isDate: false },
      { imgSrc: 'assets/exporter.png', altText: 'Totalement exportateur', label: 'Totalement exportateur', value: this.user.exportateur ? 'Oui' : 'Non', isDate: false },
      { imgSrc: 'assets/Activite.png', altText: 'Activité', label: 'Activité', value: this.user.activite, isDate: false },
      { imgSrc: 'assets/fiscal-id.png', altText: 'Carte d\'identification fiscale', label: 'Carte d\'identification fiscale', value: this.sanitizer.bypassSecurityTrustHtml(`<a href="${this.user.ficheUrl}" target="_blank">Aperçu CIF</a>`), isDate: false },
      { imgSrc: 'assets/investment.png', altText: 'Déclaration d\'investissement', label: 'Déclaration d\'investissement', value: this.sanitizer.bypassSecurityTrustHtml(`<a href="${this.user.ficheUrl2}" target="_blank">Aperçu DI</a>`), isDate: false },
      { imgSrc: 'assets/tax.png', altText: 'Régime fiscal en matières d\'impôts directs', label: 'Régime fiscal en matières d\'impôts directs', value: this.user.regimefiscalimpot, isDate: false },
      { imgSrc: 'assets/adresse.png', altText: 'Adresse D\'activité', label: 'Adresse D\'activité', value: this.user.adresseactivite, isDate: false },
      { imgSrc: 'assets/tax.png', altText: 'Régime fiscal en matières de TVA', label: 'Régime fiscal en matières de TVA', value: this.user.regimefiscaltva, isDate: false },
      { imgSrc: 'assets/date-effet.png', altText: 'Date d\'effet', label: 'Date d\'effet', value: this.user.dateeffet, isDate: true },
      { imgSrc: 'assets/postal-code.png', altText: 'Code Postal', label: 'Code Postal', value: this.user.codepostal, isDate: false }
    ];
  }
}