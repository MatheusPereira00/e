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
import { CustomValidationMessageComponent } from '../../../custom-validation-message/custom-validation-message.component';
import { take } from 'rxjs';
import { ProductService } from 'src/app/components/services/product.service';
import { Product } from 'src/app/components/models/product-interface';

@Component({
  selector: 'app-add-edit-products',
  standalone: true,
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    CustomValidationMessageComponent,
  ],
})
export class AddEditProductsComponent implements OnInit {
  public categories: Category[] = [];
  public subCategories: subCategory[] = [];
  public products: Product[] = [];
  public id!: string | null;
  public isEditMode = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private categoriasService: CategoriasService,
    private subCategoriasService: SubcategoriasService,
    private productsServie: ProductService
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
  public getProducts(): void {
    this.productsServie.getProduct().subscribe(data => {
      this.products = data;
    });
  }

  public onSubmit(): void {
    if (this.isEditMode) {
      const formData = this.form.getRawValue();
      this.productsServie
        .updateProducts(Number(this.id!), formData)
        .pipe(take(1))
        .subscribe();
    }
    if (!this.isEditMode) {
      const formData = this.form.getRawValue();
      this.productsServie.postProducts(formData).pipe(take(1)).subscribe();
    }
    this.router.navigate(['adm/products']);
  }
}
