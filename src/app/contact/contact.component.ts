import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactform: FormGroup;
  submitted = false;
  imagePreview: string | ArrayBuffer | null = null;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactform = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', Validators.required],
      description: ['', Validators.required],
      file: [null]
    });
  }

  get f() {
    return this.contactform.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactform.invalid) {
      return;
    }

    // Process the form data
    console.log('Form Data:', this.contactform.value);
  }

  onReset(): void {
    this.submitted = false;
    this.contactform.reset();
    this.imagePreview = null;
    this.fileUploaded = false;
  }

  onImagePick(event: Event): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.contactform.patchValue({ file: file });
    this.contactform.get('file').updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      this.fileUploaded = true;
    };
    reader.readAsDataURL(file);
  }
}
