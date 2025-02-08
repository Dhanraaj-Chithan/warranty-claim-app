import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-warranty-claim',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './warranty-claim.component.html',
  styleUrls: ['./warranty-claim.component.css']
})
export class WarrantyClaimComponent {
  warrantyForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.warrantyForm = this.fb.group({
      companyName: [''],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      postcode: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      invoiceNumber: ['', Validators.required],
      issueDescription: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        if (file.size <= 5 * 1024 * 1024) {
          this.selectedFile = file;
        } else {
          alert('File size should be less than 5MB');
        }
      } else {
        alert('Please upload only image files');
      }
    }
  }

  onSubmit(): void {
    if (this.warrantyForm.valid) {
      console.log('Form Data:', this.warrantyForm.value);
      console.log('Selected File:', this.selectedFile);
      alert('Submitted')
    } else {
      Object.keys(this.warrantyForm.controls).forEach(key => {
        const control = this.warrantyForm.get(key);
        control?.markAsTouched();
      });
    }
  }
}