import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {


  constructor( private formBuilder: FormBuilder) {}

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: [''],
    email: this.formBuilder.control('', Validators.email)
  })
  
  public submitForm() {
    console.log (this.cadastroForm)
  }
}
