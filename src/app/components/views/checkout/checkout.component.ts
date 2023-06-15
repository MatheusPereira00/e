import { Component, } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { CustomValidationMessageComponent } from "../custom-validation-message/custom-validation-message.component";


@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, CustomValidationMessageComponent]
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
    cep: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    endereco: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    num: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    comple: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    refe: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    bairro: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    cidade: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }),
    estado: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }), 
    pais: new FormControl('', {nonNullable: true, validators: [Validators.required],
    }), 
  });
  
  onSubmit() {
    console.log(this.cadastroForm.value);
  }

}
