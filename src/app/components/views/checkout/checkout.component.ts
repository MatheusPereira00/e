import { Component, DestroyRef, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { CustomValidationMessageComponent } from "../custom-validation-message/custom-validation-message.component";
import { CepService } from '../../service/cep.service';
import { cep } from '../../models/cep';
import { HttpClientModule } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, CustomValidationMessageComponent, HttpClientModule],
  providers: [CepService]
})
export class CheckoutComponent {

  cep: cep = {};

  private _destroyRef = inject(DestroyRef);

  constructor(private router: Router, public cepService: CepService) { }

  cadastroForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true, validators: [Validators.required, Validators.email],
    }),
    senha: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    confirmar: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    cpf: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    rg: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    data: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    celular: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    cep: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    endereco: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    num: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    comple: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    refe: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    bairro: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    cidade: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    estado: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    pais: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
  });

  onSubmit() {
    console.log(this.cadastroForm.value);
  }

  public getCep(): void {
    this.cadastroForm.get('cep')?.valueChanges.subscribe((cep: string) => {
      if (cep.length === 8) {
        this.cepService
          .getCep(cep)
          .pipe(takeUntilDestroyed(this._destroyRef))
          .subscribe(data => {
            console.log(data);
            this.cadastroForm.patchValue({
              endereco: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.localidade,
              pais: 'Brasil',
            });
          });
      }
    });
  }
}
