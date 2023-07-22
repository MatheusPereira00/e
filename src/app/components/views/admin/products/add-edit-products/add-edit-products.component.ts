import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-edit-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.scss'],
})
export class AddEditProductsComponent {
  constructor(private router: Router) {}

  public form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    sku: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    price: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    categoria: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    subCategoria: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    status: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  public onSubmit(): void {
    console.log(this.form.value);
  }
}
