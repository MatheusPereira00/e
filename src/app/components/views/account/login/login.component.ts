import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CustomValidationMessageComponent } from "../../custom-validation-message/custom-validation-message.component";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    providers: [],
    imports: [RouterLink, ReactiveFormsModule, CustomValidationMessageComponent]
})
export class LoginComponent {
  constructor(private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true, validators: [Validators.required, Validators.email],
    }),
    senha: new FormControl('', {
      nonNullable: true, validators: [Validators.required],
    }),
  })
}
