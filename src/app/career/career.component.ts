import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  candidateForm: FormGroup;
  mobileMismatch = false;
  emailMismatch = false;
  showOtherSpecialty = false;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.candidateForm = this.fb.group({
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      mobile: ['', Validators.required],
      confirmMobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmEmail: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      specialite: ['', Validators.required],
      otherSpecialty: [''],
      cv: [null, Validators.required],
      message: ['', Validators.required]
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    this.candidateForm.patchValue({
      cv: file
    });
  }

  checkMobiles(): void {
    const mobile = this.candidateForm.get('mobile')?.value;
    const confirmMobile = this.candidateForm.get('confirmMobile')?.value;
    this.mobileMismatch = mobile !== confirmMobile;
  }

  checkEmails(): void {
    const email = this.candidateForm.get('email')?.value;
    const confirmEmail = this.candidateForm.get('confirmEmail')?.value;
    this.emailMismatch = email !== confirmEmail;
  }

  onSpecialtyChange(): void {
    const specialty = this.candidateForm.get('specialite')?.value;
    this.showOtherSpecialty = specialty === 'autre';
    if (!this.showOtherSpecialty) {
      this.candidateForm.get('otherSpecialty')?.reset();
    }
  }

  onSubmit(): void {
    this.checkMobiles();
    this.checkEmails();
    if (this.candidateForm.valid && !this.mobileMismatch && !this.emailMismatch) {
      this.successMessage = 'Votre candidature a été envoyée avec succès.';
      // Logic to handle form submission goes here
    } else {
      this.successMessage = null;
    }
  }

  onReset(): void {
    this.candidateForm.reset();
    this.mobileMismatch = false;
    this.emailMismatch = false;
    this.showOtherSpecialty = false;
    this.successMessage = null;
  }
}
