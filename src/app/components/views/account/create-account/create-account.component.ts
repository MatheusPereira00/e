import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CustomValidationMessageComponent } from '../../custom-validation-message/custom-validation-message.component';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  standalone: true,
  providers: [],
  imports: [ReactiveFormsModule, CustomValidationMessageComponent, RouterLink],
})
export class CreateAccountComponent {
  constructor(private router: Router) {}

  public formCreate = new FormGroup({
    nome: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    nomeSocial: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    Cpf: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    dataNascimento: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    telefone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    senha: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    Confirmar: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  public onSubmit(): void {
    console.log(this.formCreate.value);
  }
}
