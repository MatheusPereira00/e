import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  constructor(private router: Router) {}

  cadastroForm = new FormGroup({
    name: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email],
    }),
    senha: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    confirmar: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    cpf: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    rg: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    data: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    celular: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    city: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
  });
  
  onSubmit() {
    console.log(this.cadastroForm.value);
  }
}
