import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CategoriasService } from 'src/app/components/services/categorias.service';
import { Category } from 'src/app/components/models/category';
import { subCategory } from 'src/app/components/models/subcategory';
import { SubcategoriasService } from 'src/app/components/services/subcategorias.service';

@Component({
  selector: 'app-add-edit-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.scss'],
})
export class AddEditProductsComponent implements OnInit {
  public categories: Category[] = [];
  public subCategories: subCategory[] = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private categoriasService: CategoriasService,
    private subCategoriasService: SubcategoriasService
  ) {}

  public form: FormGroup = new FormGroup({});

  public ngOnInit(): void {
    this.getCategorys();
    this.getsubCategorys();
    this.form = this.fb.group({
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
      estoque: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      urlImagem: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      descrição: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  public getCategorys(): void {
    this.categoriasService.getCategorys().subscribe(data => {
      this.categories = data;
    });
  }
  public getsubCategorys(): void {
    this.subCategoriasService.getSubCategorys().subscribe(data => {
      this.subCategories = data;
    });
  }
  public onSubmit(): void {
    console.log(this.form.value);
  }
}
