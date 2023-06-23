import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CustomValidationMessageComponent } from "../../custom-validation-message/custom-validation-message.component";



@Component({
    selector: 'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls: ['./create-account.component.scss'],
    standalone: true,
    providers: [],
    imports: [ReactiveFormsModule, CustomValidationMessageComponent, RouterLink]
})
export class CreateAccountComponent {
  constructor(private router: Router ) { }

  formCreate = new FormGroup({
    name: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    usuario: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true, validators: [Validators.required, Validators.email],
    }),
    senha: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
  })

  onSubmit() {
    console.log(this.formCreate.value);
  }
}
